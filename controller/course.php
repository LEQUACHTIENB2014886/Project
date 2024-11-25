<?php
session_start();

// Database configuration
$host = 'localhost';
$dbname = 'webhocnhacly';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Kết nối CSDL thất bại: " . $e->getMessage());
}

// Lấy giá trị từ URL
$loai = $_GET['loai'] ?? '';
$capdo = $_GET['capdo'] ?? '';

// Lấy tất cả câu hỏi từ bảng "khoahoc"
$stmt = $pdo->prepare("SELECT * FROM khoahoc WHERE loai = :loai AND capdo = :capdo ORDER BY ma ASC");
$stmt->execute(['loai' => $loai, 'capdo' => $capdo]);
$questions = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Khởi tạo session nếu chưa có
if (!isset($_SESSION['current_question'])) {
    $_SESSION['current_question'] = 0; // Bắt đầu từ câu đầu tiên
    $_SESSION['score'] = 0;
    $_SESSION['answered'] = []; // Lưu các đáp án sai
}

// Số câu hỏi hiện tại và tổng số câu hỏi
$current_question_index = $_SESSION['current_question'];
$total_questions = count($questions);

// Xử lý khi hoàn thành bài kiểm tra
if ($current_question_index >= $total_questions) {
    echo "<h1>Chúc mừng bạn đã hoàn thành bài kiểm tra!</h1>";
    echo "<p>Điểm số của bạn: {$_SESSION['score']}/$total_questions</p>";
    echo '<a href="../public/course_exercise.php" class="btn-back">Quay lại trang bài tập</a>';
    // Đặt lại các giá trị session
    $_SESSION['current_question'] = 0; // Reset về câu hỏi đầu tiên
    $_SESSION['score'] = 0;            // Reset điểm
    $_SESSION['answered'] = [];        // Xóa danh sách câu trả lời sai
    exit;
}

// Lấy câu hỏi hiện tại
$current_question = $questions[$current_question_index];

// Xử lý câu trả lời
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $answer = $_POST['answer'] ?? '';
    if ($answer == $current_question['dapan']) {
        $_SESSION['score']++;
        $_SESSION['current_question']++; // Chuyển sang câu hỏi tiếp theo
        $_SESSION['answered'] = []; // Reset đáp án đã trả lời sai
        header("Location: course_selected.php?loai=$loai&capdo=$capdo"); // Chuyển hướng
        exit;
    } else {
        $_SESSION['answered'][] = $answer; // Lưu đáp án sai
    }
}
// Tạo danh sách nốt nhạc
$notes = ['đô', 'rê', 'mi', 'fa', 'sol', 'la', 'si'];
