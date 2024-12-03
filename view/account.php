<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thông tin cá nhân</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>
    <div class="container">
        <div class="profile-page">
            <div class="profile-container">
                <div class="profile-header">
                    <img src="<?php echo htmlspecialchars($avatarUrl); ?>"/>
                    <h2>Thông tin cá nhân</h2>
                    <p><strong>Tên:</strong> <?= htmlspecialchars($ten) ?></p>
                    <p><strong>Tham gia khóa học:</strong> <?= isset($tiendoStatus) ? $tiendoStatus : 'Chưa có tiến độ' ?></p>
                </div>



                <!-- Nút thay đổi mật khẩu -->
                <button class="btn-custom" data-bs-toggle="modal" data-bs-target="#changePasswordModal">Thay đổi mật khẩu</button>

                <!-- Modal thay đổi mật khẩu -->
                <div class="modal fade" id="changePasswordModal" tabindex="-1" aria-labelledby="changePasswordModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="changePasswordModalLabel">Thay đổi mật khẩu</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form method="POST">
                                    <div class="mb-3">
                                        <label for="current_password" class="form-label">Mật khẩu hiện tại</label>
                                        <input type="password" id="current_password" name="current_password" class="form-control" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="new_password" class="form-label">Mật khẩu mới</label>
                                        <input type="password" id="new_password" name="new_password" class="form-control" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="confirm_password" class="form-label">Xác nhận mật khẩu mới</label>
                                        <input type="password" id="confirm_password" name="confirm_password" class="form-control" required>
                                    </div>
                                    <button type="submit" name="change_password" class="btn-custom">Đổi mật khẩu</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Feedback Section -->
                <div id="feedback-container">
                    <h2>Phản hồi của bạn</h2>
                    <form method="POST">
                        <textarea name="feedback_content" id="feedback_content" placeholder="Vui lòng nhập ý kiến của bạn ở đây..."></textarea>
                        <button type="submit" name="submit_feedback" class="submit-feedback">Gửi phản hồi</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Thêm script Bootstrap và JavaScript để toggle modal -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

        <script>
            // Kiểm tra nếu có thông báo SweetAlert
            <?php if (isset($message) && $message != ''): ?>
                Swal.fire({
                    icon: '<?= $message_type === "success" ? "success" : "error" ?>',
                    title: '<?= $message_type === "success" ? "Thành công" : "Mật khẩu mới chưa đạt yêu cầu" ?>',
                    text: '<?= addslashes($message) ?>',
                    confirmButtonText: 'OK'
                });
            <?php endif; ?>
        </script>
    </div>
</body>

</html>