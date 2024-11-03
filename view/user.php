<?php
if ($errorMessage !== "") {
    echo "<script>alert('$errorMessage');</script>";
    $errorMessage = "";
} elseif ($successMessage !== "") {
    echo "<script>alert('$successMessage');</script>";
    $successMessage = "";
}
?>
<br><br><br>
<div class="content-wrapper">
    <div class="custom-container rounded fadeHomepage">
        <ul class="nav nav-tabs justify-content-center">
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
                <form id="loginForm" class="mt-4" method="POST" action="">
                    <div class="mb-3">
                        <label for="loginName" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="loginName" name="loginName" required>
                    </div>
                    <div class="mb-3">
                        <label for="loginPassword" class="form-label">Mật khẩu:</label>
                        <input type="password" class="form-control" id="loginPassword" name="loginPassword" required>
                    </div>
                    <button type="submit" class="btn btn-primary text-black">Đăng nhập</button>
                </form>
                <?php
                if ($errorMessage !== "") {
                    echo "<script>alert('$errorMessage');</script>";
                    $errorMessage = "";
                } elseif ($successMessage !== "") {
                    echo "<script>alert('$successMessage');</script>";
                    $successMessage = "";
                }
                ?>
            </div>
            <div class="tab-pane fade" id="custom-register">
                <h3 class="mt-3">Đăng ký</h3>
                <form id="registerForm" class="mt-4" method="POST" action="">
                    <div class="mb-3">
                        <label for="registerEmail" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="registerEmail" name="registerEmail" required>
                    </div>
                    <div class="mb-3">
                        <label for="registerPassword" class="form-label">Mật khẩu:</label>
                        <input type="password" class="form-control" id="registerPassword" name="registerPassword" required>
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label">Xác nhận mật khẩu:</label>
                        <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Đăng ký</button>
                </form>

            </div>
        </div>
    </div>
</div>

<br><br><br><br><br><br><br><br><br>
<style>
    .custom-container {
        max-width: 450px;
        margin: 0 auto;

    }


    .custom-container {
        background-color: #ffffff;
        padding: 30px;
    }
</style>