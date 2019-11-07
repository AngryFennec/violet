'use strict';


(function () {

  window.onload = function() {

  };

  window.onkeydown = function(e) {
      return !(e.keyCode == 32);
  };

  Amplitude.init({
    "bindings": {
      37: 'prev',
      39: 'next',
      32: 'play_pause'
    },
    "songs": [
      {
        "name": "(Tear a Hole in) This Plastic Night",
        "artist": "Artist",
        "album": "Violet and The Sun",
        "url": "../music/(Tear a Hole in) This Plastic Night.mp3",
      },
      {
        "name": "Amaurot",
        "artist": "Artist",
        "album": "Violet and The Sun",
        "url": "../music/Amaurot.mp3",
      },
      {
        "name": "All I am is Love",
        "artist": "Artist",
        "album": "Violet and The Sun",
        "url": "../music/All I Am is Love.mp3",
      },
      {
        "name": "To Watch You Grow Old",
        "artist": "Artist",
        "album": "Violet and The Sun",
        "url": "../music/To Watch You Grow Old.mp3",
      },
      {
        "name": "Violet and The Sun",
        "artist": "Artist",
        "album": "Violet and The Sun",
        "url": "../music/Violet and The Sun.mp3",
      },
      {
        "name": "Stardust",
        "artist": "Artist",
        "album": "Violet and The Sun",
        "url": "../music/Stardust.mp3",
      },
      {
        "name": "Constant",
        "artist": "Artist",
        "album": "Violet and The Sun",
        "url": "../music/Constant.mp3",
      },
      {
        "name": "George and Martha",
        "artist": "Artist",
        "album": "Violet and The Sun",
        "url": "../music/George and Martha.mp3",
      },
      {
        "name": "The Ruby Song",
        "artist": "Artist",
        "album": "Violet and The Sun",
        "url": "../music/The Ruby Song.mp3",
      },
    ]
  });
    /*var silence2 = document.querySelector('#silence2');
  window.onload = function() {
    //var context = new AudioContext();

    const playPromise = silence2.play();
if (playPromise !== null){
    playPromise.catch(() => { silence2.play(); })
}
    silence2.addEventListener('ended', function() {
      //Amplitude.play();
      Amplitude.playSongAtIndex(0);
    });
  }
/*
    if (silence2) {
      silence2.play();
    }*/

//}*/

var closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
  if (document.body.clientWidth > 500) {
    Amplitude.playSongAtIndex(0);
  }
});

var range = document.querySelector('.amplitude-volume-slider');
range.classList.add('visually-hidden');
var changeDisplayRange = function () {
  if (!range.classList.contains('visually-hidden')) {
    range.classList.add('visually-hidden');
  }
}
var showRange = function() {
  if (range.classList.contains('visually-hidden')) {
    range.classList.remove('visually-hidden');
  }
  setTimeout(changeDisplayRange, 5000)
}

var volumeBtn = document.querySelector('.volume-link');
volumeBtn.addEventListener('click', showRange);
volumeBtn.addEventListener('mouseover', showRange);
})();
