// Get references to the carousel and its components
const carousel = document.querySelector(".carousel");
const carouselTrack = document.querySelector(".carousel-track");
const carouselBoxes = Array.from(document.querySelectorAll(".carousel-box"));

// Get references to the previous and next arrows
const prevArrow = document.querySelector(".carousel-prev");
const nextArrow = document.querySelector(".carousel-next");

// Set the index of the currently displayed box to 0
let currentIndex = 0;

// Set the width of the carousel track to the total width of all boxes
const boxWidth = carouselBoxes[0].getBoundingClientRect().width;
carouselTrack.style.width = `${boxWidth * carouselBoxes.length}px`;

// Move the carousel track to show the current box
function moveCarousel() {
  carouselTrack.style.transform = `translateX(${-currentIndex * boxWidth}px)`;
}

// Move the carousel track to show the next box
function showNextBox() {
  currentIndex++;
  if (currentIndex > carouselBoxes.length - 1) {
    currentIndex = 0;
  }
  moveCarousel();
}

// Move the carousel track to show the previous box
function showPrevBox() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselBoxes.length - 1;
  }
  moveCarousel();
}

// Set up event listeners for the previous and next arrows
prevArrow.addEventListener("click", showPrevBox);
nextArrow.addEventListener("click", showNextBox);

// Move the carousel automatically every 5 seconds
setInterval(showNextBox, 5000);
// Get a reference to the register button
const registerButton = document.querySelector(".register-button");

// Redirect the user to the SPU website when the register button is clicked
registerButton.addEventListener("click", () => {
  window.location.href = "https://spu.edu.sy";
});
