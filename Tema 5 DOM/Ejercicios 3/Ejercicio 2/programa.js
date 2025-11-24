window.onload = () => {

    let divBotones = document.getElementById("divBotones");
    let palabraElem = document.getElementById("palabra");
    let vidasElem = document.getElementById("vidas");
    let botones = divBotones.getElementsByTagName("button");

    let palabraFinal;
    //Ciudades aleatorias
    let animales = ["perro", "gato", "elefante", "leon", "tigre", "jirafa", "cebra", "oso", "lobo", "conejo", "zorro", "caballo", "vaca", 
        "oveja", "cerdo", "raton", "aguila", "delfin", "pinguino", "koala"];

    let ciudades = ["tokio", "paris", "nueva york", "londres", "madrid", "buenos aires", "ciudad de mexico", "roma", "sidney", 
        "toronto", "berlin", "lisboa", "amsterdam", "seul", "el cairo", "moscu", "estambul", "bangkok", "dubai", "singapur"];

    let frutas = ["manzana", "platano", "naranja", "uva", "fresa", "sandia", "melon", "kiwi", "maracuya", "mango", "pera", "durazno", 
        "cereza", "papaya", "limon", "mandarina", "coco", "frambuesa", "arandano", "guayaba"];

    let vidas = 5;
    let letraPulsada;
    let progreso = [];
    let categoria = null;
    let mensajeFinal = document.createElement("h2");

    // Escoger palabras por categoría
    document.addEventListener("click", (e) => {
        if (e.target.id == "ciudades") categoria = ciudades;
        else if (e.target.id == "frutas") categoria = frutas;
        else if (e.target.id == "animales") categoria = animales;
        else return; // si no es ninguno no hace el event listener

        // Elegir palabra aleatoria
        function palabraAleatoria() {
            let numAleat = Math.floor(Math.random() * categoria.length);
            let palabraAleat = categoria[numAleat].toLowerCase();
            return palabraAleat;
        }

        palabraFinal = palabraAleatoria();
        progreso = [];

        for (let i = 0; i < palabraFinal.length; i++) {
            if (palabraFinal[i] == " ") {
                progreso.push(" ");
            } else {
                progreso.push("-");
            }
        }

        palabraElem.textContent = progreso.join("");
        vidas = 5;
        vidasElem.textContent = `You have ${vidas} lives`;
        mensajeFinal.textContent = "";
    });

    // Obtener la letra en la que ha clicado
    divBotones.addEventListener("click", (e) => {
        if (e.target.tagName != "BUTTON") return;
        if (!palabraFinal) return; // si no hay palabra no hace na

        letraPulsada = e.target.textContent.toLowerCase();
        console.log("Letra pulsada: ", letraPulsada);

        let acierto = false;

        for (let i = 0; i < palabraFinal.length; i++) {
            if (palabraFinal[i] == letraPulsada) {
                progreso[i] = letraPulsada; // reemplaza el guion directamente
                acierto = true;
            }
        }

        if (!acierto) {
            vidas--;
            console.log("Vidas restantes:", vidas);
            if (vidasElem) vidasElem.textContent = `You have ${vidas} lives`;
        }

        // Mostrar la palabra actualizada correctamente
        palabraElem.textContent = progreso.join("");
        console.log("Palabra actual:", progreso.join(""));

        // Oscurecer botón ya pulsado
        e.target.disabled = true;
        e.target.style.opacity = "0.5";

        // Comprobar si ha ganado
        if (progreso.join("") == palabraFinal) {
            mensajeFinal.textContent = "Has ganado";
            for (let boton of botones) {
                boton.disabled = true;
                boton.style.opacity = 0.5;
            }
        }

        // Comprobar si ha perdido
        if (vidas <= 0) {
            mensajeFinal.textContent = `Has perdido. La palabra final era ${palabraFinal}.`;
            for (let boton of botones) {
                boton.disabled = true;
                boton.style.opacity = 0.5;
            }
        }
    });

    document.body.appendChild(mensajeFinal);
};