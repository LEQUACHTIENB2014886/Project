<!-- <link rel="stylesheet" href="./course.css"> --><br>
<div class="container course fst-italic slide-in" style="margin-top:0px;">
    <a href="../public/index.php">
        <div class="back text-light">
            <h5>
                << Trở về</h5>
        </div>
    </a>
    <div class="container" style="margin-top:-20px;">
        <div class="row">
            <div class="col-1">
            </div>
            <div class="col-10">
                <div class="title_course text-center text-light">
                    <h1><strong>Hãy lựa chọn khóa học phù hợp với bạn !</strong></h1>
                    <h5>*Bạn nên tham khảo lý thuyết trước khi bước vào phần bài tập</h5>
                </div><br>
            </div>
            <div class="col-1">
            </div>
        </div>
    </div>
    <div class="box">
        <a href="../public/theory.php">
            <div class="content">
                <h2>Lý thuyết âm nhạc</h2>
                <p>Nhạc lý rất quan trọng, lý thuyết là nền tảng.</p>
            </div>
            <div class="image">
                <img src="../library/image/features/tempo-markings.jpg">
            </div>
            <br>
        </a>
    </div>
    <div class="box">
        <a href="../public/course_exercise.php">
            <div class="content">
                <h2>Bài tập nhạc lý</h2>
                <p>Bước tiếp theo sao khi đã tiếp thu lý thuyết.</p>
            </div>
            <div class="image">
                <img src="../library/image/features/staff-paper.jpg">
            </div>
            <br>
        </a>
    </div>
    <div class="box">
        <a href="../public/features.php">
            <div class="content">
                <h2>Công cụ khác</h2>
                <p>Các tính năng hỗ trợ cho âm nhạc.</p>
            </div>
            <div class="image">
                <img src="../library/image/features/metronome.jpg">
            </div>
            <br>
        </a>
    </div>
</div>
</div><br><br><br><br><br><br><br>
<style>
    .back:hover {
        transform: scale(1.02);
    }

    .course {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 15px;
        margin-top: -600px;
    }

    .box:hover {
        transform: scale(1.03);
    }

    div.title_course {
        text-shadow: 2px 3px 5px black;
        margin-bottom: 25px;
    }

    .box {
        width: calc(33.33% - 10px);
        background-color: #f3f3f3;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    }


    .content {
        text-align: center;
        padding: 15px;
    }

    .box a {
        text-decoration: none;
        color: inherit;

    }

    .box a:hover {
        color: gray;

    }

    .box a:active {
        color: white;
    }

    .image {
        text-align: center;
        padding: 10px;
        height: 100%;
    }

    .image img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }

    .tools {
        text-decoration: none;
        color: inherit;
    }

    .tools:hover {
        color: inherit;
    }

    h1,
    h5 {
        text-shadow: 2px 3px 5px black;
    }
</style>