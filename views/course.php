<div class="container course fadeHomepage">
    <div class="container">
        <div class="row">
            <div class="col-1">
            </div>
            <div class="col-10">
                <div class="text-center text-light" style="text-shadow: 2px 3px 5px black; margin-bottom: 25px;">
                    <h1><strong>Hãy lựa chọn khóa học phù hợp với bạn !</strong></h1>
                </div><br><br>
            </div>
            <div class="col-1">
            </div>
        </div>
    </div>
    <div class="box">
        <a href="../courses/course_basic.php">
            <div class="content">
                <h2>Người mới bắt đầu</h2>
                <p>Bước đầu trong việc học nhạc lý</p>
            </div>
            <div class="image">
                <img src="../image/features/guitar.jpg">
            </div>
            <br>
        </a>
    </div>
    <div class="box">
        <a href="../courses/course_medium.php">
            <div class="content">
                <h2>Người đã có nền cơ bản</h2>
                <p>Bước tiếp theo trong việc học nhạc lý</p>
            </div>
            <div class="image">
                <img src="../image/features/tuner.jpg">
            </div>
            <br>
        </a>
    </div>
    <div class="box">
        <a href="../courses/course_hard.php">
            <div class="content">
                <h2>Người kì cựu</h2>
                <p>Sau khi đã có nền tảng vững chắc.</p>
            </div>
            <div class="image">
                <img src="../image/features/bass-guitar.jpg">
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
</style>