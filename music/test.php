<!DOCTYPE html>
<html>
<head>
  <title>Chạy mã Tone.js với nhiều hợp âm</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.26/Tone.js"></script>
</head>
<body>
  <button id="playCButton">Phát hợp âm C</button>
  <button id="playDButton">Phát hợp âm D</button>
  <button id="playBmButton">Phát hợp âm Bm</button>
  <button id="playEmButton">Phát hợp âm Em</button>
  <button id="playGButton">Phát hợp âm G</button>

  <script>
    // Gán sự kiện "click" cho các nút
    const playCButton = document.getElementById('playCButton');
    playCButton.addEventListener('click', playChord.bind(null, ["C4", "E4", "G4"]));

    const playDButton = document.getElementById('playDButton');
    playDButton.addEventListener('click', playChord.bind(null, ["D4", "F#4", "A4"]));

    const playBmButton = document.getElementById('playBmButton');
    playBmButton.addEventListener('click', playChord.bind(null, ["B3", "D4", "F#4"]));

    const playEmButton = document.getElementById('playEmButton');
    playEmButton.addEventListener('click', playChord.bind(null, ["E4", "G4", "B4"]));

    const playGButton = document.getElementById('playGButton');
    playGButton.addEventListener('click', playChord.bind(null, ["G4", "B4", "D5"]));

    // Hàm chạy mã Tone.js với hợp âm
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