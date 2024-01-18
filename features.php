<?php
include './views/header.php';
?>

<div class="container instrument fadeHomepage">
    <div class="box">
        <div class="content">
            <h2>Guitar</h2>
            <p>Chơi guitar ảo và hình dung nốt, hợp âm và âm giai.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/guitar.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Piano</h2>
            <p><a class="tools" href="./piano.php">Chơi piano ảo và hình dung nốt, hợp âm và âm giai.</a></p>
        </div>
        <div class="image">
            <img src="./image/piano.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Bass-guitar</h2>
            <p>Chơi guitar bass ảo và hình dung nốt, âm giai<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/bass-guitar.jpg">
        </div>
    </div>

    <div class="box">
        <div class="content">
            <h2>Trống</h2>
            <p>Chơi trống ảo và thực hành tập chơi các nhịp trống.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/drums.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Trống điện tử</h2>
            <p>Sáng tạo và nghe thử giai điệu trống của bạn.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/drum-machine.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Ứng dụng Đệm Hợp âm</h2>
            <p>Tạo ra các chùm hợp âm và nhạc nền.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/chord-player.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Bài hát luyện quãng</h2>
            <p>Khám phá những bài hát giúp xác định quãng<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/interval-song-chart.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Máy đếm nhịp</h2>
            <p>Cải thiện khả năng vào nhịp khi chơi nhạc của bạn.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/metronome.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Giấy chép nhạc</h2>
            <p>In bản thảo cho nhiều loại nhạc cụ.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/staff-paper.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Thuật ngữ âm nhạc</h2>
            <p>Học những thuật ngữ âm nhạc phổ biến.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/tempo-markings.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Công cụ đo âm</h2>
            <p>Công cụ đo âm trực tuyến cho nhạc cụ.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/tuner.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Tìm kiếm hợp âm</h2>
            <p>Tìm kiếm hợp âm trên các nhạc cụ và khuông nhạc.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/chord-finder.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Tìm kiếm quãng</h2>
            <p>Tìm kiếm quãng trên các nhạc cụ và khuông nhạc.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/interval-finder.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Tìm kiếm nốt</h2>
            <p>Tìm các nốt nhạc trên các nhạc cụ và khuông nhạc.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/note-finder.jpg">
        </div>
    </div>
    <div class="box">
        <div class="content">
            <h2>Tìm kiếm âm giai</h2>
            <p>Tìm kiếm âm giai trên đàn các nhạc cụ khuông nhạc.<a href="#"></a></p>
        </div>
        <div class="image">
            <img src="./image/scale-finder.jpg">
        </div>
    </div>

</div><br><br><br>
<style>
    .instrument {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 15px;
        margin-top: -600px;
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
        height: 100%;
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
        text-decoration: underline;
        color: inherit;
    }

</style>
<?php
include './views/footer.php';
?>