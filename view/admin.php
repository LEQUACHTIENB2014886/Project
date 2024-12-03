<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <title>Quản lý Hệ Thống</title>
</head>

<body>
    <h1>Quản lý Hệ Thống</h1>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <?php if ($addMessage != ''): ?>
        <script>
            Swal.fire({
                title: '<?php echo $addMessage == 'Thêm thành công!' ? 'Thành công!' : 'Lỗi!'; ?>',
                text: '<?php echo $addMessage; ?>',
                icon: '<?php echo $addMessage == 'Thêm thành công!' ? 'success' : 'error'; ?>',
                confirmButtonText: 'Đóng'
            });
        </script>
    <?php endif; ?>

    <?php if ($message != ''): ?>
        <script>
            Swal.fire({
                title: '<?php echo $message == 'Cập nhật thành công!' ? 'Thành công!' : 'Lỗi!'; ?>',
                text: '<?php echo $message; ?>',
                icon: '<?php echo $message == 'Cập nhật thành công!' ? 'success' : 'error'; ?>',
                confirmButtonText: 'Đóng'
            });
        </script>
    <?php endif; ?>


    <!-- Thanh điều hướng -->
    <div class="horizontal-container">
        <div class="item">
            <button id="nguoidungButton" onclick="navigateToNguoidung()">Bảng Người Dùng</button>
        </div>
        <div class="item">
            <button id="khoahocButton" onclick="navigateToKhoahoc()">Bảng Khóa Học</button>
        </div>
        <div class="item">
            <button id="nhaccuButton" onclick="navigateToNhaccu()">Bảng Nhạc Cụ</button>
        </div>
        <div class="item">
            <button id="phanhoiButton" onclick="navigateToPhanhoi()">Bảng Phản Hồi</button>
        </div>
        <div class="item">
            <button onclick="logout()">Đăng Xuất</button>
        </div>
    </div>

    <!-- Bộ lọc -->
    <div class="horizontal-container">
        <!-- Bộ lọc -->
        <div class="filter-container">
            <form method="POST" id="filter-form-nguoidung" style="display: none;">
                <label for="tiendo">Tiến Độ:</label>
                <select name="tiendo" id="tiendo">
                    <option value="" <?= (!isset($_POST['tiendo']) || $_POST['tiendo'] === '') ? 'selected' : '' ?>>Tất cả</option>
                    <option value="1,0,0" <?= (isset($_POST['tiendo']) && $_POST['tiendo'] === '1,0,0') ? 'selected' : '' ?>>1,0,0</option>
                    <option value="1,1,0" <?= (isset($_POST['tiendo']) && $_POST['tiendo'] === '1,1,0') ? 'selected' : '' ?>>1,1,0</option>
                    <option value="1,1,1" <?= (isset($_POST['tiendo']) && $_POST['tiendo'] === '1,1,1') ? 'selected' : '' ?>>1,1,1</option>
                </select>
                <button type="submit">Lọc</button>
            </form>
            <form method="POST" id="filter-form-khoahoc" style="display: none;">
                <label for="loai">Loại Khóa Học:</label>
                <select name="loai" id="loai">
                    <option value="" <?= (!isset($_POST['loai']) || $_POST['loai'] === '') ? 'selected' : '' ?>>Tất cả</option>
                    <option value="note" <?= (isset($_POST['loai']) && $_POST['loai'] === 'note') ? 'selected' : '' ?>>Note</option>
                    <option value="chord" <?= (isset($_POST['loai']) && $_POST['loai'] === 'chord') ? 'selected' : '' ?>>Chord</option>
                    <option value="melody" <?= (isset($_POST['loai']) && $_POST['loai'] === 'melody') ? 'selected' : '' ?>>Melody</option>
                </select>

                <label for="capdo">Cấp Độ:</label>
                <select name="capdo" id="capdo">
                    <option value="" <?= (!isset($_POST['capdo']) || $_POST['capdo'] === '') ? 'selected' : '' ?>>Tất cả</option>
                    <option value="basic" <?= (isset($_POST['capdo']) && $_POST['capdo'] === 'basic') ? 'selected' : '' ?>>Basic</option>
                    <option value="medium" <?= (isset($_POST['capdo']) && $_POST['capdo'] === 'medium') ? 'selected' : '' ?>>Medium</option>
                    <option value="hard" <?= (isset($_POST['capdo']) && $_POST['capdo'] === 'hard') ? 'selected' : '' ?>>Hard</option>
                </select>

                <button type="submit">Lọc</button>
            </form>
        </div>

        <!-- Nút thêm dữ liệu -->
        <div class="add-button-container">
            <button onclick="showAddModal()">Thêm Dữ Liệu</button>
        </div>
    </div>

    <!-- Bảng hiển thị -->
    <table>
        <thead>
            <tr>
                <?php if (!empty($columns)): ?>
                    <?php foreach ($columns as $column): ?>
                        <th><?php echo $column['Field']; ?></th>
                    <?php endforeach; ?>
                    <th>Thao Tác</th>
                <?php endif; ?>
            </tr>
        </thead>
        <tbody>
            <?php if (!empty($rows)): ?>
                <?php foreach ($rows as $row): ?>
                    <tr>
                        <?php foreach ($columns as $column): ?>
                            <td><?php echo htmlspecialchars($row[$column['Field']]); ?></td>
                        <?php endforeach; ?>
                        <td>
                            <button onclick="showEditModal(<?php echo htmlspecialchars(json_encode($row)); ?>)">Sửa</button>
                        </td>
                    </tr>
                <?php endforeach; ?>
            <?php else: ?>
                <tr>
                    <!-- <td colspan="<?php echo count($columns) + 1; ?>">Hãy chọn bảng</td> -->
                </tr>
            <?php endif; ?>
        </tbody>
    </table>
    <!-- Form Thêm Dữ Liệu -->
    <div class="modal-overlay" id="modal-overlay"></div>
    <div class="modal" id="modal">
        <form method="POST" id="modal-form">
            <input type="hidden" name="table" value="<?php echo $table; ?>">
            <input type="hidden" name="ma" id="form-id">
            <h2 id="modal-title">Thêm Dữ Liệu</h2>
            <?php foreach ($columns as $column): ?>
                <?php if ($column['Field'] !== 'ma'): ?>
                    <div class="form-group">
                        <label><?php echo $column['Field']; ?>:</label>
                        <input type="text" name="data[<?php echo $column['Field']; ?>]" id="form-<?php echo $column['Field']; ?>">
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
            <div class="modal-actions">
                <button type="submit" name="addRow">Thêm</button>
                <button type="button" onclick="closeModal()">Đóng</button>
            </div>
        </form>
    </div>

    <!-- Modal Sửa Dữ Liệu -->
    <div class="modal-overlay" id="modal-overlay-edit" style="display: none;"></div>
    <div class="modal" id="modal-edit" style="display: none;">
        <form method="POST" id="modal-edit-form">
            <input type="hidden" name="table" value="<?php echo $table; ?>">
            <input type="hidden" name="ma" id="edit-form-id">
            <h2 id="modal-edit-title">Sửa Dữ Liệu</h2>
            <?php foreach ($columns as $column): ?>
                <?php if ($column['Field'] !== 'ma'): ?>
                    <div class="form-group">
                        <label><?php echo $column['Field']; ?>:</label>
                        <input type="text" name="data[<?php echo $column['Field']; ?>]" id="edit-form-<?php echo $column['Field']; ?>">
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
            <div class="modal-actions">
                <button type="submit" name="editRow">Lưu</button>
                <button type="button" name="deleteRow" id="deleteRowButton">Xóa</button>
                <button type="button" onclick="closeEditModal()">Đóng</button>
            </div>
        </form>
    </div>

    <!-- Script -->
    <script>
        function navigateToNguoidung() {
            window.location.href = 'admin.php?table=nguoidung';
        }

        function navigateToKhoahoc() {
            window.location.href = 'admin.php?table=khoahoc';
        }

        function navigateToNhaccu() {
            window.location.href = 'admin.php?table=nhaccu';
        }

        function navigateToPhanhoi() {
            window.location.href = 'admin.php?table=phanhoi';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('modal-overlay').style.display = 'none';
        }

        function showEditModal(rowData) {
            document.getElementById('modal-edit').style.display = 'block';
            document.getElementById('modal-overlay-edit').style.display = 'block';
            document.getElementById('edit-form-id').value = rowData.ma;

            <?php foreach ($columns as $column): ?>
                if (rowData.hasOwnProperty('<?php echo $column['Field']; ?>')) {
                    const inputElement = document.getElementById('edit-form-<?php echo $column['Field']; ?>');
                    if (inputElement) {
                        inputElement.value = rowData['<?php echo $column['Field']; ?>'];
                    }
                }
            <?php endforeach; ?>
        }


        function logout() {
            fetch('../model/logout.php').then(response => {
                if (response.ok) window.location.href = '../public/index.php';
            }).catch(error => console.error('Error:', error));
        }

        function showAddModal() {
            document.getElementById('modal').style.display = 'block';
            document.getElementById('modal-overlay').style.display = 'block';
            document.getElementById('modal-form').reset();
            document.getElementById('form-id').value = '';
        }

        function showEditModal(rowData) {
            document.getElementById('modal-edit').style.display = 'block';
            document.getElementById('modal-overlay-edit').style.display = 'block';
            document.getElementById('edit-form-id').value = rowData.ma;

            <?php foreach ($columns as $column): ?>
                if (rowData.hasOwnProperty('<?php echo $column['Field']; ?>')) {
                    const inputElement = document.getElementById('edit-form-<?php echo $column['Field']; ?>');
                    if (inputElement) {
                        inputElement.value = rowData['<?php echo $column['Field']; ?>'];
                    }
                }
            <?php endforeach; ?>
        }

        function showModal(type) {
            if (type === 'edit') {
                document.getElementById('modal-edit').style.display = 'block';
                document.getElementById('modal-overlay-edit').style.display = 'block';
            } else if (type === 'add') {
                document.getElementById('modal').style.display = 'block';
                document.getElementById('modal-overlay').style.display = 'block';
            }
        }

        // Đóng form sửa
        function closeEditModal() {
            document.getElementById('modal-edit').style.display = 'none';
            document.getElementById('modal-overlay-edit').style.display = 'none';
        }

        document.getElementById('deleteRowButton').addEventListener('click', deleteRow);


        function deleteRow() {
            const id = document.getElementById('edit-form-id').value;
            const tableValue = '<?php echo $table ?? "nguoidung"; ?>'; // Use "nguoidung" if $table is null

            // Show confirmation dialog with SweetAlert
            Swal.fire({
                title: 'Bạn có chắc muốn xóa dữ liệu này không?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có, xóa!',
                cancelButtonText: 'Không, hủy',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch('admin.php?table=' + tableValue, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            body: new URLSearchParams({
                                deleteRow: true,
                                ma: id
                            })
                        })
                        .then(response => {
                            if (response.ok) {
                                // Show success message
                                Swal.fire({
                                    title: 'Thành công!',
                                    text: 'Dữ liệu đã được xóa.',
                                    icon: 'success',
                                    confirmButtonText: 'Đóng'
                                }).then(() => {
                                    location.reload();
                                });
                            } else {
                                // Show error message
                                Swal.fire({
                                    title: 'Lỗi!',
                                    text: 'Có lỗi khi xóa dữ liệu.',
                                    icon: 'error',
                                    confirmButtonText: 'Đóng'
                                });
                            }
                        })
                        .catch(error => {
                            console.error('Lỗi:', error);
                            Swal.fire({
                                title: 'Lỗi!',
                                text: 'Có lỗi khi xóa dữ liệu.',
                                icon: 'error',
                                confirmButtonText: 'Đóng'
                            });
                        });
                }
            });
        }

        // Hiển thị form lọc phù hợp với bảng
        const urlParams = new URLSearchParams(window.location.search);
        const table = urlParams.get('table');
        if (table === 'nguoidung') {
            document.getElementById('filter-form-nguoidung').style.display = 'block';
        } else if (table === 'khoahoc') {
            document.getElementById('filter-form-khoahoc').style.display = 'block';
        }
    </script>
</body>

</html>