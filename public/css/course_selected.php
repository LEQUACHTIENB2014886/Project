<style>
    .answer-buttons {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
    }

    .answer-buttons button {
        padding: 5px 15px;
        border: 2px solid black;
        background-color: gray;
        color: white;
        font-size: 16px;
        cursor: pointer;
        width: 55px;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .answer-buttons button.wrong-answer {
        background-color: red;
    }

    .answer-buttons button:hover {
        background-color: #434d54;
        border: 2px solid rgb(151, 150, 150);
    }

    .answer-buttons button {
        border-radius: 5px;
    }

    .question-image {
        width: 100%;
        border-radius: 5px;
    }
</style>