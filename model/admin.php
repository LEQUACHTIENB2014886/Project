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
    $levelFilter = isset($_POST['level']) ? $_POST['level'] : '';

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
                    // Hash mật khẩu và gán lại vào data
                    $_POST['data'][$column] = password_hash($value, PASSWORD_DEFAULT);
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

            // Nếu mật khẩu không rỗng, thực hiện mã hóa trước khi thêm vào cơ sở dữ liệu
            if (isset($_POST['data']['password']) && !empty($_POST['data']['password'])) {
                $_POST['data']['password'] = password_hash($_POST['data']['password'], PASSWORD_DEFAULT);
            }

            $insertQuery = "INSERT INTO $table ($columns) VALUES ($placeholders)";
            $stmt = $conn->prepare($insertQuery);
            foreach ($_POST['data'] as $column => $value) {
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
        $table = $_GET['table']; // Lấy tên bảng từ GET

        $columnsQuery = $conn->query("SHOW COLUMNS FROM $table");
        $columns = $columnsQuery->fetchAll(PDO::FETCH_ASSOC);

        // Xây dựng truy vấn dựa trên bảng và bộ lọc
        $query = "SELECT * FROM $table WHERE 1=1";

        // Nếu là bảng courses, sử dụng bộ lọc course_type và course_level
        if ($table === 'courses') {
            if ($courseTypeFilter) {
                $query .= " AND course_type = :course_type";
            }
            if ($courseLevelFilter) {
                $query .= " AND course_level = :course_level";
            }
        }

        // Nếu là bảng users, sử dụng bộ lọc level
        if ($table === 'users') {
            if ($levelFilter) {
                $query .= " AND level = :level";
            }
        }

        // Chuẩn bị truy vấn
        $stmt = $conn->prepare($query);

        // Bind các tham số cho bảng courses
        if ($table === 'courses') {
            if ($courseTypeFilter) {
                $stmt->bindValue(':course_type', $courseTypeFilter);
            }
            if ($courseLevelFilter) {
                $stmt->bindValue(':course_level', $courseLevelFilter);
            }
        }

        // Bind tham số cho bảng users
        if ($table === 'users' && $levelFilter) {
            $stmt->bindValue(':level', $levelFilter);
        }

        $stmt->execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
} catch (PDOException $e) {
    echo "<p style='color:red;'>Lỗi kết nối: " . $e->getMessage() . "</p>";
}
