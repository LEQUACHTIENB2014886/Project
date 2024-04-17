<?php
$query = "SELECT * FROM courses WHERE course_level = 'basic'";
$stmt = $conn->query($query);
$courses = $stmt->fetchAll(PDO::FETCH_ASSOC);
