<?php
ob_start();
session_start(); 
if (!isset($_SESSION['role'])) {
    header("Location: login.php");
    exit();
}

if ($_SESSION['role'] == 1) {
    include '../view/header_login.php';
} 
if ($_SESSION['role'] == null) {
    include '../view/header.php';
}
ob_end_flush(); 

