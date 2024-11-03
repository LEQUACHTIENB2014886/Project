<?php
session_start();

$_SESSION['role'] = null; 
session_destroy();
header("Location: ../public/index.php");
exit;
