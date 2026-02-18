document.addEventListener("DOMContentLoaded", function () {
  const select = document.querySelector(".custom-select");
  const selectedOption = select.querySelector(".selected-option");
  const options = select.querySelectorAll(".options li");

  // Maneja el despliegue del selector
  select.addEventListener("click", () => {
    select.classList.toggle("open");
  });

  // Al hacer clic en una opción de idioma
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.getAttribute("data-lang");

      // Actualiza el botón visual
      selectedOption.innerHTML = option.innerHTML;

      // Guarda el idioma en localStorage
      localStorage.setItem("lang", lang);

      // Cambia el idioma
      setLanguage(lang);

      // Cierra el menú
      select.classList.remove("open");
    });
  });

  // Cierra si haces clic fuera
  document.addEventListener("click", function (e) {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  });

  // Cargar idioma guardado o por defecto
  const savedLang = localStorage.getItem("lang") || "es";
  setLanguage(savedLang);
  updateLanguageSelector(savedLang); // Asegura que el botón muestre el idioma correcto
});

// Carga traducciones desde el archivo y aplica a elementos con data-i18n
function setLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) {
          el.innerText = data[key];
        }
      });
    });

  // Actualiza el selector visual
  updateLanguageSelector(lang);
}

// Cambia la bandera y el nombre en el botón del selector
function updateLanguageSelector(lang) {
  const selectedOption = document.querySelector(".selected-option");

  if (lang === "es") {
    selectedOption.innerHTML = `
      <img src="banderas/es.svg" alt="Español"><span>Español</span>
    `;
  } else if (lang === "ca") {
    selectedOption.innerHTML = `
      <img src="banderas/es-ct.svg" alt="Català"><span>Català</span>
    `;
  }
}