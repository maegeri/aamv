// Observador para animar secciones cuando aparecen en pantalla
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add("visible");
    }
});
}, { threshold: 0.2 });

// Seleccionamos las secciones, EXCLUYENDO el hero-banner
document.querySelectorAll("section:not(.hero-banner)").forEach(sec => {
sec.classList.add("section-anim"); 
observer.observe(sec);
});

// Hero fade-in desde negro al cargar
window.addEventListener("DOMContentLoaded", () => {
const hero = document.querySelector(".hero-banner");
if (hero) {
    setTimeout(() => {
    hero.classList.add("visible");
    }, 200);
}
});