<?php
$currentQuestionIndex = isset($_POST['questionIndex']) ? $_POST['questionIndex'] : 0;
$selectedAnswer = [];
$questionCount = 0; // Biến đếm số lượng câu hỏi
$completed = false; // Biến flag kiểm tra đã hoàn thành hay chưa
$result = false; // Biến kết quả kiểm tra đáp án

$course_type = isset($_GET['course_type']) ? $_GET['course_type'] : '';
$course_level = isset($_GET['course_level']) ? $_GET['course_level'] : 'medium';

if ($course_level === 'basic' && $course_type === 'note') {
    $_SESSION['course_level'] = $course_level;
} else {
    $_SESSION['course_level'] = 'medium'; // Giá trị mặc định nếu không phù hợp
}

$query = $conn->prepare("SELECT COUNT(*) FROM courses WHERE course_level = :course_level AND course_type = :course_type");
$query->bindParam(':course_level', $course_level);
$query->bindParam(':course_type', $course_type);
$query->execute();
$questionCount = $query->fetchColumn();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['answer'])) {
        $selectedAnswer = $_POST['answer'];
        $query = $conn->prepare("SELECT course_answer FROM courses WHERE course_level = :course_level AND course_type = :course_type LIMIT 1 OFFSET :questionIndex");
        $query->bindParam(':course_level', $course_level);
        $query->bindParam(':course_type', $course_type);
        $query->bindParam(':questionIndex', $currentQuestionIndex, PDO::PARAM_INT);
        $query->execute();
        $correctAnswer = $query->fetch(PDO::FETCH_COLUMN);

        if ((int)$selectedAnswer === (int)$correctAnswer) {
            $currentQuestionIndex++;
        } else {
            $result = true; // Đáp án sai, đặt biến kết quả là true
        }
    }

    if ($currentQuestionIndex >= $questionCount) {
        $completed = true;
    }
}

$query = $conn->prepare("SELECT course_id, course_question FROM courses WHERE course_level = :course_level AND course_type = :course_type LIMIT 1 OFFSET :questionIndex");
$query->bindParam(':course_level', $course_level);
$query->bindParam(':course_type', $course_type);
$query->bindParam(':questionIndex', $currentQuestionIndex, PDO::PARAM_INT);
$query->execute();
$question = $query->fetch(PDO::FETCH_ASSOC);

$conn = null;
?>

<?php if (!$completed) : ?>
    <h1>Hãy chọn tên nốt nhạc nằm trên khuông nhạc !</h1><br>
    <div id="questionText" class="img text-center"><img src="<?php echo $question['course_question']; ?>" alt="Câu hỏi" class="question-image"></div>
    <br>
    <form method="POST" action="">
        <div class='answer-buttons'>
            <input type="hidden" name="questionIndex" value="<?php echo $currentQuestionIndex; ?>">
            <?php
            echo "<button id='answer-1' type='submit' name='answer' value='1' class='" . ($selectedAnswer == 1 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Đô</button>";
            echo "<button id='answer-2' type='submit' name='answer' value='2' class='" . ($selectedAnswer == 2 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Rê</button>";
            echo "<button id='answer-3' type='submit' name='answer' value='3' class='" . ($selectedAnswer == 3 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Mi</button>";
            echo "<button id='answer-4' type='submit' name='answer' value='4' class='" . ($selectedAnswer == 4 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Fa</button>";
            echo "<button id='answer-5' type='submit' name='answer' value='5' class='" . ($selectedAnswer == 5 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Sol</button>";
            echo "<button id='answer-6' type='submit' name='answer' value='6' class='" . ($selectedAnswer == 6 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>La</button>";
            echo "<button id='answer-7' type='submit' name='answer' value='7' class='" . ($selectedAnswer == 7 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Si</button>";
            ?>
        </div>
    </form>
    <br>

<?php else : ?>
    <div id="congratulations" class="text-center" style="font-size:40px">Chúc mừng! Bạn đã hoàn thành tất cả câu hỏi.</div><br><br><br><br><br>

<?php endif; ?>
<script>
    // Lắng nghe sự kiện click trên các button
    var buttons = document.querySelectorAll('.answer-buttons button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var selectedButton = event.target;
            var selectedAnswer = selectedButton.value;
            var correctAnswer = <?php echo $correctAnswer; ?>;

            if (selectedAnswer != correctAnswer) {
                selectedButton.classList.add('wrong-answer');
            }
        });
    });
</script>