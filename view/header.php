<!DOCTYPE html id="custom-doctype">
<html lang="en" class="full-height">

<head>
    <title>Never late to LEARN</title>
    <link rel="icon" href="../library/image/interview/favicon.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="../public/js/scripts.js">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</head>
<!--Main Navigation-->

<body class="view intro-2" id="main-body">
    <header id="main-header">
        <nav id="main-nav" class="navbar navbar-expand-lg navbar-dark black fst-italic">
            <div class="container">
                <a class="navbar-brand" href="#"><strong>MelodyTalent</strong></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style="text-shadow: 1px 2px 4px black;font-size:18px;">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="../public/index.php">Trang chủ<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../public/course.php">Khóa học</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../public/features.php">Công cụ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../public/user.php">Tài khoản</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../public/theory_basic.php">Lý thuyết</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../public/introduce.php">Giới thiệu</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <style>
        .navbar-brand {
            border: 1px solid white;
            padding: 5px 10px;
        }

        .view {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            background: url("../library/image/interview/background.jpg") no-repeat center center;
            background-size: cover;
        }

        #main-header {
            background-color: #33333300;
            color: white;
            padding: 10px;
        }

        #main-header .navbar {
            z-index: 1;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.3);
        }

        #main-header .navbar-dark .navbar-nav .nav-link {
            color: #ffffff;
        }

        #main-header .buttonToCourse {
            display: inline-block;
            padding: 15px 30px;
            background-color: SlateGrey;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 20px;
            border: 2px solid rgb(55, 66, 76);
            transition: border-color 0.3s;
        }

        #main-header .buttonToCourse:hover {
            border-color: whitesmoke;
            color: white;
        }

        #main-header a {
            text-decoration: none;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .fadeHomepage {
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .fadefast {
            animation: fadeIn 0.2s ease-in;
        }

        .slide-in {
            opacity: 0;
            transform: translateX(-100%);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .slide-in.show {
            opacity: 1;
            transform: translateX(0);
        }

        #homepage-button .buttonToCourse {
            display: inline-block;
            padding: 15px 30px;
            background-color: SlateGrey;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 20px;
            border: 2px solid rgb(55, 66, 76);
            transition: border-color 0.3s;
        }

        #homepage-button .buttonToCourse:hover {
            border-color: whitesmoke;
            color: white;
        }

        a {
            text-decoration: none;
        }
        
    </style>
    <!-- <script>
        // Add a class to trigger the slide in transition after a delay
        setTimeout(function() {
            document.querySelector('.slide-in').classList.add('show');
        }, 200); // Delay of 1 second
    </script> -->