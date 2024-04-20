<?php
$currentQuestion = isset($_POST["currentQuestion"]) ? $_POST["currentQuestion"] : 1;
$selectedAnswer = [];

if (isset($_POST["answer"])) {
    $selectedAnswer = $_POST["answer"];
    $sql = "SELECT course_answer FROM courses WHERE course_id = :currentQuestion";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':currentQuestion', $currentQuestion);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $answer = $row["course_answer"];

    if ($selectedAnswer == $answer) {
        $currentQuestion++;
    }
}

$sql = "SELECT * FROM courses WHERE course_id = :currentQuestion";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':currentQuestion', $currentQuestion);
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);
