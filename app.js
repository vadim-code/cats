function slidesF(currentSlide = 2) {
  const slides = document.querySelectorAll('.slide');

  for (let slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();

      slide.classList.add('active');
    });
  }

  function clearActiveClasses() {
    slides.forEach((el) => {
      el.classList.remove('active');
    });
  }

  slides[currentSlide].classList.add('active');
}

slidesF(4);
