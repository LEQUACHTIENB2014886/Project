<?php
session_start();

// Kiểm tra nếu người dùng chưa đăng nhập, chuyển hướng tới trang đăng nhập
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: ../public/index.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Chọn bảng</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
        }
        .container {
            text-align: center;
        }
        .button {
            padding: 15px 30px;
            margin: 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .logout-btn {
            background-color: #dc3545;
        }
        .logout-btn:hover {
            background-color: #c82333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Chọn Bảng</h1>

        <!-- Nút để chọn bảng 'users' -->
        <button class="button" onclick="redirectToTable('users')">Bảng Users</button>

        <!-- Nút để chọn bảng 'courses' -->
        <button class="button" onclick="redirectToTable('courses')">Bảng Courses</button>

        <!-- Nút đăng xuất -->
        <button class="button logout-btn" onclick="logout()">Đăng xuất</button>
    </div>

    <script>
        // Hàm chuyển hướng tới trang 'table.php' với tham số bảng
        function redirectToTable(tableName) {
            window.location.href = "table.php?table=" + tableName;
        }

        // Hàm đăng xuất
        function logout() {
            fetch('../model/logout.php')
                .then(response => {
                    if (response.ok) {
                        window.location.href = '../public/index.php';
                    } else {
                        console.error('Logout failed');
                        window.location.href = '../public/index.php';
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    </script>
</body>
</html>
