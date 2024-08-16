<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>
    <h1>Guitar Chords</h1>
    <button onclick="playSounds()">Play</button>

    <script>
        var audioFiles = [
            '../chords_audio/C.m4a',
            '../chords_audio/D.m4a',
            '../chords_audio/Bm.m4a',
            '../chords_audio/Em.m4a',
            '../chords_audio/C.m4a',
            '../chords_audio/D.m4a',
            '../chords_audio/G.m4a',
            '../chords_audio/G7.m4a',
            '../chords_audio/C.m4a',
            '../chords_audio/D.m4a',
            '../chords_audio/Bm.m4a',
            '../chords_audio/Em.m4a',
            '../chords_audio/C.m4a',
            '../chords_audio/D.m4a',
            '../chords_audio/Esus4.m4a',
            '../chords_audio/E.m4a'
        ];
        var currentIndex = 0;

        function playSound(index) {
            var audio = new Audio(audioFiles[index]);
            audio.play();
        }

        function playSounds() {
            if (currentIndex < audioFiles.length) {
                playSound(currentIndex);
                currentIndex++;
                setTimeout(playSounds, 2500); // Chờ 2 giây trước khi phát âm thanh tiếp theo
            }
        }
    </script>
</body>

</html>