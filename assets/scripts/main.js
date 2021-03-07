// main.js
var volNumber = document.getElementById("volume-number");
var volSlider = document.getElementById("volume-slider");
var volImage = document.getElementById("volume-image");
var soundImage = document.getElementById("sound-image");
var honkBtn = document.getElementById("honk-btn");
var honkAudio = document.getElementById("horn-sound");
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");

volNumber.addEventListener("input", function() {
    volSlider.value = volNumber.value;
    honkAudio.volume = (volNumber.value)*1.0/100;
});

volSlider.addEventListener("input", function() {
    honkBtn.disabled = false;
    volNumber.value = volSlider.value;
    honkAudio.volume = (volSlider.value)*1.0/100;
    if(volSlider.value >= 67) {
        volImage.src = "./assets/media/icons/volume-level-3.svg";
    } else if(volSlider.value >= 34) {
        volImage.src = "./assets/media/icons/volume-level-2.svg";
    } else if(volSlider.value >= 1) {
        volImage.src = "./assets/media/icons/volume-level-1.svg";
    } else {
        volImage.src = "./assets/media/icons/volume-level-0.svg";
        honkBtn.disabled = true;
    }
});

airHorn.addEventListener("click", function() {
    soundImage.src = "./assets/media/images/air-horn.svg";
    honkAudio.src = "./assets/media/audio/air-horn.mp3";
});

carHorn.addEventListener("click", function() {
    soundImage.src = "./assets/media/images/car.svg";
    honkAudio.src = "./assets/media/audio/car-horn.mp3";
});

partyHorn.addEventListener("click", function() {
    soundImage.src = "./assets/media/images/party-horn.svg";
    honkAudio.src = "./assets/media/audio/party-horn.mp3";
});

honkBtn.onclick = function(event) {
    event.preventDefault();
    honkAudio.play();
};

// TODO
