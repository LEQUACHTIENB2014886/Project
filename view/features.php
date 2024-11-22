<?php
include "../model/db.php";

// Lấy dữ liệu từ bảng `features`
$query = "SELECT feature_name, feature_note, feature_picture, feature_path FROM features";
$stmt = $conn->prepare($query);
$stmt->execute();
$features = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<script>
    function redirectToPage(url) {
        window.location.href = url;
    }
</script>
<br>
<div class="container instrument fadeHomepage" style="margin-top:0px">
    <?php foreach ($features as $feature): ?>
        <div class="box" onclick="redirectToPage('<?= htmlspecialchars($feature['feature_path']) ?>')">
            <div class="content">
                <h2 class="text-dark"><?= htmlspecialchars($feature['feature_name']) ?></h2>
                <p><a class="tools"><?= htmlspecialchars($feature['feature_note']) ?></a></p>
            </div>
            <div class="image">
                <img src="<?= htmlspecialchars($feature['feature_picture']) ?>" alt="<?= htmlspecialchars($feature['feature_name']) ?>">
            </div>
        </div>
    <?php endforeach; ?>
</div>
<br>