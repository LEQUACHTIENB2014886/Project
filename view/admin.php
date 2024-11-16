<?php
$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Bộ lọc
    $courseTypeFilter = isset($_POST['course_type']) ? $_POST['course_type'] : '';
    $courseLevelFilter = isset($_POST['course_level']) ? $_POST['course_level'] : '';

    $tablesQuery = $conn->query("SHOW TABLES");
    $tables = $tablesQuery->fetchAll(PDO::FETCH_COLUMN);

    // Kiểm tra phương thức POST và lấy giá trị của table từ GET thay vì POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['table'])) {
        $table = $_GET['table'];  // Sử dụng GET để lấy tên bảng

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
            $deleteQuery = "DELETE FROM $table WHERE id = :id";
            $stmt = $conn->prepare($deleteQuery);
            $stmt->bindValue(':id', $id);
            $stmt->execute();
        }
    }

    // Lấy thông tin cột và dữ liệu bảng
    $columns = [];
    $rows = [];
    if (isset($_GET['table'])) {
        $table = $_GET['table'];  // Lấy giá trị từ GET
        $columnsQuery = $conn->query("SHOW COLUMNS FROM $table");
        $columns = $columnsQuery->fetchAll(PDO::FETCH_ASSOC);

        // Truy vấn lọc
        $query = "SELECT * FROM $table WHERE 1=1";
        if ($courseTypeFilter) {
            $query .= " AND course_type = :course_type";
        }
        if ($courseLevelFilter) {
            $query .= " AND course_level = :course_level";
        }
        $stmt = $conn->prepare($query);
        if ($courseTypeFilter) {
            $stmt->bindValue(':course_type', $courseTypeFilter);
        }
        if ($courseLevelFilter) {
            $stmt->bindValue(':course_level', $courseLevelFilter);
        }
        $stmt->execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
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
    <div class="horizontal-container">
        <div class="item">
            <button id="coursesButton" onclick="navigateToCourses()">Bảng khóa học</button>
        </div>
        <div class="item">
            <button id="usersButton" onclick="navigateToUsers()">Bảng Người dùng</button>
        </div>

        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"><button onclick="logout()">Logout</button></div>
    </div>

    <div class="horizontal-container">
        <div class="item">
            <form method="POST" id="filter-form">
                <label for="course_type">Loại Khóa Học:</label>
                <select name="course_type" id="course_type">
                    <option value="">Tất cả</option>
                    <option value="note" <?php echo ($courseTypeFilter == 'note') ? 'selected' : ''; ?>>Note</option>
                    <option value="chord" <?php echo ($courseTypeFilter == 'chord') ? 'selected' : ''; ?>>Chord</option>
                    <option value="melody" <?php echo ($courseTypeFilter == 'melody') ? 'selected' : ''; ?>>Melody</option>
                </select>

                <label for="course_level">Cấp Độ:</label>
                <select name="course_level" id="course_level">
                    <option value="">Tất cả</option>
                    <option value="basic" <?php echo ($courseLevelFilter == 'basic') ? 'selected' : ''; ?>>Basic</option>
                    <option value="medium" <?php echo ($courseLevelFilter == 'medium') ? 'selected' : ''; ?>>Medium</option>
                    <option value="hard" <?php echo ($courseLevelFilter == 'hard') ? 'selected' : ''; ?>>Hard</option>
                </select>

                <button type="submit">Lọc</button>
            </form>
        </div>
        <div class="item"><button onclick="showModal('add')">Thêm Dữ Liệu</button></div>
    </div>

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
            <div class="modal-actions">
                <button type="submit" name="addRow" id="modal-submit">Lưu</button>
                <button type="button" id="modal-delete">Xóa</button>
                <button type="button" id="modal-close" onclick="closeModal()">Đóng</button>
            </div>
        </form>
    </div>

    <script>
        document.getElementById('coursesButton').onclick = function() {
            navigateToCourses();
        };

        document.getElementById('usersButton').onclick = function() {
            navigateToUsers();
        };

        function navigateToCourses() {
            // Chuyển tới bảng khóa học và đảm bảo form lọc hiển thị
            window.location.href = 'admin.php?table=courses';
        }

        function navigateToUsers() {
            // Chuyển tới bảng người dùng và đảm bảo form lọc ẩn đi
            window.location.href = 'admin.php?table=users';
        }

        function checkPageForFilter() {
            // Kiểm tra giá trị của tham số "table" trong URL
            var urlParams = new URLSearchParams(window.location.search);
            var table = urlParams.get('table');

            // Nếu table=courses, hiển thị form lọc, nếu không, ẩn form lọc
            if (table === 'courses') {
                document.getElementById('filter-form').style.display = 'block';
            } else {
                document.getElementById('filter-form').style.display = 'none';
            }
        }

        // Gọi hàm kiểm tra khi tải trang
        window.onload = checkPageForFilter;



        function showModal(type) {
            document.getElementById('modal').style.display = 'block';
            document.getElementById('modal-overlay').style.display = 'block';
            document.getElementById('modal-title').textContent = type === 'add' ? 'Thêm Dữ Liệu' : 'Sửa Dữ Liệu';
            document.getElementById('modal-submit').name = type === 'add' ? 'addRow' : 'editRow';
            document.getElementById('modal-delete').style.display = type === 'edit' ? 'inline' : 'none';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('modal-overlay').style.display = 'none';
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