//1 alert al hacer click en cualquier parte
document.addEventListener("click", () => {
  alert("Se hizo click en la página");
});

//2 mostrar posición del ratón
document.addEventListener("mousemove", (e) => {
  const p = document.getElementById("posicion");
  p.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

//3 tiempo transcurrido desde la carga de la página
window.addEventListener("load", () => {
  const start = Date.now();
  const p = document.getElementById("tiempo");
  setInterval(() => {
    const segundos = Math.floor((Date.now() - start)/1000);
    p.textContent = `Segundos desde carga: ${segundos}`;
  }, 1000);
});
