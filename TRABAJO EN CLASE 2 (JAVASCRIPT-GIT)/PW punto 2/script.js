let interval;
let segundos = 0;
let minutos = 0;
let horas = 0;

function iniciarCronometro() {
    if (!interval) {
        interval = setInterval(actualizarCronometro, 1000);
    }
}

function detenerCronometro() {
    clearInterval(interval);
    interval = null;
}

function reiniciarCronometro() {
    detenerCronometro();
    segundos = -1;
    minutos = 0;
    horas = 0;
    actualizarCronometro();
}

function actualizarCronometro() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

    const cronometroElement = document.getElementById("cronometro");
    cronometroElement.textContent = `${horas < 10 ? "0" : ""}${horas}:${minutos < 10 ? "0" : ""}${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;
}
