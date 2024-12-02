<?php
ob_start();
include "../model/db.php";

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$role = $_SESSION['quyen'] ?? null;
$nhaccu = [];

// Kiểm tra quyền của người dùng
if ($role === '0') {
    header("Location: admin.php");
    exit();
} elseif ($role === '1') {
    try {
        $query = "SELECT ten, thongtin, hinhanh, duongdan FROM nhaccu";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $nhaccu = $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo "Lỗi truy vấn CSDL: " . htmlspecialchars($e->getMessage());
        exit();
    }
} else {
    // Nếu không có quyền, thông báo và lưu URL chuyển hướng
    $_SESSION['message'] = "Vui lòng đăng nhập để truy cập vào bài tập thực hành.";
    $_SESSION['redirect_url'] = "../public/user.php";
}

ob_end_flush();
?>

<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const message = "<?php echo $_SESSION['message'] ?? ''; ?>";
        const redirectUrl = "<?php echo $_SESSION['redirect_url'] ?? ''; ?>";

        // Xóa session sau khi đã đọc giá trị
        <?php unset($_SESSION['message'], $_SESSION['redirect_url']); ?>

        // Nếu có thông báo và URL chuyển hướng
        if (message && redirectUrl) {
            Swal.fire({
                title: "Thông báo",
                text: message,
                icon: "info",
                showConfirmButton: true,
                confirmButtonText: "OK"
            }).then(() => {
                // Sau khi nhấn OK, chuyển hướng đến URL đã định
                window.location.href = redirectUrl;
            });
        }
    });
</script>

</body>

</html>
