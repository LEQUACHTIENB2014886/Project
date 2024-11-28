<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://cdn.jsdelivr.net/npm/tone@14.8.35/build/Tone.min.js"></script>
</head>
<body>
    <button id="playButton">Phát Âm Thanh</button>
    <button id="stopButton">Dừng Âm Thanh</button>
    <script>
        let sequence;
        document.getElementById('playButton').addEventListener('click', function() {
            const synth = new Tone.Synth({
                oscillator: {
                    type: "sine" // giai điệu: square, sawtooth, triangle, sine
                },
                envelope: {
                    attack: 0.1, // Thời gian để âm thanh bắt đầu rõ ràng
                    decay: 0.1, // Thời gian âm thanh giảm dần
                    sustain: 0.7, // Độ dài âm thanh duy trì
                    release: 1.2 // Thời gian âm thanh tắt sau khi rời tay
                }
            }).toDestination();
            const notes = ["F4", "G4", "A4", "B4"]; // Các nốt được phát lần lượt theo thứ tự
            sequence = new Tone.Sequence((time, note) => {
                synth.triggerAttackRelease(note, "8n", time);
            }, notes, "4n");

            Tone.Transport.start();
            sequence.start();
        });
        document.getElementById('stopButton').addEventListener('click', function() {
            Tone.Transport.stop();
            sequence.stop();
        });
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://cdn.jsdelivr.net/npm/tone@14.8.35/build/Tone.min.js"></script>
</head>

<body>
    <button class="noteButton" data-note="C4">C4</button>
    <button class="noteButton" data-note="D4">D4</button>
    <button class="noteButton" data-note="E4">E4</button>
    <button class="noteButton" data-note="F4">F4</button>

    <script>
        const synth = new Tone.Synth({
            oscillator: {
                type: "sawtooth" // Chọn kiểu sóng, ví dụ: square, sawtooth, triangle, sine
            },
            envelope: {
                attack: 0.1, // Thời gian để âm thanh bắt đầu rõ ràng
                decay: 0.1, // Thời gian âm thanh giảm dần
                sustain: 0.7, // Độ dài âm thanh duy trì
                release: 1.2 // Thời gian âm thanh tắt sau khi rời tay
            }
        }).toDestination();

        const buttons = document.querySelectorAll(".noteButton");
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const note = this.getAttribute("data-note");
                synth.triggerAttackRelease(note, "8n");
            });
        });
    </script>
</body>

</html>