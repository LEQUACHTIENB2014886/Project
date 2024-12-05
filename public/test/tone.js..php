<?php
// Kết nối CSDL (Thay đổi thông tin kết nối nếu cần)
$pdo = new PDO('mysql:host=localhost;dbname=webhocnhacly', 'root', '');

// Lấy câu hỏi từ bảng khoahoc với điều kiện lọc loại = 'melody'
$stmt = $pdo->query("SELECT * FROM khoahoc WHERE loai = 'melody' ORDER BY RAND() LIMIT 1");

// Kiểm tra xem câu truy vấn có trả về kết quả không
$current_question = $stmt->fetch(PDO::FETCH_ASSOC);

if ($current_question) {
    // Lấy thông tin hợp âm và đáp án
    $chord = $current_question['cauhoi'];
    $answer = $current_question['dapan']; // 1 cho trưởng, 2 cho thứ
} else {
    // Nếu không có kết quả, thông báo lỗi hoặc xử lý khác
    die('Không có câu hỏi nào được tìm thấy.');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trắc nghiệm</title>

    <!-- Thêm CDN SweetAlert và Tone.js -->
    <script src="https://cdn.jsdelivr.net/npm/tone@14.8.11/build/Tone.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }

        .question-container {
            opacity: 1;
            transition: opacity 0.5s ease;
        }

        .question-container.hidden {
            opacity: 0;
        }

        .correct {
            background-color: #28a745;
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
    <h1 class="text-white">Hãy chọn hợp âm đúng!</h1>

    <div class="question-container" id="questionContainer">
        <div id="question" class="img text-center">
            <p><?= $chord ?></p> <!-- Hiển thị hợp âm -->
        </div>
        <br>
        <form method="post" class="answers">
            <button type="submit" name="answer" value="1">Trưởng</button>
            <button type="submit" name="answer" value="2">Thứ</button>
        </form>
    </div>

    <script>
        // Định nghĩa hợp âm và các tần số của nó (Cấu trúc hợp âm có thể thay đổi theo yêu cầu)
        const chords = {
            'C': ['C4', 'E4', 'G4'],   // C trưởng
            'Cm': ['C4', 'D#4', 'G4'], // C thứ
            'G': ['G4', 'B4', 'D5'],   // G trưởng
            'Am': ['A4', 'C5', 'E5'],  // Am trưởng
            'F': ['F4', 'A4', 'C5'],   // F trưởng
            // Thêm các hợp âm khác vào đây
        };
        document.addEventListener('DOMContentLoaded', function() {
    // Gán sự kiện cho nút phát âm thanh
    const playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function() {
        const chordNotes = chords['<?= $chord ?>']; // Lấy hợp âm từ PHP

        if (chordNotes && chordNotes.length > 0) {
            const synth = new Tone.Synth().toDestination();
            
            let time = Tone.now(); // Lấy thời gian hiện tại
            chordNotes.forEach(note => {
                // Phát từng nốt với khoảng thời gian cách nhau
                synth.triggerAttackRelease(note, "8n", time);
                time += 0.1; // Tăng thời gian phát cho nốt sau (thêm 0.1 giây)
            });
        }
    });
});

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

            // Nếu người dùng chọn đáp án đúng, phát âm thanh hợp âm
            <?php if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['answer'] == $answer): ?>
                const selectedButton = document.querySelector('button[name="answer"][value="<?= $_POST['answer'] ?>"]');
                // Thêm class 'correct' vào nút đúng
                selectedButton.classList.add('correct');

                // Phát âm thanh hợp âm sử dụng Tone.js
                const chordNotes = <?= json_encode($chords[$chord] ?? []) ?>; // Lấy hợp âm tương ứng từ biến PHP
                if (chordNotes.length > 0) {
                    const synth = new Tone.Synth().toDestination();
                    chordNotes.forEach(note => {
                        synth.triggerAttackRelease(note, "8n");
                    });
                }

                // Ẩn câu hỏi hiện tại và chuyển hướng sau khi 0.5 giây
                setTimeout(function() {
                    const questionContainer = document.getElementById('questionContainer');
                    questionContainer.classList.add('hidden');

                    // Sau 0.5 giây chuyển sang câu hỏi tiếp theo
                    setTimeout(function() {
                        window.location.href = 'course_selected.php?loai=<?= $loai ?>&capdo=<?= $capdo ?>';
                    }, 500);
                }, 500);
            <?php endif; ?>
        });
    </script>

</body>

</html>
