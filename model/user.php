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
                    $stmt = $conn->prepare("INSERT INTO nguoidung (ten, matkhau) VALUES (:email, :password)");
                    $stmt->bindParam(':email', $email);

                    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                    $stmt->bindParam(':password', $hashedPassword);
                    $stmt->execute();
                    $successMessage = 'Đăng ký thành công!';
                }
            }
        }
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
            $_SESSION['quyen'] = $user['quyen']; 

            header("Location: ../public/index.php"); 
            exit;
        } else {
            $errorMessage = 'Tài khoản hoặc mật khẩu không đúng.';
        }
    }
} catch (PDOException $e) {
    echo "Kết nối thất bại: " . $e->getMessage();
}