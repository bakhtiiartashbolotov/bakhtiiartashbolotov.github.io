// Find all carousel containers on the page
const carousels = document.querySelectorAll('.carousel');

// Iterate over each carousel and set it up
carousels.forEach(carousel => {
  const slides = carousel.querySelectorAll('.slide');
  let currentSlide = 0;

  // Set up the first slide
  slides[currentSlide].classList.add('active');

  // Set up the interval to automatically advance the slides
  setInterval(() => {
    nextSlide();
  }, 5000);

  // Set up the function to advance to the next slide
  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  // Find the navigation buttons for this carousel
  const leftButton = carousel.querySelector('.left-button');
  const rightButton = carousel.querySelector('.right-button');

  // Set up the event listeners for the navigation buttons
  leftButton.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  });

  rightButton.addEventListener('click', () => {
    nextSlide();
  });
});
