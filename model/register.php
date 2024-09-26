php
Copy
<?php
$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";

$errorMessage = ""; // Biến để lưu thông báo lỗi
$successMessage = ""; // Biến để lưu thông báo thành công

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['registerEmail']) && isset($_POST['registerPassword'])) {
        $email = $_POST['registerEmail'];
        $password = $_POST['registerPassword'];
        $confirmPassword = $_POST['confirmPassword'];

        if ($password !== $confirmPassword) {
            $errorMessage = 'Mật khẩu xác nhận không khớp.'; // Lưu thông báo lỗi
        } else {
            $stmt = $conn->prepare("SELECT * FROM users WHERE username = :email");
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($user) {
                $errorMessage = 'Tài khoản đã tồn tại.'; // Lưu thông báo lỗi
            } else {
                $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (:email, :password)");
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':password', $password);
                $stmt->execute();
                $successMessage = 'Đăng ký thành công!';
                $activeTab = 'custom-login'; // Chuyển sang tab đăng nhập
            }
        }
    }
} catch (PDOException $e) {
    echo "Kết nối thất bại: " . $e->getMessage();
}
?>