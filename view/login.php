<link rel="stylesheet" href="../public/css/login.css">
<br>
<div class="custom-container rounded">
    <ul class="nav nav-tabs justify-content-center ">
        <li class="nav-item">
            <a class="nav-link text-dark active" id="custom-login-tab" data-bs-toggle="tab" href="#custom-login">Đăng nhập</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" id="custom-register-tab" data-bs-toggle="tab" href="#custom-register">Đăng ký</a>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="custom-login">
            <h3 class="mt-3">Đăng nhập</h3>
            <form id="loginForm" class="mt-4">
                <div class="mb-3">
                    <label for="loginName" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="loginName">
                </div>
                <div class="mb-3">
                    <label for="loginPassword" class="form-label">Mật khẩu:</label>
                    <input type="password" class="form-control" id="loginPassword">
                </div>
                <button type="submit" class="btn btn-primary text-black">Đăng nhập</button>
            </form>
        </div>
        <div class="tab-pane fade" id="custom-register">
            <h3 class="mt-3">Đăng ký</h3>
            <form id="registerForm" class="mt-4">
                <div class="mb-3">
                    <label for="registerEmail" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="registerEmail">
                </div>
                <div class="mb-3">
                    <label for="registerPassword" class="form-label">Mật khẩu:</label>
                    <input type="password" class="form-control" id="registerPassword">
                </div>
                <div class="mb-3">
                    <label for="confirmPassword" class="form-label">Xác nhận mật khẩu:</label>
                    <input type="password" class="form-control" id="confirmPassword">
                </div>
                <button type="submit" class="btn btn-primary">Đăng ký</button>
            </form>
        </div>
    </div>
</div>


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

<br><br><br><br><br><br><br><br><br><br><br><br>