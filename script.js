// Función para la marquesina
function marquesina() {
    const texto = document.getElementById('marquesina').innerText;
    document.getElementById('marquesina').innerText = texto.substring(1) + texto[0];
}

// Ejecutar la función cada 200ms para animar la marquesina
setInterval(marquesina, 200);