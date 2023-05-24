var audio = document.getElementById("myAudio");

function playAudio() {
  audio.currentTime = 13;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}
