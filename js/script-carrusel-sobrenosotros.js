let indexSensei = 0;
const carruselSensei = document.getElementById('carrusel2-sensei');
const itemsSensei = carruselSensei.children.length;

function moverCarruselSensei(dir) {
indexSensei += dir;
if(indexSensei < 0) indexSensei = itemsSensei - 1;
if(indexSensei >= itemsSensei) indexSensei = 0;
carruselSensei.style.transform = `translateX(-${indexSensei * 100}%)`;
}

// Avance automático cada 20s
setInterval(() => moverCarruselSensei(1), 20000);