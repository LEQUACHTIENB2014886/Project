<?php
$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Bộ lọc
    $courseTypeFilter = isset($_POST['loai']) ? $_POST['loai'] : '';
    $courseLevelFilter = isset($_POST['capdo']) ? $_POST['capdo'] : '';
    $levelFilter = isset($_POST['tiendo']) ? $_POST['tiendo'] : '';

    $tablesQuery = $conn->query("SHOW TABLES");
    $tables = $tablesQuery->fetchAll(PDO::FETCH_COLUMN);

    // Xử lý Lưu dữ liệu khi nhấn "Lưu"
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['editRow']) && isset($_POST['ma'])) {
        $id = (int)$_POST['ma'];
        $table = $_POST['table'];
        $data = $_POST['data'];

        $updates = [];
        foreach ($data as $column => $value) {
            $updates[] = "$column = :$column";
        }

        $updateQuery = "UPDATE $table SET " . implode(", ", $updates) . " WHERE ma = :ma";
        $stmt = $conn->prepare($updateQuery);

        foreach ($data as $column => $value) {
            $stmt->bindValue(":$column", $value);
        }
        $stmt->bindValue(':ma', $id);
        $stmt->execute();

        // echo "Cập nhật thành công!";
    }
    // Kiểm tra phương thức POST và lấy giá trị của table từ GET thay vì POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['table'])) {
        $table = $_GET['table'];  // Sử dụng GET để lấy tên bảng

        // Sửa dữ liệu trong bảng
        if (isset($_POST['editRow']) && isset($_POST['ma'])) {
            $id = (int)$_POST['ma'];
            $updates = [];
            foreach ($_POST['data'] as $column => $value) {
                if ($column == 'matkhau' && !empty($value)) {
                    // Hash mật khẩu và gán lại vào data
                    $_POST['data'][$column] = password_hash($value, PASSWORD_DEFAULT);
                }
                $updates[] = "$column = :$column";
            }
            $updateQuery = "UPDATE $table SET " . implode(", ", $updates) . " WHERE ma = :ma";
            $stmt = $conn->prepare($updateQuery);
            foreach ($_POST['data'] as $column => $value) {
                $stmt->bindValue(":$column", $value);
            }
            $stmt->bindValue(':ma', $id);
            $stmt->execute();
        }

        // Thêm dữ liệu mới vào bảng
        if (isset($_POST['addRow'])) {
            $columns = implode(", ", array_keys($_POST['data']));
            $placeholders = implode(", ", array_map(fn($col) => ":$col", array_keys($_POST['data'])));

            // Nếu mật khẩu không rỗng, thực hiện mã hóa trước khi thêm vào cơ sở dữ liệu
            if (isset($_POST['data']['matkhau']) && !empty($_POST['data']['matkhau'])) {
                $_POST['data']['matkhau'] = password_hash($_POST['data']['matkhau'], PASSWORD_DEFAULT);
            }

            $insertQuery = "INSERT INTO $table ($columns) VALUES ($placeholders)";
            $stmt = $conn->prepare($insertQuery);
            foreach ($_POST['data'] as $column => $value) {
                $stmt->bindValue(":$column", $value);
            }
            $stmt->execute();
        }

        // Xóa dữ liệu trong bảng
        if (isset($_POST['deleteRow']) && isset($_POST['ma'])) {
            $id = (int)$_POST['ma'];
            $deleteQuery = "DELETE FROM $table WHERE ma = :ma";
            $stmt = $conn->prepare($deleteQuery);
            $stmt->bindValue(':ma', $id, PDO::PARAM_INT);
            $stmt->execute();
            echo "Xóa thành công!";
        }
    }

    if (isset($_GET['dashboard']) && $_GET['dashboard'] === 'true') {
        echo "<h2>Dashboard</h2>";

        // Đếm số lượng "ma" trong mỗi bảng
        foreach ($tables as $table) {
            $countQuery = $conn->query("SELECT COUNT(ma) AS total FROM $table");
            $countResult = $countQuery->fetch(PDO::FETCH_ASSOC);
            echo "<p>Bảng $table có tổng cộng: " . $countResult['total'] . " bản ghi</p>";
        }

        // Hiển thị thông tin Admin (role = 0)
        $adminQuery = $conn->query("SELECT * FROM nguoidung WHERE quyen = 0");
        $admin = $adminQuery->fetch(PDO::FETCH_ASSOC);

        if ($admin) {
            echo "<h3>Thông tin Admin</h3>";
            echo "<p>Mã Admin: " . htmlspecialchars($admin['ma']) . "</p>";
            echo "<p>Tên: " . htmlspecialchars($admin['ten']) . "</p>";

            // Nút đổi mật khẩu
            echo "
                <form method='POST'>
                    <label for='new_password'>Mật khẩu mới:</label>
                    <input type='password' id='new_password' name='new_password' required>
                    <button type='submit' name='changePassword'>Đổi Mật Khẩu</button>
                </form>
            ";
        }
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['changePassword'])) {
        $oldPassword = $_POST['old_password'];
        $newPassword = $_POST['new_password'];
        $confirmPassword = $_POST['confirm_password'];
    
        // Kiểm tra xác nhận mật khẩu mới
        if ($newPassword !== $confirmPassword) {
            echo "<p style='color:red;'>Mật khẩu mới và xác nhận không khớp!</p>";
        } else {
            // Lấy mật khẩu hiện tại của admin
            $stmt = $conn->prepare("SELECT matkhau FROM nguoidung WHERE role = 0 LIMIT 1");
            $stmt->execute();
            $admin = $stmt->fetch(PDO::FETCH_ASSOC);
    
            if ($admin && password_verify($oldPassword, $admin['matkhau'])) {
                // Mã hóa mật khẩu mới
                $hashedNewPassword = password_hash($newPassword, PASSWORD_DEFAULT);
    
                // Cập nhật mật khẩu mới
                $updateStmt = $conn->prepare("UPDATE nguoidung SET matkhau = :newPassword WHERE role = 0");
                $updateStmt->bindValue(':newPassword', $hashedNewPassword);
                $updateStmt->execute();
    
                echo "<p style='color:green;'>Đổi mật khẩu thành công!</p>";
            } else {
                echo "<p style='color:red;'>Mật khẩu cũ không đúng!</p>";
            }
        }
    }
    

    // Lấy dữ liệu cột và hàng
    $columns = [];
    $rows = [];

    if (isset($_GET['table'])) {
        $table = $_GET['table'];

        $columnsQuery = $conn->query("SHOW COLUMNS FROM $table");
        $columns = $columnsQuery->fetchAll(PDO::FETCH_ASSOC);

        $query = "SELECT * FROM $table WHERE 1=1";

        if ($table === 'khoahoc') {
            if ($courseTypeFilter) {
                $query .= " AND loai = :loai";
            }
            if ($courseLevelFilter) {
                $query .= " AND capdo = :capdo";
            }
        }

        if ($table === 'nguoidung' && $levelFilter) {
            $query .= " AND tiendo = :tiendo";
        }

        $stmt = $conn->prepare($query);

        if ($table === 'khoahoc') {
            if ($courseTypeFilter) {
                $stmt->bindValue(':loai', $courseTypeFilter);
            }
            if ($courseLevelFilter) {
                $stmt->bindValue(':capdo', $courseLevelFilter);
            }
        }

        if ($table === 'nguoidung' && $levelFilter) {
            $stmt->bindValue(':tiendo', $levelFilter);
        }

        $stmt->execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
} catch (PDOException $e) {
    echo "<p style='color:red;'>Lỗi kết nối: " . $e->getMessage() . "</p>";
}
