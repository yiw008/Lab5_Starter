// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();
  var horn = document.getElementById("horn-select");
  var images = document.getElementsByTagName("img");
  var btn = document.getElementsByTagName("button");
  var audio = document.getElementsByTagName("audio");
  var volumeControl = document.getElementById("volume");

  horn.addEventListener('input', function () {
    if (horn.options[horn.selectedIndex].text == "Air Horn") {
      images[0].src = "/assets/images/air-horn.svg";
    } else if (horn.options[horn.selectedIndex].text == "Car Horn") {
      images[0].src = "/assets/images/car-horn.svg";
    } else if (horn.options[horn.selectedIndex].text == "Party Horn") {
      images[0].src = "/assets/images/party-horn.svg";
    } else {
      images[0].src = "/assets/images/no-image.png";
    }
  })



  volumeControl.addEventListener('click', function () {

    if (volumeControl.value == 0) {
      images[1].src = "/assets/icons/volume-level-0.svg";

    } else if (volumeControl.value >= 1 && volumeControl.value < 33) {
      images[1].src = "/assets/icons/volume-level-1.svg";
    } else if (volumeControl.value >= 33 && volumeControl.value < 67) {
      images[1].src = "/assets/icons/volume-level-2.svg";
    } else { images[1].src = "/assets/icons/volume-level-3.svg"; }
    audio[0].volume = volumeControl.value / 100;
  })

  btn[0].addEventListener('click', function () {
    if (horn.options[horn.selectedIndex].text == "Air Horn") {
      audio[0].src = "/assets/audio/air-horn.mp3";
    } else if (horn.options[horn.selectedIndex].text == "Car Horn") {
      audio[0].src = "/assets/audio/car-horn.mp3";
    } else if (horn.options[horn.selectedIndex].text == "Party Horn") {
      audio[0].src = "/assets/audio/party-horn.mp3";

      jsConfetti.addConfetti();
    }
    audio[0].play();
  })
}
