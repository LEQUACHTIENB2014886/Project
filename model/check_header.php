<?php
include "db.php";
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$role = $_SESSION['role'] ?? null;

if ($role === '0') {
    header("Location: admin.php");
    exit();
} elseif ($role === '1') {
    include '../view/header_login.php';
    include '../public/css/header.php';
} else {
    include '../view/header.php';
    include '../public/css/header.php';
}