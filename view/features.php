<script>
    function redirectToPage(url) {
        window.location.href = url;
    }
</script>
<br>
<div class="container instrument fadeHomepage" style="margin-top:0px">
    <?php foreach ($nhaccu as $feature): ?>
        <div class="box" onclick="redirectToPage('<?= htmlspecialchars($feature['duongdan']) ?>')">
            <div class="content">
                <h2 class="text-dark"><?= htmlspecialchars($feature['ten']) ?></h2>
                <p><a class="tools"><?= htmlspecialchars($feature['thongtin']) ?></a></p>
            </div>
            <div class="image">
                <img src="<?= htmlspecialchars($feature['hinhanh']) ?>" alt="<?= htmlspecialchars($feature['ten']) ?>">
            </div>
        </div>
    <?php endforeach; ?>
</div>
<br>