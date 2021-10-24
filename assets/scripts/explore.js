// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var synth = window.speechSynthesis;


  var voiceSelect = document.querySelector('select');



  var voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }



  var images = document.getElementsByTagName("img");
  var btn = document.getElementsByTagName("button");
  var textToSpeak = document.getElementById("text-to-speak");
  var voiceToSpeack = document.getElementById("voice-select");
  var utterance = textToSpeak.innerText;





  btn[0].addEventListener('click', function () {
    var msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = textToSpeak.value;
    voices = synth.getVoices();
    var found = false;

    msg.addEventListener('end', function () {
      images[0].src = "../assets/images/smiling.png"
    })
    for (var i = 0; i < voices.length; i++) {
      var tempStr = voices[i].voiceURI + " (" + voices[i].lang + ")";
      if (tempStr === voiceToSpeack.value) {
        msg.voice = voices[i];
        found = true;
      }
    }
    if (found){
      images[0].src = '../assets/images/smiling-open.png';
      speechSynthesis.speak(msg);
    }
  })
}
