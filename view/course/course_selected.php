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
            transition: opacity 0.5s ease; /* Hiệu ứng chuyển câu hỏi */
        }

        .question-container.hidden {
            opacity: 0;
        }

        .correct {
            background-color: #28a745; /* Màu xanh cho đáp án đúng */
            color: white;
            border: none;
            transition: background-color 0.3s ease, transform 0.3s ease;
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
    </style>
</head>

<body>
    <h1 class="text-white">Hãy chọn <?= $loai == 'chord' ? 'hợp âm' : 'nốt nhạc' ?> đúng!</h1>
    <div class="progress">
        <div class="progress-bar"
            style="width: <?= $total_questions > 0 ? round(($current_question_index / $total_questions) * 100) : 0 ?>%;"></div>
    </div>

    <br>
    <div class="question-container" id="questionContainer">
        <div id="question" class="img text-center">
            <img src="<?= $current_question['cauhoi']; ?>" alt="Câu hỏi" class="question-image">
        </div>
        <br>
        <form method="post" class="answers">
            <?php if ($loai == 'chord'): ?>
                <!-- Hiển thị hợp âm nếu loại là 'chord' -->
                <?php foreach ($chords as $index => $chord): ?>
                    <button type="submit" name="answer" value="<?= $index + 1 ?>" <?= in_array($index + 1, $_SESSION['answered']) ? 'disabled' : '' ?>>
                        <?= $chord ?>
                    </button>
                <?php endforeach; ?>
            <?php else: ?>
                <!-- Hiển thị nốt nhạc nếu loại là 'note' -->
                <?php foreach ($notes as $index => $note): ?>
                    <button type="submit" name="answer" value="<?= $index + 1 ?>" <?= in_array($index + 1, $_SESSION['answered']) ? 'disabled' : '' ?>>
                        <?= $note ?>
                    </button>
                <?php endforeach; ?>
            <?php endif; ?>
        </form>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Kiểm tra nếu bài kiểm tra đã hoàn thành
            <?php if (isset($_SESSION['completed']) && $_SESSION['completed'] === true): ?>
                Swal.fire({
                    title: 'Chúc mừng!',
                    text: 'Bạn đã hoàn thành bài kiểm tra!',
                    icon: 'success',
                    showCancelButton: true, 
                    cancelButtonText: 'Quay về khóa học', 
                    confirmButtonText: 'Thực hiện lại', 
                    backdrop: 'static',
                    allowOutsideClick: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = 'course_selected.php?loai=<?= $loai ?>&capdo=<?= $capdo ?>';
                    } else {
                        window.location.href = '../public/course_exercise.php'; 
                    }
                });
            <?php unset($_SESSION['completed']); endif; ?>

            // Nếu chọn đáp án đúng
            <?php if ($_SERVER['REQUEST_METHOD'] == 'POST' && $answer == $current_question['dapan']): ?>
                const selectedButton = document.querySelector('button[name="answer"][value="<?= $answer ?>"]');
                // Thêm class 'correct' vào nút đúng
                selectedButton.classList.add('correct');
                
                // Ẩn câu hỏi hiện tại và chuyển hướng sau khi 0.5 giây
                setTimeout(function() {
                    const questionContainer = document.getElementById('questionContainer');
                    questionContainer.classList.add('hidden');  // Ẩn câu hỏi hiện tại

                    // Sau 0.5 giây chuyển sang câu hỏi tiếp theo
                    setTimeout(function() {
                        window.location.href = 'course_selected.php?loai=<?= $loai ?>&capdo=<?= $capdo ?>';
                    }, 500);
                }, 500); // Sau 0.5 giây thêm màu xanh
            <?php endif; ?>
        });
    </script>

</body>

</html>
