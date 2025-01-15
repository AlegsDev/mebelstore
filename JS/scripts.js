const images = document.querySelectorAll('.image-section img');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Меняет фото каждые 3 секунды
function cycleImages(container) {
  const images = container.querySelectorAll('img');
  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  // Main image carousel
  const mainImageSection = document.querySelector('.image-section');
  cycleImages(mainImageSection);

  // Left column image carousel
  const leftPhotoWindow = document.querySelector('.left-column .photo-window');
  cycleImages(leftPhotoWindow);

  // Right column image carousel
  const rightPhotoWindow = document.querySelector('.right-column .photo-window');
  cycleImages(rightPhotoWindow);

  // Navigation buttons for left column
  const leftImages = leftPhotoWindow.querySelectorAll('img');
  const leftPrevButton = leftPhotoWindow.querySelector('.prev');
  const leftNextButton = leftPhotoWindow.querySelector('.next');
  const leftPhotoButtons = leftPhotoWindow.querySelectorAll('.photo-btn');
  let leftIndex = 0;

  leftPrevButton.addEventListener('click', () => {
    leftImages[leftIndex].style.display = 'none';
    leftIndex = (leftIndex - 1 + leftImages.length) % leftImages.length;
    leftImages[leftIndex].style.display = 'block';
    updateActiveButton(leftPhotoButtons, leftIndex);
  });

  leftNextButton.addEventListener('click', () => {
    leftImages[leftIndex].style.display = 'none';
    leftIndex = (leftIndex + 1) % leftImages.length;
    leftImages[leftIndex].style.display = 'block';
    updateActiveButton(leftPhotoButtons, leftIndex);
  });

  leftPhotoButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      leftImages[leftIndex].style.display = 'none';
      leftIndex = index;
      leftImages[leftIndex].style.display = 'block';
      updateActiveButton(leftPhotoButtons, leftIndex);
    });
  });

  // Navigation buttons for right column
  const rightImages = rightPhotoWindow.querySelectorAll('img');
  const rightPrevButton = rightPhotoWindow.querySelector('.prev');
  const rightNextButton = rightPhotoWindow.querySelector('.next');
  const rightPhotoButtons = rightPhotoWindow.querySelectorAll('.photo-btn');
  let rightIndex = 0;

  rightPrevButton.addEventListener('click', () => {
    rightImages[rightIndex].style.display = 'none';
    rightIndex = (rightIndex - 1 + rightImages.length) % rightImages.length;
    rightImages[rightIndex].style.display = 'block';
    updateActiveButton(rightPhotoButtons, rightIndex);
  });

  rightNextButton.addEventListener('click', () => {
    rightImages[rightIndex].style.display = 'none';
    rightIndex = (rightIndex + 1) % rightImages.length;
    rightImages[rightIndex].style.display = 'block';
    updateActiveButton(rightPhotoButtons, rightIndex);
  });

  rightPhotoButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      rightImages[rightIndex].style.display = 'none';
      rightIndex = index;
      rightImages[rightIndex].style.display = 'block';
      updateActiveButton(rightPhotoButtons, rightIndex);
    });
  });

  function updateActiveButton(buttons, activeIndex) {
    buttons.forEach((btn, index) => {
      btn.classList.toggle('active', index === activeIndex);
    });
  }
});
