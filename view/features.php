<!-- <link rel="stylesheet" href="../public/css/features.css"> -->
<script>
    function redirectToPage(url) {
        window.location.href = url;
    }
</script>
<div class="container instrument fadeHomepage" style="margin-top:0px">
    <div class="box" onclick="redirectToPage('../public/guitar.php')">
        <div class="content">
            <h2 class="text-dark">Guitar</h2>
            <p><a class="tools">Chơi guitar ảo và hình dung nốt, hợp âm và âm giai.</a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/guitar.jpg">
        </div>
    </div>

    <div class="box" onclick="redirectToPage('../public/piano.php')">
        <div class="content">
            <h2 class="text-dark">Piano</h2>
            <p><a class="tools">Chơi piano ảo và hình dung nốt, hợp âm và âm giai.</a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/piano.jpg">
        </div>
    </div>

    <div class="box" onclick="redirectToPage('../public/chords_find.php')">
        <div class="content">
            <h2>Tìm kiếm hợp âm</h2>
            <p>Tìm kiếm hợp âm trên các nhạc cụ và khuông nhạc.<a href="../public/chords_find.php"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/tuner.jpg">
        </div>
    </div>

    <div class="box" onclick="redirectToPage('../public/interval-finder.php')">
        <div class="content">
            <h2>Tìm kiếm quãng</h2>
            <p>Tìm kiếm quãng trên các nhạc cụ và khuông nhạc.<a href="../public/interval-finder.php"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/interval-finder.jpg">
        </div>
    </div>

    <div class="box" onclick="redirectToPage('../public/drums.php')">
        <div class="content">
            <h2>Trống</h2>
            <p>Chơi trống ảo và thực hành tập chơi các nhịp trống.<a href="../public/drums.php"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/drums.jpg">
        </div>
    </div>

    <div class="box" onclick="redirectToPage('../public/drum-machine.php')">
        <div class="content">
            <h2>Trống điện tử</h2>
            <p>Sáng tạo và nghe thử giai điệu trống của bạn.<a href="../public/drum-machine.php"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/drum-machine.jpg">
        </div>
    </div>

    <div class="box" onclick="redirectToPage('../public/chord_player.php')">
        <div class="content">
            <h2>Ứng dụng Đệm Hợp âm</h2>
            <p>Tạo ra các chùm hợp âm và nhạc nền.<a href="../public/chord_player.php"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/chord-player.jpg">
        </div>
    </div>

    <div class="box">
        <div class="content">
            <h2>Bass-guitar</h2>
            <p>Chơi guitar bass ảo và hình dung nốt, âm giai<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/bass-guitar.jpg">
        </div>
    </div>


    <div class="box">
        <div class="content">
            <h2>Bài hát luyện quãng</h2>
            <p>Khám phá những bài hát giúp xác định quãng<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/interval-song-chart.jpg">
        </div>
    </div>

    <div class="box">
        <div class="content">
            <h2>Máy đếm nhịp</h2>
            <p>Cải thiện khả năng vào nhịp khi chơi nhạc của bạn.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/metronome.jpg">
        </div>
    </div>

    <div class="box">
        <div class="content">
            <h2>Giấy chép nhạc</h2>
            <p>In bản thảo cho nhiều loại nhạc cụ.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/staff-paper.jpg">
        </div>
    </div>

    <div class="box">
        <div class="content">
            <h2>Thuật ngữ âm nhạc</h2>
            <p>Học những thuật ngữ âm nhạc phổ biến.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/tempo-markings.jpg">
        </div>
    </div>

    <div class="box">
        <div class="content">
            <h2>Công cụ đo âm</h2>
            <p>Công cụ đo âm trực tuyến cho nhạc cụ.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/chord-finder.jpg">
        </div>
    </div>

    <div class="box">
        <div class="content">
            <h2>Tìm kiếm nốt</h2>
            <p>Tìm các nốt nhạc trên các nhạc cụ và khuông nhạc.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/note-finder.jpg">
        </div>
    </div>

    <div class="box">
        <div class="content">
            <h2>Tìm kiếm âm giai</h2>
            <p>Tìm kiếm âm giai trên đàn các nhạc cụ khuông nhạc.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="../library/image/features/scale-finder.jpg">
        </div>
    </div>

</div><br><br>
<style>
    .box {
        transition: transform 0.3s;
    }

    .box:hover {
        transform: scale(1.025);
    }
/* features */
.instrument {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
    /* margin-top: -600px; */
}

.box {
    width: calc(33.33% - 10px);
    background-color: #f3f3f3;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.content {
    text-align: center;
    padding: 15px;
}

.image {
    text-align: center;
    padding: 10px;
    /* height: 100%; */
}

.image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.tools {
    text-decoration: none;
    color: inherit;
}

.tools:hover {
    color: inherit;
}
/* features */
</style>