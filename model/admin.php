<?php
$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Lấy dữ liệu từ bảng "Courses"
    $coursesQuery = $conn->query("SELECT * FROM courses");
    $courses = $coursesQuery->fetchAll(PDO::FETCH_ASSOC);

    // Lấy dữ liệu từ bảng "Users"
    $usersQuery = $conn->query("SELECT * FROM users");
    $users = $usersQuery->fetchAll(PDO::FETCH_ASSOC);

    // Đóng kết nối
    $conn = null;
} catch (PDOException $e) {
    echo "Lỗi kết nối cơ sở dữ liệu: " . $e->getMessage();
}
?>