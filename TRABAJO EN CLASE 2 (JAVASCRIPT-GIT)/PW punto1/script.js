const listaEntradas = [];

function agregarTexto() {
    const inputTexto = document.getElementById("inputTexto");
    const textoIngresado = inputTexto.value;

    if (textoIngresado) {
        const textoEnMinusculas = textoIngresado.toLowerCase();

        listaEntradas.push(textoEnMinusculas);

        const listaEntradasElement = document.getElementById("listaEntradas");
        const nuevaEntrada = document.createElement("li");
        nuevaEntrada.textContent = textoEnMinusculas;
        listaEntradasElement.appendChild(nuevaEntrada);

        // Limpiar el input
        inputTexto.value = "";
    }
}

function borrarUltimaEntrada() {
    if (listaEntradas.length > 0) {
        listaEntradas.pop();

        const listaEntradasElement = document.getElementById("listaEntradas");
        listaEntradasElement.removeChild(listaEntradasElement.lastChild);
    }
}
