<?php
$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";
$errorMessage = "";
$successMessage = "";

try {
    // Kết nối CSDL
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Đăng ký tài khoản
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['registerEmail'])) {
        $email = trim($_POST['registerEmail']); // Loại bỏ khoảng trắng dư thừa
        $password = $_POST['registerPassword'];
        $confirmPassword = $_POST['confirmPassword'];

        // Kiểm tra điều kiện mật khẩu
        if (strlen($password) < 8 || !preg_match('/[\W_]/', $password)) {
            echo "<script>
                    Swal.fire({
                        icon: 'error',
                        title: 'Lỗi!',
                        text: 'Mật khẩu phải có ít nhất 8 ký tự và chứa ít nhất một ký tự đặc biệt.'
                    });
                 </script>";
        } elseif ($password !== $confirmPassword) {
            echo "<script>
                    Swal.fire({
                        icon: 'error',
                        title: 'Lỗi!',
                        text: 'Mật khẩu xác nhận không khớp.'
                    });
                 </script>";
        } else {
            // Kiểm tra tài khoản đã tồn tại
            $stmt = $conn->prepare("SELECT * FROM nguoidung WHERE ten = :email");
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($user) {
                // Nếu tài khoản đã tồn tại
                echo "<script>
                        Swal.fire({
                            icon: 'error',
                            title: 'Lỗi!',
                            text: 'Tài khoản đã tồn tại.'
                        });
                     </script>";
            } else {
                // Thực hiện đăng ký
                $stmt = $conn->prepare("INSERT INTO nguoidung (ten, matkhau) VALUES (:email, :password)");
                $stmt->bindParam(':email', $email);

                // Mã hóa mật khẩu
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                $stmt->bindParam(':password', $hashedPassword);
                $stmt->execute();
                echo "<script>
                        Swal.fire({
                            icon: 'success',
                            title: 'Thành công!',
                            text: 'Đăng ký thành công.'
                        });
                     </script>";
            }
        }
    }

    // Đăng nhập tài khoản
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['loginName'])) {
        $email = trim($_POST['loginName']); // Loại bỏ khoảng trắng dư thừa
        $password = $_POST['loginPassword'];

        $stmt = $conn->prepare("SELECT * FROM nguoidung WHERE ten = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['matkhau'])) {
            // Bắt đầu phiên làm việc
            if (session_status() == PHP_SESSION_NONE) {
                session_start();
            }

            // Lưu ID và quyền người dùng vào session
            $_SESSION['user_id'] = $user['ma']; // Lưu ID người dùng
            $_SESSION['quyen'] = $user['quyen']; // Lưu quyền người dùng

            // Chuyển hướng đến trang chính sau khi đăng nhập thành công
            header("Location: ../public/index.php");
            exit;
        } else {
            echo "<script>
                    Swal.fire({
                        icon: 'error',
                        title: 'Lỗi!',
                        text: 'Tài khoản hoặc mật khẩu không đúng.'
                    });
                 </script>";
        }
    }

} catch (PDOException $e) {
    echo "Kết nối thất bại: " . $e->getMessage();
}
?>