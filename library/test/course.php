<?php

$currentQuestion = isset($_POST["currentQuestion"]) ? $_POST["currentQuestion"] : 1;
$selectedAnswer = [];

if (isset($_POST["answer"])) {
    $selectedAnswer = $_POST["answer"];
    $sql = "SELECT course_answer FROM courses WHERE course_id = :currentQuestion AND course_level = 'medium'";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':currentQuestion', $currentQuestion);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $answer = $row["course_answer"];

    $sql_array = "SELECT course_id FROM courses WHERE course_level = 'medium'";
    $stmt_array = $conn->prepare($sql_array);
    $stmt_array->execute();
    $course_ids = $stmt_array->fetchAll(PDO::FETCH_COLUMN);

    $count_basic = count($course_ids);

    if ($selectedAnswer == $answer) {
        $currentQuestion++;
    }
}

$sql_array = "SELECT course_id FROM courses WHERE course_level = 'medium'";
$stmt_array = $conn->prepare($sql_array);
$stmt_array->execute();
$course_ids = $stmt_array->fetchAll(PDO::FETCH_COLUMN);

$count_basic = count($course_ids);

$sql = "SELECT * FROM courses WHERE course_id = :currentQuestion AND course_level = 'medium'";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':currentQuestion', $currentQuestion);
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);

if ($row) {
    echo "<h1><strong>Hãy chọn tên nốt nhạc trên khuông nhạc !</strong></h1><br><br><br>";
    $question = $row["course_question"];
    $stt = $row["course_id"];
    echo "<img src='$question' alt='Câu hỏi' class='question-image'><br><br><br>";
    if ($currentQuestion <= $count_basic) {
        echo "<form method='POST'>";
        echo "<input type='hidden' name='currentQuestion' value='$currentQuestion'>";
        echo "<div class='answer-buttons'>";
        echo "<button type='submit' name='answer' value='1' class='" . ($selectedAnswer == 1 ? ($answer == 1 ? "correct" : "incorrect") : "") . "'>Đô</button>";
        echo "<button type='submit' name='answer' value='2' class='" . ($selectedAnswer == 2 ? ($answer == 2 ? "correct" : "incorrect") : "") . "'>Rê</button>";
        echo "<button type='submit' name='answer' value='3' class='" . ($selectedAnswer == 3 ? ($answer == 3 ? "correct" : "incorrect") : "") . "'>Mi</button>";
        echo "<button type='submit' name='answer' value='4' class='" . ($selectedAnswer == 4 ? ($answer == 4 ? "correct" : "incorrect") : "") . "'>Fa</button>";
        echo "<button type='submit' name='answer' value='5' class='" . ($selectedAnswer == 5 ? ($answer == 5 ? "correct" : "incorrect") : "") . "'>Sol</button>";
        echo "<button type='submit' name='answer' value='6' class='" . ($selectedAnswer == 6 ? ($answer == 6 ? "correct" : "incorrect") : "") . "'>La</button>";
        echo "<button type='submit' name='answer' value='7' class='" . ($selectedAnswer == 7 ? ($answer == 7 ? "correct" : "incorrect") : "") . "'>Si</button>";
        echo "</div>";
        echo "<br>";
        echo "<br>";
        echo "</form>";
        echo "<hr>";
    } else {
        echo "<br><br><br><p style='color: white;text-shadow: 2px 3px 5px black; text-align:center; font-size:36px'>Xin chúc mừng, bạn đã hoàn thành bài kiểm tra!!!</p><br><br><br><br><br><br><br><br>";
    }
} else {
    echo "<br><br><br><p style='color: white;text-shadow: 2px 3px 5px black; text-align:center; font-size:36px'>Xin chúc mừng, bạn đã hoàn thành bài kiểm tra!!!</p><br><br><br><br><br><br><br><br>";
}
$conn = null;
