<!DOCTYPE html>
<html>
<head>
  <title>Chạy mã Tone.js với nhiều hợp âm</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.26/Tone.js"></script>
</head>
<body>
<button id="playChordsButton">Phát chuỗi hợp âm</button>
  <script>
    const chordMap = {
      "C": ["C4", "E4", "G4"],
      "Cmaj7": ["C4", "E4", "G4", "B4"],
      "C7": ["C4", "E4", "G4", "Bb4"],
      "Csus4": ["C4", "F4", "G4"],
      "D": ["D4", "F#4", "A4"],
      "Dmaj7": ["D4", "F#4", "A4", "C#5"],
      "D7": ["D4", "F#4", "A4", "C5"],
      "Dsus4": ["D4", "G4", "A4"],
      "E": ["E4", "G#4", "B4"],
      "Emaj7": ["E4", "G#4", "B4", "D#5"],
      "E7": ["E4", "G#4", "B4", "D5"],
      "Esus4": ["E4", "A4", "B4"],
      "F": ["F4", "A4", "C5"],
      "Fmaj7": ["F4", "A4", "C5", "E5"],
      "F7": ["F4", "A4", "C5", "Eb5"],
      "Fsus4": ["F4", "Bb4", "C5"],
      "G": ["G4", "B4", "D5"],
      "Gmaj7": ["G4", "B4", "D5", "F#5"],
      "G7": ["G4", "B4", "D5", "F5"],
      "Gsus4": ["G4", "C5", "D5"],
      "A": ["A4", "C#5", "E5"],
      "Amaj7": ["A4", "C#5", "E5", "G#5"],
      "A7": ["A4", "C#5", "E5", "G5"],
      "Asus4": ["A4", "D5", "E5"],
      "B": ["B4", "D#5", "F#5"],
      "Bmaj7": ["B4", "D#5", "F#5", "A#5"],
      "B7": ["B4", "D#5", "F#5", "A5"],
      "Bsus4": ["B4", "E5", "F#5"]
    };

    const playChordsButton = document.getElementById('playChordsButton');
    playChordsButton.addEventListener('click', playChordSequence);

    function playChordSequence() {
      const inputChord = prompt("Nhập hợp âm (C, Cmaj7, C7, Csus4, D, Dmaj7, D7, Dsus4, E, Emaj7, E7, Esus4, F, Fmaj7, F7, Fsus4, G, Gmaj7, G7, Gsus4, A, Amaj7, A7, Asus4, B, Bmaj7, B7, Bsus4):");
      const chord = chordMap[inputChord];

      if (chord) {
        playChord(chord);
      } else {
        alert("Hợp âm không hợp lệ!");
      }
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