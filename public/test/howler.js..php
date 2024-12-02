<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"></script>
</head>

<body>
    <button onclick="playSound()">Play Sound</button>
    <script>
        var sound = new Howl({
            src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
            volume: 0.5, // Độ lớn
            loop: true, // Chế độ lặp lại
            onplay: function() {
                console.log('Đang phát âm thanh!');
            }
        });

        function playSound() {
            sound.play();
        }
    </script>
</body>

</html>


