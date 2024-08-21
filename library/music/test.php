<!DOCTYPE html>
<html>

<head>
    <title>Tone.js </title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.26/Tone.js"></script>
</head>

<body>
    <button id="playChordsButton">Phát chuỗi hợp âm</button>
    <script>
        const chordMap = {
            "C": ["C4", "E4", "G4"],
            "Cmaj7": ["C4", "E4", "G4", "B4"],
            "C7": ["C4", "E4", "G4", "Bb4"],
            "Cm": ["C4", "Eb4", "G4"],
            "Cm7": ["C4", "Eb4", "G4", "Bb4"],
            "Csus4": ["C4", "F4", "G4"],
            "D": ["D4", "F#4", "A4"],
            "Dmaj7": ["D4", "F#4", "A4", "C#4"],
            "D7": ["D4", "F#4", "A4", "C4"],
            "Dm": ["D4", "F4", "A4"],
            "Dm7": ["D4", "F4", "A4", "C4"],
            "Dsus4": ["D4", "G4", "A4"],
            "E": ["E4", "G#4", "B4"],
            "Emaj7": ["E4", "G#4", "B4", "D#4"],
            "E7": ["E4", "G#4", "B4", "D4"],
            "Em": ["E4", "G4", "B4"],
            "Em7": ["E4", "G4", "B4", "D4"],
            "Esus4": ["E4", "A4", "B4"],
            "F": ["F4", "A4", "C4"],
            "Fmaj7": ["F4", "A4", "C4", "E4"],
            "F7": ["F4", "A4", "C4", "Eb4"],
            "Fm": ["F4", "Ab4", "C4"],
            "Fm7": ["F4", "Ab4", "C4", "Eb4"],
            "Fsus4": ["F4", "Bb4", "C4"],
            "G": ["G4", "B4", "D4"],
            "Gmaj7": ["G4", "B4", "D4", "F#4"],
            "G7": ["G4", "B4", "D4", "F4"],
            "Gm": ["G4", "Bb4", "D4"],
            "Gm7": ["G4", "Bb4", "D4", "F4"],
            "Gsus4": ["G4", "C4", "D4"],
            "A": ["A4", "C#4", "E4"],
            "Amaj7": ["A4", "C#4", "E4", "G#4"],
            "A7": ["A4", "C#4", "E4", "G4"],
            "Am": ["A4", "C4", "E4"],
            "Am7": ["A4", "C4", "E4", "G4"],
            "Asus4": ["A4", "D4", "E4"],
            "B": ["B4", "D#4", "F#4"],
            "Bmaj7": ["B4", "D#4", "F#4", "A#4"],
            "B7": ["B4", "D#4", "F#4", "A4"],
            "Bm": ["B4", "D4", "F#4"],
            "Bm7": ["B4", "D4", "F#4", "A4"],
            "Bsus4": ["B4", "E4", "F#4"]
        };

        const playChordsButton = document.getElementById('playChordsButton');
        playChordsButton.addEventListener('click', playChordSequence);

        let chordsToPlay = [];
        let currentChordIndex = 0;

        function playChordSequence() {
            const inputChords = prompt("Nhập chuỗi hợp âm (C Cmaj7 D ...):");
            chordsToPlay = inputChords.split(" ");

            playNextChord();
        }

        function playNextChord() {
            if (currentChordIndex < chordsToPlay.length) {
                const chordName = chordsToPlay[currentChordIndex];
                const chord = chordMap[chordName];

                if (chord) {
                    playChord(chord);
                    currentChordIndex++;
                } else {
                    alert("Hợp âm " + chordName + " không hợp lệ!");
                }
            }
            //   else {
            //     alert("Đã phát xong chuỗi hợp âm.");
            //     currentChordIndex = 0;
            //   }
        }

        function playChord(chordNotes) {
            const sampler = new Tone.Sampler({
                urls: {
                    "C4": "C4.mp3",
                    "D#4": "Ds4.mp3",
                    "F#4": "Fs4.mp3",
                    "A4": "A4.mp3",
                },
                release: 1,
                baseUrl: "https://tonejs.github.io/audio/salamander/",
            }).toDestination();

            Tone.loaded().then(() => {
                chordNotes.forEach((note) => {
                    sampler.triggerAttackRelease(note, 4);
                });
                setTimeout(playNextChord, 1800); // Chờ n giây trước khi chuyển sang hợp âm tiếp theo
            });
        }
    </script>
</body>

</html>