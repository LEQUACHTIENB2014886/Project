<link rel="stylesheet" href="../public/css/admin.css">
<button onclick="showCourses()">Courses</button>
<button onclick="showUsers()">Users</button>
<div id="result"></div>

<!-- Form thêm/sửa/xóa khóa học -->
<div id="courseForm" style="display: none;">
    <h3>Add/Edit Course</h3>
    <form id="addEditForm" method="post">
        <input type="hidden" id="courseId" name="courseId">
        <label for="courseLevel">Course Level:</label>
        <input type="text" id="courseLevel" name="courseLevel" required><br>
        <label for="courseAnswer">Course Answer:</label>
        <input type="text" id="courseAnswer" name="courseAnswer" required><br>
        <label for="courseType">Course Type:</label>
        <input type="text" id="courseType" name="courseType" required><br>
        <label for="courseQuestion">Course Question:</label>
        <input type="text" id="courseQuestion" name="courseQuestion" required><br>
        <button type="submit" name="addCourse">Add Course</button>
        <button type="submit" name="editCourse">Save Changes</button>
        <button type="submit" name="deleteCourse">Delete Course</button>
        <button type="button" onclick="hideCourseForm()">Cancel</button>
    </form>
</div>

<!-- Form thêm/sửa/xóa người dùng -->
<div id="userForm" style="display: none;">
    <h3>Add/Edit User</h3>
    <form id="addEditUserForm" method="post">
        <input type="hidden" id="userId" name="userId">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <label for="level">Level:</label>
        <input type="text" id="level" name="level" required><br>
        <label for="role">Role:</label>
        <input type="text" id="role" name="role" required><br>
        <button type="submit" name="addUser">Add User</button>
        <button type="submit" name="editUser">Save Changes</button>
        <button type="submit" name="deleteUser">Delete User</button>
        <button type="button" onclick="hideUserForm()">Cancel</button>
    </form>
</div>

<script>
    function showCourses() {
        var courses = <?php echo json_encode($courses); ?>;
        var table = '<table><tr><th>Course ID</th><th>Course Level</th><th>Course Answer</th><th>Course Type</th><th>Course Question</th></tr>';
        for (var i = 0; i < courses.length; i++) {
            table += '<tr>';
            table += '<td>' + courses[i].course_id + '</td>';
            table += '<td>' + courses[i].course_level + '</td>';
            table += '<td>' + courses[i].course_answer + '</td>';
            table += '<td>' + courses[i].course_type + '</td>';
            table += '<td>' + courses[i].course_question + '</td>';
            table += '<td><button onclick="editCourse(' + courses[i].course_id + ')">Edit</button></td>';
            table += '</tr>';
        }
        table += '</table>';
        table += '<button onclick="showCourseForm()">Add Course</button>';
        document.getElementById('result').innerHTML = table;
    }

    function showUsers() {
        var users = <?php echo json_encode($users); ?>;
        var table = '<table><tr><th>ID</th><th>Username</th><th>Password</th><th>Level</th><th>Role</th></tr>';
        for (var i = 0; i < users.length; i++) {
            table += '<tr>';
            table += '<td>' + users[i].id + '</td>';
            table += '<td>' + users[i].username + '</td>';
            table += '<td>' + users[i].password + '</td>';
            table += '<td>' + users[i].level + '</td>';
            table += '<td>' + users[i].role + '</td>';
            table += '<td><button onclick="editUser(' + users[i].id + ')">Edit</button></td>';
            table += '</tr>';
        }
        table += '</table>';
        table += '<button onclick="showUserForm()">Add User</button>';
        document.getElementById('result').innerHTML = table;
    }

    function showCourseForm() {
        document.getElementById('courseForm').style.display = 'block';
        document.getElementById('courseId').value = '';
        document.getElementById('courseLevel').value = '';
        document.getElementById('courseAnswer').value = '';
        document.getElementById('courseType').value = '';
        document.getElementById('courseQuestion').value = '';
    }

    function hideCourseForm() {
        document.getElementById('courseForm').style.display = 'none';
    }

    function showUserForm() {
        document.getElementById('userForm').style.display = 'block';
        document.getElementById('userId').value = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('level').value = '';
        document.getElementById('role').value = '';
    }

    function hideUserForm() {
        document.getElementById('userForm').style.display = 'none';
    }

    function editCourse(courseId) {
        var courses = <?php echo json_encode($courses); ?>;
        var course = courses.find(function(c) {
            return c.course_id === courseId;
        });

        if (course) {
            document.getElementById('courseForm').style.display = 'block';
            document.getElementById('courseId').value = course.course_id;
            document.getElementById('courseLevel').value = course.course_level;
            document.getElementById('courseAnswer').value = course.course_answer;
            document.getElementById('courseType').value = course.course_type;
            document.getElementById('courseQuestion').value = course.course_question;
        }
    }

    function editUser(userId) {
        var users = <?php echo json_encode($users); ?>;
        var user = users.find(function(u) {
            return u.id === userId;
        });

        if (user) {
            document.getElementById('userForm').style.display = 'block';
            document.getElementById('userId').value = user.id;
            document.getElementById('username').value = user.username;
            document.getElementById('password').value = user.password;
            document.getElementById('level').value = user.level;
            document.getElementById('role').value = user.role;
        }
    }
</script>