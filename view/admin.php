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
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        padding: 20px;
        margin: 0;
    }

    .container {
        background-color: white;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 6px;
        text-align: center;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    button {
        padding: 8px 16px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
        border: none;
        transition: opacity 0.2s ease;
    }

    button:hover {
        opacity: 0.8;
    }

    button[type="submit"],
    button[name="addCourse"] {
        background-color: #1E90FF;
        color: white;
    }

    button[type="button"] {
        background-color: #1E90FF;
        color: white;
    }

    button {
        background-color: #1E90FF;
    }

    h3 {
        color: #333;
        margin-top: 20px;
    }

    form {
        margin: 20px 0;
    }

    .modal {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
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
        z-index: 500;
    }

    .form-group {
        margin-bottom: 10px;
    }

    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 6px;
        margin-top: 3px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    label {
        display: block;
        margin-top: 10px;
        font-weight: bold;
    }
</style>

</html>