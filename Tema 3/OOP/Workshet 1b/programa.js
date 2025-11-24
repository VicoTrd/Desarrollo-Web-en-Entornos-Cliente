// color objetivo
const colorCorrecto = "rojo";

// obtener elementos
const cuadros = document.querySelectorAll(".cuadro");
const mensaje = document.getElementById("mensaje");

// añadir evento de clic a cada cuadro
cuadros.forEach(cuadro => {
  cuadro.addEventListener("click", () => {
    const color = cuadro.dataset.color;
    if (color === colorCorrecto) {
      mensaje.textContent = "¡Correcto! Hiciste clic en el color rojo.";
      mensaje.style.color = "green";
    } else {
      mensaje.textContent = "Incorrecto, intenta otra vez.";
      mensaje.style.color = "red";
    }
  });
});