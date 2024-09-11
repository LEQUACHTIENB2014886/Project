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

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['registerEmail']) && isset($_POST['registerPassword'])) {
        $email = $_POST['registerEmail'];
        $password = $_POST['registerPassword'];
        $confirmPassword = $_POST['confirmPassword'];

        if ($password !== $confirmPassword) {
            $errorMessage = 'Mật khẩu xác nhận không khớp.';
        } else {
            $stmt = $conn->prepare("SELECT * FROM users WHERE username = :email");
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($user) {
                $errorMessage = 'Tài khoản đã tồn tại.';
            } else {
                $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (:email, :password)");
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':password', $password);
                $stmt->execute();
                $successMessage = 'Đăng ký thành công!';
                $activeTab = 'custom-login';
            }
        }
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['loginName']) && isset($_POST['loginPassword'])) {
        $email = $_POST['loginName'];
        $password = $_POST['loginPassword'];

        $stmt = $conn->prepare("SELECT * FROM users WHERE username = :email AND password = :password");
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            $_SESSION['user'] = $user;
            if ($user['role'] == 1) {
                header("Location: index.php");
            } else {
                header("Location: admin.php");
            }
            exit();
        } else {
            $errorMessage = 'Đăng nhập không thành công. Vui lòng kiểm tra email và mật khẩu.';
        }
    }
} catch (PDOException $e) {
    echo "Kết nối thất bại: " . $e->getMessage();
}
