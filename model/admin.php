<?php
$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Xử lý thêm dữ liệu
        if (isset($_POST['addCourse'])) {
            $courseLevel = $_POST['courseLevel'];
            $courseAnswer = $_POST['courseAnswer'];
            $courseType = $_POST['courseType'];
            $courseQuestion = $_POST['courseQuestion'];

            $insertQuery = $conn->prepare("INSERT INTO courses (course_level, course_answer, course_type, course_question) VALUES (?, ?, ?, ?)");
            $insertQuery->execute([$courseLevel, $courseAnswer, $courseType, $courseQuestion]);
        }

        // Xử lý sửa dữ liệu
        if (isset($_POST['editCourse'])) {
            $courseId = $_POST['courseId'];
            $courseLevel = $_POST['courseLevel'];
            $courseAnswer = $_POST['courseAnswer'];
            $courseType = $_POST['courseType'];
            $courseQuestion = $_POST['courseQuestion'];

            $updateQuery = $conn->prepare("UPDATE courses SET course_level = ?, course_answer = ?, course_type = ?, course_question = ? WHERE course_id = ?");
            $updateQuery->execute([$courseLevel, $courseAnswer, $courseType, $courseQuestion, $courseId]);
        }

        // Xử lý xóa dữ liệu
        if (isset($_POST['deleteCourse'])) {
            $courseId = $_POST['courseId'];

            $deleteQuery = $conn->prepare("DELETE FROM courses WHERE course_id = ?");
            $deleteQuery->execute([$courseId]);
        }
    }

    // Lấy lại dữ liệu từ bảng "Courses" sau khi thao tác thêm/sửa/xóa
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