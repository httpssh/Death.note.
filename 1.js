document.addEventListener("DOMContentLoaded", function () {
  var summonButton = document.getElementById("summon-button");
  var closeButton = document.getElementById("close-button");
  var imageContainer = document.getElementById("summoned-image-container");
  var sound = document.getElementById("summon-sound");

  summonButton.addEventListener("click", function () {
    imageContainer.style.display = "block"; // Show the image container
    sound.currentTime = 0; // Reset the sound to the beginning
    sound.play(); // Play the summoning sound
  });

  closeButton.addEventListener("click", function () {
    window.close(); // Close the window/tab
  });
});
