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