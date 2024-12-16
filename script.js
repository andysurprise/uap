// Flash logic and scoring game
const flashElement = document.querySelector('.flashes');
const scoreElement = document.getElementById('score');
let score = 0;

// Function to generate random position within the center 10% of the screen
function randomPosition() {
  const centerX = 50; // Center of the screen
  const centerY = 50;

  // Calculate offset for random placement within the central 10%
  const offsetX = Math.random() * 10 - 5; // Random value between -5 and +5
  const offsetY = Math.random() * 10 - 5; // Random value between -5 and +5

  // Set the new position of the flash
  flashElement.style.left = `${centerX + offsetX}vw`;
  flashElement.style.top = `${centerY + offsetY}vh`;
}

// Function to handle flash click/tap
function onFlashClick() {
  score++;
  scoreElement.textContent = score;
  randomPosition(); // Move flash to a new location immediately
}

// Show the flash at a new position every 1 second
function startFlashes() {
  randomPosition();
  flashElement.style.opacity = 1;

  // Hide the flash after 1 second and move to a new position
  setTimeout(() => {
    flashElement.style.opacity = 0;
    setTimeout(randomPosition, 200); // Add slight delay before reappearing
  }, 1000);
}

// Start the game loop
setInterval(startFlashes, 1200);

// Add click event listener to the flash
flashElement.addEventListener('click', onFlashClick);

// Title fade-in and fade-out logic
const largeTitle = document.querySelector('.large-title');
const mediumTitle = document.querySelector('.medium-title');

// Fade in "New Jersey" after 5 seconds
setTimeout(() => {
  mediumTitle.style.opacity = 1;
}, 5000);

// Fade out both titles after 10 seconds
setTimeout(() => {
  largeTitle.style.opacity = 0;
  mediumTitle.style.opacity = 0;
}, 10000);
