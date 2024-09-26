<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>
    <h1>Guitar Chords</h1>
    <button onclick="playSounds()">Play</button>
    <button onclick="stopSounds()">Stop</button>

    <script>
        var audioFiles = [
            '../chords_audio/C.m4a',
            '../chords_audio/G.m4a',
            '../chords_audio/Am.m4a',
            '../chords_audio/Em.m4a',
            '../chords_audio/F.m4a',
            '../chords_audio/C.m4a',
            '../chords_audio/Dm.m4a',
            '../chords_audio/G.m4a',
        ];
        var currentIndex = 0;
        var timeoutId;

        function playSound(index) {
            var audio = new Audio(audioFiles[index]);
            audio.play();
        }

        function playSounds() {
            playSound(currentIndex);
            currentIndex = (currentIndex + 1) % audioFiles.length;
            timeoutId = setTimeout(playSounds, 1800); // Đợi 2 giây trước khi chơi âm thanh tiếp theo
        }

        function stopSounds() {
            clearTimeout(timeoutId);
        }

    </script>
</body>

</html>