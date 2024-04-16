<!DOCTYPE html>
<html>
<head>
  <title>Chạy mã Tone.js với nhiều hợp âm</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.26/Tone.js"></script>
</head>
<body>
  <button id="playChordsButton">Phát chuỗi hợp âm</button>

  <script>
    const chordSequence = [
      ["C4", "E4", "G4"],
      ["D4", "F#4", "A4"],
      ["B3", "D4", "F#4"],
      ["E4", "G4", "B4"],
      ["C4", "E4", "G4"],
      ["D4", "F#4", "A4"],
      ["G4", "B4", "D5"],
      ["G4", "F4", "B4", "D5"]
    ];

    const playChordsButton = document.getElementById('playChordsButton');
    playChordsButton.addEventListener('click', playChordSequence);

    function playChordSequence() {
      let delay = 0;

      chordSequence.forEach((chord, index) => {
        setTimeout(() => {
          playChord(chord);
        }, delay);
        
        delay += 1800; // Chờ 2.0 giây trước khi chuyển sang hợp âm tiếp theo
      });
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
      });
    }
  </script>
</body>
</html>