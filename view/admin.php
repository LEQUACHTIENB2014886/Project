<?php
$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $tablesQuery = $conn->query("SHOW TABLES");
    $tables = $tablesQuery->fetchAll(PDO::FETCH_COLUMN);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $table = $_POST['table'];

        // Sửa dữ liệu trong bảng
        if (isset($_POST['editRow']) && isset($_POST['id'])) {
            $id = (int)$_POST['id'];
            $updates = [];
            foreach ($_POST['data'] as $column => $value) {
                if ($column == 'password' && !empty($value)) {
                    $value = password_hash($value, PASSWORD_DEFAULT);
                }
                $updates[] = "$column = :$column";
            }
            $updateQuery = "UPDATE $table SET " . implode(", ", $updates) . " WHERE id = :id"; // Cần kiểm tra tên cột ở đây
            $stmt = $conn->prepare($updateQuery);
            foreach ($_POST['data'] as $column => $value) {
                $stmt->bindValue(":$column", $value);
            }
            $stmt->bindValue(':id', $id);
            $stmt->execute();
        }

        // Thêm dữ liệu mới vào bảng
        if (isset($_POST['addRow'])) {
            $columns = implode(", ", array_keys($_POST['data']));
            $placeholders = implode(", ", array_map(fn($col) => ":$col", array_keys($_POST['data'])));
            $insertQuery = "INSERT INTO $table ($columns) VALUES ($placeholders)";
            $stmt = $conn->prepare($insertQuery);
            foreach ($_POST['data'] as $column => $value) {
                if ($column == 'password' && !empty($value)) {
                    $value = password_hash($value, PASSWORD_DEFAULT);
                }
                $stmt->bindValue(":$column", $value);
            }
            $stmt->execute();
        }

        // Xóa dữ liệu trong bảng
        if (isset($_POST['deleteRow']) && isset($_POST['id'])) {
            $id = (int)$_POST['id'];
            $deleteQuery = "DELETE FROM $table WHERE id = :id"; // Cần kiểm tra tên cột ở đây
            $stmt = $conn->prepare($deleteQuery);
            $stmt->bindValue(':id', $id);
            $stmt->execute();
        }
    }

    // Lấy thông tin cột và dữ liệu bảng
    $columns = [];
    $rows = [];
    if (isset($_GET['table'])) {
        $table = $_GET['table'];
        $columnsQuery = $conn->query("SHOW COLUMNS FROM $table");
        $columns = $columnsQuery->fetchAll(PDO::FETCH_ASSOC);
        $rowsQuery = $conn->query("SELECT * FROM $table");
        $rows = $rowsQuery->fetchAll(PDO::FETCH_ASSOC);
    }
} catch (PDOException $e) {
    echo "<p style='color:red;'>Lỗi kết nối: " . $e->getMessage() . "</p>";
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>ADMIN</title>
    <style>
        .modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }
    </style>
</head>

<body>
    <h1>ADMIN</h1>
    <div class="container">
        <div>
            <button id="coursesButton">Bảng khóa học</button>
            <button id="usersButton">Bảng Người dùng</button>
            <button onclick="logout()">Logout</button>
        </div>

        <button onclick="showModal('add')" style="display:none">Thêm Dữ Liệu</button>

        <table>
            <thead>
                <tr>
                    <?php if (!empty($columns)): ?>
                        <?php foreach ($columns as $column): ?>
                            <th><?php echo $column['Field']; ?></th>
                        <?php endforeach; ?>
                        <th>Thao Tác</th>
                    <?php endif; ?>
                </tr>
            </thead>
            <tbody>
                <?php if (!empty($rows)): ?>
                    <?php foreach ($rows as $row): ?>
                        <tr>
                            <?php foreach ($columns as $column): ?>
                                <td><?php echo htmlspecialchars($row[$column['Field']]); ?></td>
                            <?php endforeach; ?>
                            <td>
                                <button onclick="showEditModal(<?php echo htmlspecialchars(json_encode($row)); ?>)">Sửa</button>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="<?php echo count($columns) + 1; ?>">Hãy chọn bảng</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>

    <!-- Form Thêm và Sửa -->
    <div class="modal-overlay" id="modal-overlay"></div>

    <div class="modal" id="modal">
        <form method="POST" id="modal-form">
            <input type="hidden" name="table" value="<?php echo $table; ?>">
            <input type="hidden" name="id" id="form-id">
            <h2 id="modal-title">Thêm Dữ Liệu</h2>
            <?php foreach ($columns as $column): ?>
                <?php if ($column['Field'] !== 'id'): ?>
                    <div class="form-group">
                        <label><?php echo $column['Field']; ?>:</label>
                        <input type="text" name="data[<?php echo $column['Field']; ?>]" id="form-<?php echo $column['Field']; ?>" required>
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
            <button type="submit" id="modal-submit">Lưu</button>
            <button type="button" id="modal-delete" style="display:none;">Xóa</button>
        </form>
    </div>

    <script>
        document.getElementById('coursesButton').onclick = function() {
            window.location.href = 'admin.php?table=courses';
        };

        document.getElementById('usersButton').onclick = function() {
            window.location.href = 'admin.php?table=users';
        };

        function showModal(type) {
            document.getElementById('modal').style.display = 'block';
            document.getElementById('modal-overlay').style.display = 'block';
            document.getElementById('modal-title').textContent = type === 'add' ? 'Thêm Dữ Liệu' : 'Sửa Dữ Liệu';
            document.getElementById('modal-submit').name = type === 'add' ? 'addRow' : 'editRow';
            document.getElementById('modal-delete').style.display = type === 'edit' ? 'inline' : 'none';
        }

        function showEditModal(rowData) {
            showModal('edit');
            document.getElementById('form-id').value = rowData.id;
            <?php foreach ($columns as $column): ?>
                document.getElementById('form-<?php echo $column['Field']; ?>').value = rowData['<?php echo $column['Field']; ?>'];
            <?php endforeach; ?>
            document.getElementById('modal-delete').onclick = function() {
                if (confirm('Bạn có chắc chắn muốn xóa không?')) {
                    const form = document.getElementById('modal-form');
                    const deleteInput = document.createElement('input');
                    deleteInput.type = 'hidden';
                    deleteInput.name = 'deleteRow';
                    deleteInput.value = '1';
                    form.appendChild(deleteInput);
                    form.submit();
                }
            };
        }

        document.getElementById('modal-overlay').onclick = function() {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('modal-overlay').style.display = 'none';
        };

        function logout() {
            fetch('../model/logout.php')
                .then(response => {
                    if (response.ok) {
                        window.location.href = '../public/index.php';
                    } else {
                        console.error('Logout failed');
                        window.location.href = '../public/index.php'
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    </script>
</body>
</html>