<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trắc nghiệm</title>
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
            width: <?= $total_questions > 0 ? round(($current_question_index / $total_questions) * 100) : 0 ?>%;
            transition: width 0.3s;
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
    <div class="progress">
        <div class="progress-bar"></div>
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
</body>
</html>