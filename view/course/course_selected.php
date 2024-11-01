<link rel="stylesheet" href="../public/css/course_selected.css">
<main class="main-flex" style="margin-top:-120px;">
    <div>
        <div class="full-bg-img fst-italic" >
            <div class="text-white" style="text-shadow: 2px 3px 5px black;">
                <div class="container">
                    <br><br><br><br><br><br>
                    <a href="../public/course.php">
                        <div class="back text-light">
                            <h5>
                                << Trở về</h5>
                        </div>
                    </a>
                    <div class="text-center">
                    </div><br><br>
                    <div class="row text-left">
                        <div class="col-2"></div>
                        <div class="col-8">
                            <?php
                            include '../controller/course.php'
                            ?>
                        </div>
                        <div class="col-2"></div>
                    </div>
                    <div class="text-center">
                    </div>
                </div>
                <br><br><br><br><br><br><br>
            </div>
        </div>
    </div>
</main><br>
<style>
      .back:hover {
        transform: scale(1.1);
    }
    .back:hover {
        transition: transform 0.3s;
    }

    .box {
        transition: transform 0.3s;
    }

    .box:hover {
        transform: scale(1.025);
    }
</style>