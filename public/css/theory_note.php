<style>
    .music-theory-wrapper {
        font-family: 'Arial', sans-serif;
        background-color: #f0f8ff;
        padding: 20px;
    }

    .music-theory-title {
        color: #2c3e50;
        text-align: center;
        margin-bottom: 20px;
    }

    .music-theory-tabs {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .music-theory-tab {
        padding: 15px 30px;
        margin: 5px;
        background-color: #3498db;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    .music-theory-tab:hover,
    .music-theory-tab.active {
        background-color: #2980b9;
    }

    .music-theory-content {
        display: none;
        background-color: white;
        border: 1px solid #ddd;
        padding: 20px;
        border-radius: 5px;
    }

    .music-theory-content.active {
        display: block;
    }

    .music-theory-content img {
        max-width: 100%;
        height: auto;
    }

    .music-theory-content ul {
        list-style-type: disc;
        padding-left: 40px;
        margin: 10px 0;
    }

    .music-theory-content li {
        margin-bottom: 5px;
        color: #333;
    }
</style>