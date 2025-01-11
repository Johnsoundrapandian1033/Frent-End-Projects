document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.john');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
  
    // Function to show slide
    function showSlide() {
      const slides = document.querySelectorAll('.para');
      slides.forEach((slide, index) => {
        slide.style.display = 'none';
        if (index === currentSlide) {
          slide.style.display = 'block';
        }
      });
    }
  
    // Function to move to previous slide
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = document.querySelectorAll('.para').length - 1;
      }
      showSlide();
    }
  
    // Function to move to next slide
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= document.querySelectorAll('.para').length) {
        currentSlide = 0;
      }
      showSlide();
    }
  
    // Event listeners for buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  
    // Show initial slide
    showSlide();
  });
  