window.onload = () => {
    mezclarCartas();
};

const imagenes = document.querySelectorAll("img");

let click1 = null;
let click2 = null;
let bloqueo = false; // Para que no se puedan hacer clics mientras comparamos

// Ponemos todas las cartas boca abajo al inicio
imagenes.forEach(img => {
    img.dataset.real = img.src;      // Guardamos cuál es la imagen real de la carta
    img.src = "img/cartaAtras.jpg";  // Mostramos la parte de atrás
});

document.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG" || bloqueo) return; // Si no es una carta o estamos bloqueados, nada

    let img = e.target;

    // Si la carta ya estaba boca arriba, no hacemos nada
    if (img.src.includes("cartaAtras.jpg")) {
        img.src = img.dataset.real; // Mostramos la imagen real al voltear
    } else {
        return;
    }

    if (!click1) {
        click1 = img; // Primera carta que volteamos
    } else {
        click2 = img; // Segunda carta que volteamos
        bloqueo = true; // Bloqueamos mientras vemos si es par

        // Miramos si hacen par
        if (click1.id + "2" === click2.id || click2.id + "2" === click1.id) {
            click1 = null;
            click2 = null;
            bloqueo = false;
        } else {
            // No es par, las damos vuelta otra vez
            setTimeout(() => {
                click1.src = "img/cartaAtras.jpg";
                click2.src = "img/cartaAtras.jpg";
                click1 = null;
                click2 = null;
                bloqueo = false;
            }, 800); // Le damos un momento para ver las cartas
        }
    }
});

function mezclarCartas() {
    const imagenes1 = document.getElementById("imagenes1");
    const imagenes2 = document.getElementById("imagenes2");

    // Sacamos las cartas del DOM y las convertimos en array
    let cartasFila1 = Array.from(imagenes1.children);
    let cartasFila2 = Array.from(imagenes2.children);

    // Revolvemos las cartas al azar
    cartasFila1.sort(() => Math.random() - 0.5);
    cartasFila2.sort(() => Math.random() - 0.5);

    // Las volvemos a poner en el DOM en el nuevo orden
    cartasFila1.forEach(img => imagenes1.appendChild(img));
    cartasFila2.forEach(img => imagenes2.appendChild(img));
}
