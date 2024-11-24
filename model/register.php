<?php
$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";


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
            $stmt = $conn->prepare("SELECT * FROM nguoidung WHERE ten = :email");
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($user) {
                $errorMessage = 'Tài khoản đã tồn tại.';
            } else {
                $stmt = $conn->prepare("INSERT INTO nguoidung (ten, password) VALUES (:email, :password)");
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':password', $password);
                $stmt->execute();
                $successMessage = 'Đăng ký thành công!';
                $activeTab = 'custom-login';
            }
        }
    }
} catch (PDOException $e) {
    echo "Kết nối thất bại: " . $e->getMessage();
}
