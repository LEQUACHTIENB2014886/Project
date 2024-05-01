<link rel="stylesheet" href="../public/css/admin.css">
<button onclick="showCourses()">Courses</button>
<button onclick="showUsers()">Users</button>
<div id="result"></div>
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
            table += '</tr>';
        }
        table += '</table>';
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
            table += '</tr>';
        }
        table += '</table>';
        document.getElementById('result').innerHTML = table;
    }
</script>