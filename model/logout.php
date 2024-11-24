<?php
session_start();
$_SESSION['quyen'] = null;
session_destroy();
header("Location: ../public/index.php");
exit;
