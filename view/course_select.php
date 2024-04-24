<link rel="stylesheet" href="../public/css/course_select.css">
<br>
<div class="container course fadeHomepage fst-italic">
    <a href="../public/course_exercise.php">
        <div class="back text-light">
            <h5>
                << Trở về</h5>
        </div>
    </a>
    <div class="container">
        <div class="row">
            <div class="col-1">
            </div>
            <div class="col-10">
                <div class="text-center text-light">
                    <h1><strong>Bài tập âm nhạc dành cho bạn !!!</strong></h1>

                </div><br><br>
            </div>
            <div class="col-1">
            </div>
        </div>
    </div>
    <div class="box">
        <a href="../public/course_selected.php?course_type=note&course_level=<?php echo $_GET['course_level'] ?>">
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
        <a href="../public/course_selected.php?course_type=chord&course_level=<?php echo $_GET['course_level'] ?>">
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
        <a href="../public/course_selected.php?course_type=melody&course_level=<?php echo $_GET['course_level'] ?>">
            <div class="content">
                <h2>Nhịp diệu</h2>
                <p>Sự kết hợp của các hợp âm theo qui luật</p>
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
    .back:hover {
        transform: scale(1.02);
    }
</style>