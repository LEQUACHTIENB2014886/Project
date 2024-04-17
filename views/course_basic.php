<div class="container course fadeHomepage">
    <a href="../public/course.php">
        <div class="text-light" style="text-shadow: 2px 3px 5px black;">
            <h5>
                << Trở về</h5>
        </div>
    </a>
    <div class="container">
        <div class="row">
            <div class="col-1">
            </div>
            <div class="col-10">
                <div class="text-center text-light" style="text-shadow: 2px 3px 5px black; margin-bottom: 25px;">
                    <h1><strong>Bài tập âm nhạc dành cho bạn !!!</strong></h1>
                </div><br><br>
            </div>
            <div class="col-1">
            </div>
        </div>
    </div>
    <div class="box">
        <a href="../courses/basic_note.php">
            <div class="content">
                <h2>Nốt nhạc</h2>
                <p>Là những nốt cơ bản nhất, cấu tạo nên nhạc</p>
            </div>
            <div class="image">
                <img src="../image/courses/4_1.png">
            </div>
            <br>
        </a>
    </div>
    <div class="box">
        <a href="../courses/basic_chord.php">
            <div class="content">
                <h2>Hợp âm</h2>
                <p>Là tập hợp của nhiều nốt nhạc</p>
            </div>
            <div class="image">
                <img src="../image/courses/4_2.png">
            </div>
            <br>
        </a>
    </div>
    <div class="box">
        <a href="../courses/basic_melody.php">
            <div class="content">
                <h2>Nhịp diệu</h2>
                <p>Sự kết hợp của các hợp âm them qui luật</p>
            </div>
            <div class="image">
                <img src="../image/courses/4_3.png">
            </div>
            <br>
        </a>
    </div>
</div>
</div><br><br><br><br><br><br><br>
<style>
    .course {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 15px;
        margin-top: -600px;
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

    a {
        text-decoration: none;
    }
</style>