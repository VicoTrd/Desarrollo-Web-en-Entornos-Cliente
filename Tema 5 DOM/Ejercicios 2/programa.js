let contador = 0;
const divContador = document.getElementById("contador");
document.getElementById("sumar").addEventListener("click", ()=>{
    contador++;
    divContador.textContent = contador;
});