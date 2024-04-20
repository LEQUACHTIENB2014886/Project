<main class="main-flex">
    <div>
        <div class="full-bg-img">
            <div class="text-white" style="text-shadow: 2px 3px 5px black;">
                <div class="container">
                    <br><br><br><br><br><br><br><br>
                    <div class="text-center">
                        <h1><strong>Hãy chọn tên nốt nhạc trên khuông nhạc !</strong></h1>
                    </div><br><br>
                    <div class="row text-left">
                        <div class="col-2"></div>
                        <div class="col-8">
                            <?php
                            if ($row) {
                                $question = $row["course_question"];
                                echo "<img src='$question' alt='Câu hỏi' class='question-image'><br><br><br>";
                                if ($currentQuestion <= 7) {
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
                                    echo "<p style='color: white;text-shadow: 2px 3px 5px black; text-center'>Bạn đã hoàn thành trắc nghiệm!</p>";
                                }
                            } else {
                                echo "Không có câu hỏi nào.";
                            }
                            $conn = null;
                            ?>
                        </div>
                        <div class="col-2"></div>
                    </div><br><br><br>
                    <div class="text-center">
                    </div>
                </div>
                <br><br>
            </div>
        </div>
    </div>
</main>
<style>
    .answer-buttons {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
    }

    .answer-buttons button {
        padding: 10px 20px;
        border: none;
        background-color: gray;
        color: white;
        font-size: 16px;
        cursor: pointer;
    }
    .answer-buttons button:hover {
        background-color: #434d54;
    }

    /* .answer-buttons button.correct {
        background-color: #45a049;
    } */

    .answer-buttons button.incorrect {
        background-color: red;
    }

    .question-image {
        width: 100%;
    }
</style>