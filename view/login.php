<!DOCTYPE html>
<html>

<head>
    <title>Login Form</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        .custom-container {
            max-width: 500px;
            margin: 0 auto;
            margin-top: 100px;
            background-color: #ffffff;
            padding: 30px;
            border-radius: 4px;
        }

        .custom-tab-content {
            margin-top: 20px;
        }

        .custom-tab-pane {
            padding: 30px;
            background-color: #f9f9f9;
            border-radius: 4px;
        }

        .custom-form-group label {
            font-weight: bold;
        }

        .custom-btn-primary {
            width: 100%;
        }

        .custom-nav-tabs {
            margin-bottom: 20px;
        }

        .custom-nav-link {
            color: #000000;
            padding: 10px 20px;
            font-weight: bold;
            font-size: 18px;
        }
    </style>
</head>

<body>
    <div class="custom-container fst-italic fadeHomepage" style="margin-top:-650px">
        <div class="card">
            <div class="card-header">
                <ul class="nav custom-nav-tabs justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active custom-nav-link" id="custom-login-tab" data-toggle="tab" href="#custom-login">Đăng nhập</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-nav-link" id="custom-register-tab" data-toggle="tab" href="#custom-register">Đăng ký</a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <div class="tab-content custom-tab-content">
                    <div class="tab-pane fade show active" id="custom-login">
                        <h3 style="color: black;">Đăng nhập</h3>
                        <form id="loginForm">
                            <div class="form-group custom-form-group">
                                <label for="loginName">Email:</label>
                                <input type="email" class="form-control" id="loginName">
                            </div>
                            <div class="form-group custom-form-group">
                                <label for="loginPassword">Mật khẩu:</label>
                                <input type="password" class="form-control" id="loginPassword">
                            </div>
                            <button type="submit" class="btn btn-primary custom-btn-primary">Đăng nhập</button>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="custom-register">
                        <h3 style="color: black;">Đăng ký</h3>
                        <form id="registerForm">
                            <div class="form-group custom-form-group">
                                <label for="registerEmail">Email:</label>
                                <input type="email" class="form-control" id="registerEmail">
                            </div>
                            <div class="form-group custom-form-group">
                                <label for="registerPassword">Mật khẩu:</label>
                                <input type="password" class="form-control" id="registerPassword">
                            </div>
                            <div class="form-group custom-form-group">
                                <label for="confirmPassword">Xác nhận mật khẩu:</label>
                                <input type="password" class="form-control" id="confirmPassword">
                            </div>
                            <button type="submit" class="btn btn-primary custom-btn-primary">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
<br><br><br><br><br><br><br><br>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Lấy form đăng nhập
            var loginForm = document.getElementById('loginForm');

            // Xử lý sự kiện submit form
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Ngăn chặn form submit

                // Lấy giá trị email và password
                var email = document.getElementById('loginName').value;
                var password = document.getElementById('loginPassword').value;

                // In giá trị email và password ra console
                console.log('Email:', email);
                console.log('Password:', password);

                // Thực hiện các tác vụ khác sau khi lấy giá trị email và password
                // ...

                // Reset form
                loginForm.reset();
            });
        });
    </script>
</body>

</html