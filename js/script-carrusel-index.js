let desplazamiento = 0;
const carrusel = document.getElementById("carrusel");
const tarjetaAncho = 320; // incluye padding y margen aprox
const visibles = 3;
const total = carrusel.children.length;

function moverCarrusel(direccion) {
  const maxDesplazamiento = (total - visibles) * tarjetaAncho;

  desplazamiento += direccion * tarjetaAncho;
  desplazamiento = Math.max(0, Math.min(desplazamiento, maxDesplazamiento));

  carrusel.style.transform = `translateX(-${desplazamiento}px)`;
}


const track = document.querySelector('.carousel-track');
      const slides = Array.from(track.children);
      const nextButton = document.querySelector('.next');
      const prevButton = document.querySelector('.prev');

      let currentSlide = slides[0];

      function updateSlides(newSlide) {
        currentSlide.classList.remove('current');
        newSlide.classList.add('current');

        const slideIndex = slides.indexOf(newSlide);
        const slideWidth = newSlide.getBoundingClientRect().width;

        track.style.transform = 'translateX(-' + slideWidth * slideIndex + 'px)';
        currentSlide = newSlide;
      }

      nextButton.addEventListener('click', () => {
        let nextSlide = currentSlide.nextElementSibling;
        if (!nextSlide) nextSlide = slides[0]; // volver al inicio
        updateSlides(nextSlide);
      });

      prevButton.addEventListener('click', () => {
        let prevSlide = currentSlide.previousElementSibling;
        if (!prevSlide) prevSlide = slides[slides.length - 1]; // volver al final
        updateSlides(prevSlide);
      });
