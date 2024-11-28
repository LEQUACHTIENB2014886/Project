<?php
include "../model/db.php"; 

if (session_status() == PHP_SESSION_NONE) {
    session_start(); 
}

$role = $_SESSION['quyen'] ?? null;

if ($role === '1') {
    header("Location: ../public/course_exercise.php");
    exit();
} else {
    $_SESSION['message'] = "Vui lòng đăng nhập để truy cập vào bài tập thực hành.";
    header("Location: ../public/user.php");
    exit();
}
