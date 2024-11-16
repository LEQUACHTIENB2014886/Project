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
                // Kiểm tra nếu cột là mật khẩu và có giá trị thì hash lại mật khẩu
                if ($column == 'password' && !empty($value)) {
                    $value = password_hash($value, PASSWORD_DEFAULT); // Hash mật khẩu
                }
                $updates[] = "$column = :$column";
            }
            $updateQuery = "UPDATE $table SET " . implode(", ", $updates) . " WHERE id = :id";
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
                // Hash mật khẩu nếu cột là password
                if ($column == 'password' && !empty($value)) {
                    $value = password_hash($value, PASSWORD_DEFAULT); // Hash mật khẩu
                }
                $stmt->bindValue(":$column", $value);
            }
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
</head>

<body>
    <h1>ADMIN</h1>
    <div class="container">
        <div>
            <button id="coursesButton">Table Courses</button>
            <button id="usersButton">Table Users</button>
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
                        <?php if ($column['Field'] == 'password'): ?>
                            <!-- Hiển thị mật khẩu chưa hash trong trường hợp chỉnh sửa -->
                            <input type="text" name="data[<?php echo $column['Field']; ?>]" id="form-<?php echo $column['Field']; ?>" required>
                        <?php else: ?>
                            <input type="text" name="data[<?php echo $column['Field']; ?>]" id="form-<?php echo $column['Field']; ?>" required>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
            <button type="submit" id="modal-submit">Lưu</button>
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
        }

        function showEditModal(rowData) {
            showModal('edit');
            document.getElementById('form-id').value = rowData.id;
            <?php foreach ($columns as $column): ?>
                document.getElementById('form-<?php echo $column['Field']; ?>').value = rowData['<?php echo $column['Field']; ?>'];
            <?php endforeach; ?>
        }

        document.getElementById('modal-overlay').onclick = function() {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('modal-overlay').style.display = 'none';
        };

        function logout() {
            fetch('../model/logout.php')
                .then(response => {
                    console.log(response); // Kiểm tra phản hồi
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