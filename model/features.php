<?php
ob_start(); 
include "../model/db.php";

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$role = $_SESSION['quyen'] ?? null;
$nhaccu = [];

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
    $_SESSION['message'] = "Vui lòng đăng nhập.";
    header("Location: ../public/user.php");
    exit();
}

ob_end_flush();
?>
