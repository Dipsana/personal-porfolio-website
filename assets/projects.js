let currentIndex = 0;
const images = document.querySelectorAll('.slider-img');
const sliderImages = document.querySelector('.slider-images');
const modal = document.getElementById('imageModal');
const previewImage = document.getElementById('previewImage');
const closeModal = document.querySelector('.close');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');
let zoomLevel = 1;

// Navigation for slider
document.querySelector('.prev-btn').addEventListener('click', () => navigateSlider(-1));
document.querySelector('.next-btn').addEventListener('click', () => navigateSlider(1));

function navigateSlider(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Image click event for preview
images.forEach(image => {
    image.addEventListener('click', () => {
        previewImage.src = image.src;
        modal.style.display = 'block';
    });
});

// Close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    previewImage.style.transform = 'scale(1)';
    zoomLevel = 1;
});

// Zoom-in and Zoom-out functionality
zoomInButton.addEventListener('click', () => zoomImage(0.2));
zoomOutButton.addEventListener('click', () => zoomImage(-0.2));

function zoomImage(zoomFactor) {
    zoomLevel = Math.min(3, Math.max(1, zoomLevel + zoomFactor));
    previewImage.style.transform = `scale(${zoomLevel})`;
}