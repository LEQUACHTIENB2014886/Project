<?php
$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";
$errorMessage = "";
$successMessage = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Xử lý đăng ký
        if (isset($_POST['registerEmail']) && isset($_POST['registerPassword'])) {
            $email = $_POST['registerEmail'];
            $password = $_POST['registerPassword'];
            $confirmPassword = $_POST['confirmPassword'];

            // Kiểm tra điều kiện mật khẩu
            if (strlen($password) < 8 || !preg_match('/[\W_]/', $password)) {
                $errorMessage = 'Mật khẩu phải có ít nhất 8 ký tự và chứa ít nhất một ký tự đặc biệt.';
            } elseif ($password !== $confirmPassword) {
                $errorMessage = 'Mật khẩu xác nhận không khớp.';
            } else {
                $stmt = $conn->prepare("SELECT * FROM nguoidung WHERE ten = :email");
                $stmt->bindParam(':email', $email);
                $stmt->execute();
                $user = $stmt->fetch(PDO::FETCH_ASSOC);

                if ($user) {
                    $errorMessage = 'Tài khoản đã tồn tại.';
                } else {
                    $stmt = $conn->prepare("INSERT INTO nguoidung (ten, matkhau) VALUES (:email, :password)");
                    $stmt->bindParam(':email', $email);

                    // Mã hóa mật khẩu
                    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                    $stmt->bindParam(':password', $hashedPassword);
                    $stmt->execute();
                    $successMessage = 'Đăng ký thành công!';
                }
            }
        }
    }
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }


    // Xử lý đăng nhập
    if (isset($_POST['loginName']) && isset($_POST['loginPassword'])) {
        $email = $_POST['loginName'];
        $password = $_POST['loginPassword'];

        $stmt = $conn->prepare("SELECT * FROM nguoidung WHERE ten = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['matkhau'])) {
            // Lưu ID người dùng vào session
            $_SESSION['user_id'] = $user['ma']; // Lưu ID
            $_SESSION['quyen'] = $user['quyen']; // Nếu cần lưu quyền người dùng

            header("Location: ../public/index.php"); // Chuyển hướng sau khi đăng nhập thành công
            exit;
        } else {
            $errorMessage = 'Tài khoản hoặc mật khẩu không đúng.';
        }
    }
} catch (PDOException $e) {
    echo "Kết nối thất bại: " . $e->getMessage();
}
