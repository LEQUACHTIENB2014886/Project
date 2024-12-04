<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trắc nghiệm</title>

    <!-- Thêm CDN SweetAlert -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }

        .question-container {
            opacity: 1;
            transition: opacity 0.5s;
        }

        .question-container.hidden {
            opacity: 0;
        }

        .question {
            font-size: 20px;
            margin: 20px;
        }

        .answers button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }

        .answers button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

        .progress {
            width: 80%;
            margin: 20px auto;
            background: #eee;
            border-radius: 20px;
            overflow: hidden;
        }

        .progress-bar {
            height: 20px;
            background: green;
            transition: width 0.9s;
        }

        .question-image {
            max-width: 80%;
            height: auto;
            display: block;
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <h1 class="text-white">Hãy chọn nốt trong khuông nhạc !</h1>
    <div class="progress">
        <div class="progress-bar"
            style="width: <?= $total_questions > 0 ? round(($current_question_index / $total_questions) * 100) : 0 ?>%;">
        </div>
    </div>

    <br>
    <div class="question-container" id="questionContainer">
        <div id="question" class="img text-center">
            <img src="<?= $current_question['cauhoi']; ?>" alt="Câu hỏi" class="question-image">
        </div>
        <br>
        <form method="post" class="answers">
            <?php foreach ($notes as $index => $note): ?>
                <button type="submit" name="answer" value="<?= $index + 1 ?>"
                    <?= in_array($index + 1, $_SESSION['answered']) ? 'disabled' : '' ?>>
                    <?= $note ?>
                </button>
            <?php endforeach; ?>
        </form>
    </div>

    <script>
        const questionContainer = document.getElementById('questionContainer');
        const buttons = document.querySelectorAll('.answers button');
        let answeredQuestions = 0;
        const totalQuestions = <?= $total_questions ?>; // Tổng số câu hỏi

        buttons.forEach(button => {
            button.addEventListener('click', function(event) {
                const selectedAnswer = parseInt(event.target.value);
                const correctAnswer = <?= $current_question['dapan'] ?>;

                // Nếu đáp án sai, disable nút
                if (selectedAnswer !== correctAnswer) {
                    event.target.disabled = true;
                } else {
                    // Tăng số câu hỏi đã trả lời đúng
                    answeredQuestions++;
                    // Kiểm tra nếu đã trả lời xong tất cả câu hỏi
                    if (answeredQuestions === totalQuestions) {
                        // Hiển thị thông báo chúc mừng khi hoàn thành khóa học
                        Swal.fire({
                            title: 'Chúc mừng!',
                            text: 'Bạn đã hoàn thành khóa học!',
                            icon: 'success',
                            confirmButtonText: 'Hoàn tất'
                        });
                    }
                }
            });
        });
    </script>
</body>

</html>
