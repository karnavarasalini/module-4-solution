// Wrap in IIFE to avoid polluting global scope
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
