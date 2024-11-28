<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Máy Đánh Nhịp (Metronome)</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.37/Tone.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        #bpm {
            width: 60px;
            font-size: 18px;
        }
        button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 18px;
        }
    </style>
</head>
<body>

    <h1>Máy Đánh Nhịp</h1>
    <p>Nhập nhịp độ (BPM):</p>
    <input type="number" id="bpm" value="120" min="40" max="240">
    <br>
    <button id="startBtn">Bắt đầu</button>
    <button id="stopBtn">Dừng</button>

    <script>
        let isPlaying = false;
        let loop;

        // Sử dụng tệp âm thanh từ nguồn trực tuyến có hỗ trợ CORS
        const metronomeSound = new Tone.Player({
            url: "https://cdn.jsdelivr.net/gh/shapeshed/tonejs-tutorial/assets/click.mp3",
            autostart: false
        }).toDestination();

        document.getElementById('startBtn').addEventListener('click', async () => {
            if (!isPlaying) {
                await Tone.start(); // Khởi động AudioContext khi có tương tác người dùng
                isPlaying = true;

                // Lấy nhịp độ từ input
                const bpm = document.getElementById('bpm').value;
                Tone.Transport.bpm.value = parseInt(bpm);

                // Khởi động Loop phát âm thanh theo nhịp
                loop = new Tone.Loop((time) => {
                    metronomeSound.start(time);
                }, "4n").start(0);

                Tone.Transport.start();
            }
        });

        document.getElementById('stopBtn').addEventListener('click', () => {
            if (isPlaying) {
                isPlaying = false;
                Tone.Transport.stop();
                loop.stop();
            }
        });
    </script>

</body>
</html>
