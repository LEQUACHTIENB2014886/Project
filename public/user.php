<?php
ob_start();
include '../model/check_header.php';
include '../model/user.php';
include '../view/user.php';
include '../model/user.php';
include '../view/footer.php';
ob_end_flush();