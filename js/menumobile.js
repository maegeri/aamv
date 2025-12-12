const header = document.querySelector('.main-header');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const overlay = document.querySelector('.menu-overlay');

// Abrir menú
mobileMenu.addEventListener('click', () => {
  header.classList.add('menu-open');
  overlay.classList.add('active');
});

// Cerrar menú
function closeMenu() {
  header.classList.remove('menu-open');
  overlay.classList.remove('active');
}

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
