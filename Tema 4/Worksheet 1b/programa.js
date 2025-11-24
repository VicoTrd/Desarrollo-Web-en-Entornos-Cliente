//1 Caza del color
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");

function verificarColor(colorSeleccionado) {
  if (colorSeleccionado === "rojo") alert("Acertaste");
  else alert("Incorrecto");
}

color1.addEventListener("click", () => verificarColor("azul"));
color2.addEventListener("click", () => verificarColor("rojo"));
color3.addEventListener("click", () => verificarColor("verde"));
color4.addEventListener("click", () => verificarColor("amarillo"));

//2 El botón cambiante
const boton = document.getElementById("boton");
const colorOriginal = "lightgrey";
boton.style.backgroundColor = colorOriginal;

boton.addEventListener("mouseover", () => boton.style.backgroundColor = "orange");
boton.addEventListener("mouseout", () => boton.style.backgroundColor = colorOriginal);
boton.addEventListener("click", () => boton.textContent = "¡Me hiciste clic!");

//3 Sigue la instrucción
const resultadoTecla = document.getElementById("resultadoTecla");
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "a") resultadoTecla.textContent = "Correcto";
  else resultadoTecla.textContent = "Tecla incorrecta";
});

//4 Juego de reflejos
const circulo = document.getElementById("circulo");
let puedeClic = false;

function iniciarReflejos() {
  circulo.style.backgroundColor = "grey";
  const tiempo = Math.floor(Math.random() * (5000 - 2000) + 2000);

  setTimeout(() => {
    circulo.style.backgroundColor = "green";
    puedeClic = true;
    setTimeout(() => {
      circulo.style.backgroundColor = "grey";
      puedeClic = false;
      iniciarReflejos();
    }, 1000);
  }, tiempo);
}

circulo.addEventListener("click", () => {
  if (puedeClic) alert("¡Reflejos rápidos!");
  else alert("Demasiado pronto");
});

iniciarReflejos();

//5 Atrapa el número correcto
const botonesNum = document.querySelectorAll(".numero");
botonesNum.forEach(b => b.addEventListener("click", () => {
  if (b.textContent === "7") alert("Correcto");
  else alert("Incorrecto");
}));
