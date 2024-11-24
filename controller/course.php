<?php
$currentQuestionIndex = isset($_POST['questionIndex']) ? $_POST['questionIndex'] : 0;
$selectedAnswer = [];
$questionCount = 0; // Biến đếm số lượng câu hỏi
$completed = false; // Biến flag kiểm tra đã hoàn thành hay chưa
$result = false; // Biến kết quả kiểm tra đáp án

$loai = isset($_GET['loai']) ? $_GET['loai'] : '';
$capdo = isset($_GET['capdo']) ? $_GET['capdo'] : 'medium';

if ($capdo === 'basic' && $loai === 'note') {
    $_SESSION['capdo'] = $capdo;
} else {
    $_SESSION['capdo'] = 'medium'; // Giá trị mặc định nếu không phù hợp
}

$query = $conn->prepare("SELECT COUNT(*) FROM khoahoc WHERE capdo = :capdo AND loai = :loai");
$query->bindParam(':capdo', $capdo);
$query->bindParam(':loai', $loai);
$query->execute();
$questionCount = $query->fetchColumn();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['dapan'])) {
        $selectedAnswer = $_POST['dapan'];
        $query = $conn->prepare("SELECT dapan FROM khoahoc WHERE capdo = :capdo AND loai = :loai LIMIT 1 OFFSET :questionIndex");
        $query->bindParam(':capdo', $capdo);
        $query->bindParam(':loai', $loai);
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

$query = $conn->prepare("SELECT ma, cauhoi FROM khoahoc WHERE capdo = :capdo AND loai = :loai LIMIT 1 OFFSET :questionIndex");
$query->bindParam(':capdo', $capdo);
$query->bindParam(':loai', $loai);
$query->bindParam(':questionIndex', $currentQuestionIndex, PDO::PARAM_INT);
$query->execute();
$question = $query->fetch(PDO::FETCH_ASSOC);

$conn = null;
?>

<?php if (!$completed) : ?>
    <h1>Hãy chọn tên nốt nhạc nằm trên khuông nhạc !</h1><br>
    <style>
        #questionText .question-image {
            max-width: 100%;
            /* Giới hạn chiều rộng tối đa là 100% */
            height: auto;
            /* Tự động điều chỉnh chiều cao để giữ tỷ lệ */
        }
    </style>

    <div id="questionText" class="img text-center">
        <img src="<?php echo $question['cauhoi']; ?>" alt="Câu hỏi" class="question-image">
    </div>
    <br>
    <form method="POST" action="">
    <div class='answer-buttons'>
        <input type="hidden" name="questionIndex" value="<?php echo $currentQuestionIndex; ?>">
        <?php
        if ($loai === 'note') {
            echo "<button id='answer-1' type='submit' name='dapan' value='1' class='" . ($selectedAnswer == 1 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Đô</button>";
            echo "<button id='answer-2' type='submit' name='dapan' value='2' class='" . ($selectedAnswer == 2 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Rê</button>";
            echo "<button id='answer-3' type='submit' name='dapan' value='3' class='" . ($selectedAnswer == 3 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Mi</button>";
            echo "<button id='answer-4' type='submit' name='dapan' value='4' class='" . ($selectedAnswer == 4 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Fa</button>";
            echo "<button id='answer-5' type='submit' name='dapan' value='5' class='" . ($selectedAnswer == 5 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Sol</button>";
            echo "<button id='answer-6' type='submit' name='dapan' value='6' class='" . ($selectedAnswer == 6 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>La</button>";
            echo "<button id='answer-7' type='submit' name='dapan' value='7' class='" . ($selectedAnswer == 7 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Si</button>";
        }
        if ($loai === 'chord') {
            echo "<button id='answer-1' type='submit' name='dapan' value='1' class='" . ($selectedAnswer == 1 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Trưởng</button>";
            echo "<button id='answer-2' type='submit' name='dapan' value='2' class='" . ($selectedAnswer == 2 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Thứ</button>";
        }
        if ($loai === 'melody') {
            echo "<button id='answer-1' type='submit' name='dapan' value='1' class='" . ($selectedAnswer == 1 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Đô</button>";
            echo "<button id='answer-2' type='submit' name='dapan' value='2' class='" . ($selectedAnswer == 2 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Rê</button>";
            echo "<button id='answer-3' type='submit' name='dapan' value='3' class='" . ($selectedAnswer == 3 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Mi</button>";
            echo "<button id='answer-4' type='submit' name='dapan' value='4' class='" . ($selectedAnswer == 4 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Fa</button>";
            echo "<button id='answer-5' type='submit' name='dapan' value='5' class='" . ($selectedAnswer == 5 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Sol</button>";
            echo "<button id='answer-6' type='submit' name='dapan' value='6' class='" . ($selectedAnswer == 6 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>La</button>";
            echo "<button id='answer-7' type='submit' name='dapan' value='7' class='" . ($selectedAnswer == 7 ? ($selectedAnswer == $correctAnswer ? "" : "wrong-answer") : "") . "'>Si</button>";
        }
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

            // Sử dụng json_encode để đảm bảo biến PHP được chuyển thành một chuỗi hợp lệ trong JavaScript
            var correctAnswer = <?php echo json_encode($correctAnswer); ?>;

            if (selectedAnswer != correctAnswer) {
                selectedButton.classList.add('wrong-answer');
            }
        });
    });
</script>
