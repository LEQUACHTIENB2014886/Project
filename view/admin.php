<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <title>ADMIN</title>
</head>

<body>
    <h1>ADMIN</h1>
    <div class="horizontal-container">
        <div class="item">
            <button id="coursesButton" onclick="navigateToCourses()">Bảng khóa học</button>
        </div>
        <div class="item">
            <button id="usersButton" onclick="navigateToUsers()">Bảng Người dùng</button>
        </div>

        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"><button onclick="logout()">Logout</button></div>
    </div>

    <div class="horizontal-container">
        <div class="item">
            <!-- Lọc khóa học -->
            <form method="POST" id="filter-form-courses">
                <label for="course_type">Loại Khóa Học:</label>
                <select name="course_type" id="course_type">
                    <option value="">Tất cả</option>
                    <option value="note" <?php echo ($courseTypeFilter == 'note') ? 'selected' : ''; ?>>Note</option>
                    <option value="chord" <?php echo ($courseTypeFilter == 'chord') ? 'selected' : ''; ?>>Chord</option>
                    <option value="melody" <?php echo ($courseTypeFilter == 'melody') ? 'selected' : ''; ?>>Melody</option>
                </select>
                <label for="course_level">Cấp Độ:</label>
                <select name="course_level" id="course_level">
                    <option value="">Tất cả</option>
                    <option value="basic" <?php echo ($courseLevelFilter == 'basic') ? 'selected' : ''; ?>>Basic</option>
                    <option value="medium" <?php echo ($courseLevelFilter == 'medium') ? 'selected' : ''; ?>>Medium</option>
                    <option value="hard" <?php echo ($courseLevelFilter == 'hard') ? 'selected' : ''; ?>>Hard</option>
                </select>
                <button type="submit">Lọc</button>
            </form>
            <form method="POST" id="filter-form-users">
    <label for="level">Tiến độ người dùng:</label>
    <select name="level" id="level">
        <option value="">Tất cả</option>
        <option value="1,0,0" <?php echo ($levelFilter == '1,0,0') ? 'selected' : ''; ?>>1,0,0</option>
        <option value="1,1,0" <?php echo ($levelFilter == '1,1,0') ? 'selected' : ''; ?>>1,1,0</option>
        <option value="1,1,1" <?php echo ($levelFilter == '1,1,1') ? 'selected' : ''; ?>>1,1,1</option>
    </select>
    <button type="submit">Lọc</button>
</form>

        </div>
        <div class="item"><button onclick="showModal('add')">Thêm Dữ Liệu</button></div>
    </div>


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

    <!-- Form Thêm và Sửa -->
    <div class="modal-overlay" id="modal-overlay"></div>
    <div class="modal" id="modal">
        <form method="POST" id="modal-form">
            <input type="hidden" name="table" value="<?php echo $table; ?>">
            <input type="hidden" name="id" id="form-id">
            <h2 id="modal-title">Thêm Dữ Liệu</h2>
            <?php foreach ($columns as $column): ?>
                <?php if ($column['Field'] !== 'id'): ?>
                    <div class="form-group">
                        <label><?php echo $column['Field']; ?>:</label>
                        <input type="text" name="data[<?php echo $column['Field']; ?>]" id="form-<?php echo $column['Field']; ?>" required>
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
            <div class="modal-actions">
                <button type="submit" name="addRow" id="modal-submit">Lưu</button>
                <button type="button" id="modal-delete">Xóa</button>
                <button type="button" id="modal-close" onclick="closeModal()">Đóng</button>
            </div>
        </form>
    </div>

    <script>
        document.getElementById('filter-form-courses').style.display = 'none';
        document.getElementById('filter-form-users').style.display = 'none';

        document.getElementById('coursesButton').onclick = function() {
            navigateToCourses();
        };

        document.getElementById('usersButton').onclick = function() {
            navigateToUsers();
        };

        function navigateToCourses() {
            // Chuyển tới bảng khóa học và đảm bảo form lọc hiển thị
            window.location.href = 'admin.php?table=courses';
        }

        function navigateToUsers() {
            // Chuyển tới bảng người dùng và đảm bảo form lọc ẩn đi
            window.location.href = 'admin.php?table=users';
        }

        function checkPageForFilter() {
            // Kiểm tra giá trị của tham số "table" trong URL
            var urlParams = new URLSearchParams(window.location.search);
            var table = urlParams.get('table');

            // Nếu table=courses, hiển thị form lọc, nếu không, ẩn form lọc
            if (table === 'courses') {
                document.getElementById('filter-form-courses').style.display = 'block';
                document.getElementById('filter-form-users').style.display = 'none';
            }
            if (table === 'users') {
                document.getElementById('filter-form-courses').style.display = 'none';
                document.getElementById('filter-form-users').style.display = 'block';
            }

        }

        window.onload = checkPageForFilter;

        function showModal(type) {
            document.getElementById('modal').style.display = 'block';
            document.getElementById('modal-overlay').style.display = 'block';
            document.getElementById('modal-title').textContent = type === 'add' ? 'Thêm Dữ Liệu' : 'Sửa Dữ Liệu';
            document.getElementById('modal-submit').name = type === 'add' ? 'addRow' : 'editRow';
            document.getElementById('modal-delete').style.display = type === 'edit' ? 'inline' : 'none';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('modal-overlay').style.display = 'none';
        }

        function showEditModal(rowData) {
            showModal('edit');
            document.getElementById('form-id').value = rowData.id;
            <?php foreach ($columns as $column): ?>
                document.getElementById('form-<?php echo $column['Field']; ?>').value = rowData['<?php echo $column['Field']; ?>'];
            <?php endforeach; ?>
            document.getElementById('modal-delete').onclick = function() {
                if (confirm('Bạn có chắc chắn muốn xóa không?')) {
                    const form = document.getElementById('modal-form');
                    const deleteInput = document.createElement('input');
                    deleteInput.type = 'hidden';
                    deleteInput.name = 'deleteRow';
                    deleteInput.value = '1';
                    form.appendChild(deleteInput);
                    form.submit();
                }
            };
        }

        document.getElementById('modal-overlay').onclick = function() {
            document.getElementById('modal').style.display = 'none';
            document.getElementById('modal-overlay').style.display = 'none';
        };

        function logout() {
            fetch('../model/logout.php')
                .then(response => {
                    if (response.ok) {
                        window.location.href = '../public/index.php';
                    } else {
                        console.error('Logout failed');
                        window.location.href = '../public/index.php'
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    </script>
</body>

</html>