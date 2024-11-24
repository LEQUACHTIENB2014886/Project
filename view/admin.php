<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <title>Quản lý Hệ Thống</title>
</head>

<body>
    <h1>Quản lý Hệ Thống</h1>

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
            <button onclick="logout()">Đăng Xuất</button>
        </div>
    </div>

    <!-- Bộ lọc -->
   <!-- Bộ lọc -->
<div class="horizontal-container">
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
                    <td colspan="<?php echo count($columns) + 1; ?>">Chưa có dữ liệu</td>
                </tr>
            <?php endif; ?>
        </tbody>
    </table>

    <!-- Form Thêm và Sửa -->
    <div class="modal-overlay" id="modal-overlay"></div>
    <div class="modal" id="modal">
        <form method="POST" id="modal-form">
            <input type="hidden" name="table" value="<?php echo $table; ?>">
            <input type="hidden" name="id" id="form-id">
            <h2 id="modal-title">Thêm/Sửa Dữ Liệu</h2>
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
                <button type="submit" name="editRow">Sửa</button>
                <button type="button" onclick="closeModal()">Đóng</button>
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

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('modal-overlay').style.display = 'none';
        }

        function showEditModal(rowData) {
            document.getElementById('modal').style.display = 'block';
            document.getElementById('modal-overlay').style.display = 'block';
            document.getElementById('form-id').value = rowData.ma;
            <?php foreach ($columns as $column): ?>
                document.getElementById('form-<?php echo $column['Field']; ?>').value = rowData['<?php echo $column['Field']; ?>'];
            <?php endforeach; ?>
        }

        function logout() {
            fetch('../model/logout.php').then(response => {
                if (response.ok) window.location.href = '../public/index.php';
            }).catch(error => console.error('Error:', error));
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
