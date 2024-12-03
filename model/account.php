<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";

$message = ''; // Biến để lưu thông báo
$message_type = ''; // Biến để lưu kiểu thông báo (error/success)

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (!isset($_SESSION['user_id'])) {
        echo "Bạn chưa đăng nhập.";
        exit;
    } else {
        $userId = $_SESSION['user_id'];
    }

    // Lấy thông tin cá nhân
    $stmt = $conn->prepare("SELECT ten, tiendo, matkhau, anhdaidien FROM nguoidung WHERE ma = :userId");
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $userInfo = $stmt->fetch(PDO::FETCH_ASSOC);
        $ten = htmlspecialchars($userInfo['ten']);
        $tiendo = htmlspecialchars($userInfo['tiendo']);
        $hashed_password = $userInfo['matkhau']; // Lưu mật khẩu hash
        $avatarUrl = !empty($userInfo['anhdaidien']) ? $userInfo['anhdaidien'] : 'https://via.placeholder.com/100'; // Kiểm tra nếu có ảnh thì sử dụng, nếu không thì ảnh mặc định

        // Phân tích giá trị tiendo và gán nhãn
        $tiendoArray = explode(',', $tiendo); // Tách chuỗi tiendo thành mảng

        if (count($tiendoArray) === 3) {
            if ($tiendoArray[0] == 1 && $tiendoArray[1] == 0 && $tiendoArray[2] == 0) {
                $tiendoStatus = "Người mới";
            } elseif ($tiendoArray[0] == 1 && $tiendoArray[1] == 1 && $tiendoArray[2] == 0) {
                $tiendoStatus = "Chuyên gia";
            } elseif ($tiendoArray[0] == 1 && $tiendoArray[1] == 1 && $tiendoArray[2] == 1) {
                $tiendoStatus = "Lão luyện";
            } else {
                $tiendoStatus = "Tiến độ không hợp lệ";
            }
        } else {
            $tiendoStatus = "Tiến độ không hợp lệ";
        }
    } else {
        $ten = "Không tìm thấy tên người dùng";
        $tiendoStatus = "Không có tiến độ";
    }

    // Xử lý thay đổi mật khẩu
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['change_password'])) {
        $current_password = $_POST['current_password']; // Mật khẩu hiện tại
        $new_password = $_POST['new_password']; // Mật khẩu mới
        $confirm_password = $_POST['confirm_password']; // Xác nhận mật khẩu mới

        // Ràng buộc mật khẩu
        $passwordPattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/"; // Tối thiểu 8 ký tự, có ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số

        if (!preg_match($passwordPattern, $new_password)) {
            $message = "Mật khẩu mới phải có ít nhất 8 ký tự, bao gồm một chữ cái viết hoa, một chữ cái viết thường và một số.";
            $message_type = "error"; // Đánh dấu thông báo lỗi
        } elseif ($new_password !== $confirm_password) {
            $message = "Mật khẩu mới và mật khẩu xác nhận không khớp!";
            $message_type = "error"; // Đánh dấu thông báo lỗi
        } else {
            // Kiểm tra mật khẩu hiện tại có đúng không
            if (password_verify($current_password, $hashed_password)) {
                // Hash mật khẩu mới
                $new_password_hashed = password_hash($new_password, PASSWORD_BCRYPT);

                // Cập nhật mật khẩu trong cơ sở dữ liệu
                $stmt = $conn->prepare("UPDATE nguoidung SET matkhau = :matkhau WHERE ma = :ma");
                $stmt->execute([':matkhau' => $new_password_hashed, ':ma' => $userId]);

                $message = "Mật khẩu đã được thay đổi thành công!";
                $message_type = "success"; // Đánh dấu thông báo thành công
            } else {
                $message = "Mật khẩu hiện tại không đúng!";
                $message_type = "error"; // Đánh dấu thông báo lỗi
            }
        }
    }

    // Xử lý ghi nhận ý kiến phản hồi
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit_feedback'])) {
        $feedback_content = $_POST['feedback_content'];
        $stmt = $conn->prepare("INSERT INTO phanhoi (nguoiphanhoi, noidung, thoigian) VALUES (:nguoiphanhoi, :noidung, NOW())");
        $stmt->execute([':nguoiphanhoi' => $ten, ':noidung' => $feedback_content]);
        $message = "Phản hồi đã được ghi nhận!";
        $message_type = "success"; // Đánh dấu thông báo thành công
    }
} catch (PDOException $e) {
    echo "Kết nối thất bại: " . $e->getMessage();
}
?>

<!-- Thêm SweetAlert vào phần <head> của HTML -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
    // Nếu có thông báo, hiển thị SweetAlert
    <?php if (!empty($message)) : ?>
        Swal.fire({
            title: '<?php echo $message_type === 'success' ? 'Thành công' : 'Lỗi'; ?>',
            text: '<?php echo $message; ?>',
            icon: '<?php echo $message_type; ?>',
            confirmButtonText: 'OK'
        });
    <?php endif; ?>
    // Kiểm tra tính hợp lệ của mật khẩu khi người dùng gửi biểu mẫu
    document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
        var currentPassword = document.getElementById('current_password').value;
        var newPassword = document.getElementById('new_password').value;
        var confirmPassword = document.getElementById('confirm_password').value;

        // Ràng buộc mật khẩu
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Tối thiểu 8 ký tự, có ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số

        if (!passwordPattern.test(newPassword)) {
            Swal.fire({
                title: 'Lỗi',
                text: 'Mật khẩu mới phải có ít nhất 8 ký tự, bao gồm một chữ cái viết hoa, một chữ cái viết thường và một số.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            event.preventDefault(); // Ngừng gửi form
            return;
        }

        // Kiểm tra mật khẩu xác nhận
        if (newPassword !== confirmPassword) {
            Swal.fire({
                title: 'Lỗi',
                text: 'Mật khẩu mới và mật khẩu xác nhận không khớp!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            event.preventDefault(); // Ngừng gửi form
            return;
        }
    });
</script>