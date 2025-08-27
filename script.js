// Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Music Play Button
const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("audio");
let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playBtn.textContent = "⏸ Pause Preview";
  } else {
    audio.pause();
    playBtn.textContent = "▶ Play Preview";
  }
  isPlaying = !isPlaying;
});
