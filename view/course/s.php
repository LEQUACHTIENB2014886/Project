<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<br>
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
</body>
</html>