<!DOCTYPE html>
<html>
<head>
    <title>Trắc nghiệm</title>
</head>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webhocnhacly";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Kết nối tới CSDL thất bại: " . $e->getMessage());
}

$currentQuestion = isset($_POST["currentQuestion"]) ? $_POST["currentQuestion"] : 1;

if (isset($_POST["submit"])) {
    $selectedAnswer = isset($_POST["answer"]) ? $_POST["answer"] : "";
    $sql = "SELECT course_answer FROM courses WHERE course_id = :currentQuestion";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':currentQuestion', $currentQuestion);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $answer = $row["course_answer"];

    if ($selectedAnswer == $answer) {
        $currentQuestion++;
    } else {
        echo "<script>alert('Sai rồi, hãy thử lại!');</script>";
    }
}

$sql = "SELECT * FROM courses WHERE course_id = :currentQuestion";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':currentQuestion', $currentQuestion);
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);

if ($row) {
    $question = $row["course_question"];

    echo "<img src='$question' alt='Câu hỏi'><br>";

    if ($currentQuestion <= 7) {
        echo "<form method='POST'>";
        echo "<input type='hidden' name='currentQuestion' value='$currentQuestion'>";
        echo "<input type='radio' name='answer' value='1'> Đô<br>";
        echo "<input type='radio' name='answer' value='2'> Rê<br>";
        echo "<input type='radio' name='answer' value='3'> Mi<br>";
        echo "<input type='radio' name='answer' value='4'> Fa<br>";
        echo "<input type='radio' name='answer' value='5'> Sol<br>";
        echo "<input type='radio' name='answer' value='6'> La<br>";
        echo "<input type='radio' name='answer' value='7'> Si<br>";
        echo "<br>";
        echo "<br>";
        echo "<input type='submit' name='submit' value='Kiểm tra'>";
        echo "</form>";

        echo "<hr>";
    } else {
        echo "<p style='color: blue;'>Bạn đã hoàn thành trắc nghiệm!</p>";
    }
} else {
    echo "Không có câu hỏi nào.";
}

$conn = null;
?>
</body>
</html>