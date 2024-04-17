
<?php
    shuffle($courses);
    foreach ($courses as $course) {
        $imagePath = $course['pic'];
        echo '<img src="' . $imagePath . '" alt="Ảnh khóa học"><br>';
    }
?>
