<?php
$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Xử lý thêm, sửa, xóa dữ liệu
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $response = ['status' => 'error', 'message' => ''];

        // Thêm khóa học
        if (isset($_POST['addCourse'])) {
            $courseLevel = $_POST['courseLevel'];
            $courseAnswer = $_POST['courseAnswer'];
            $courseType = $_POST['courseType'];
            $courseQuestion = $_POST['courseQuestion'];

            $insertQuery = $conn->prepare("INSERT INTO courses (course_level, course_answer, course_type, course_question) VALUES (?, ?, ?, ?)");
            $insertQuery->execute([$courseLevel, $courseAnswer, $courseType, $courseQuestion]);
            $response = ['status' => 'success', 'message' => 'Khóa học đã được thêm thành công.'];
        }

        // Sửa khóa học
        if (isset($_POST['editCourse'])) {
            $courseId = $_POST['courseId'];
            $courseLevel = $_POST['courseLevel'];
            $courseAnswer = $_POST['courseAnswer'];
            $courseType = $_POST['courseType'];
            $courseQuestion = $_POST['courseQuestion'];

            $updateQuery = $conn->prepare("UPDATE courses SET course_level = ?, course_answer = ?, course_type = ?, course_question = ? WHERE course_id = ?");
            $updateQuery->execute([$courseLevel, $courseAnswer, $courseType, $courseQuestion, $courseId]);
            $response = ['status' => 'success', 'message' => 'Khóa học đã được cập nhật thành công.'];
        }

        // Xóa khóa học
        if (isset($_POST['deleteCourse'])) {
            $courseId = $_POST['courseId'];

            $deleteQuery = $conn->prepare("DELETE FROM courses WHERE course_id = ?");
            $deleteQuery->execute([$courseId]);
            $response = ['status' => 'success', 'message' => 'Khóa học đã được xóa thành công.'];
        }

        // Gửi phản hồi dưới dạng JSON
        echo json_encode($response);
        exit; // Dừng thực thi mã tiếp theo
    }

    // Lấy dữ liệu từ bảng "Courses"
    $coursesQuery = $conn->query("SELECT * FROM courses");
    $courses = $coursesQuery->fetchAll(PDO::FETCH_ASSOC);

    // Lấy dữ liệu từ bảng "Users"
    $usersQuery = $conn->query("SELECT * FROM users");
    $users = $usersQuery->fetchAll(PDO::FETCH_ASSOC);

    // Đóng kết nối
    $conn = null;
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Lỗi kết nối cơ sở dữ liệu: ' . $e->getMessage()]);
}
?>
