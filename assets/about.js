let background = document.body;

function updateBackgroundPosition(event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  background.style.backgroundPosition = `${mouseX * 0.07}% ${mouseY * 0.07}%`;
}

// Update on mouse move
window.addEventListener('mousemove', updateBackgroundPosition);

// Recalculate when window is resized
window.addEventListener('resize', updateBackgroundPosition);