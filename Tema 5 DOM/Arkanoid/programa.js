var miBola;
var miBarra;
var intervalo;



var velocidadY = 6;
var posicionYBola = 0;

var velocidadX = 8;
var posicionXBola = 0;

var posicionXBarra = 0;

window.onload = () =>{
    miBola = document.getElementById("bola");
    miBarra = document.getElementById("barra");
    animaJuego();

    document.addEventListener("keydown",(e)=>{
        if(e.key == "ArrowRight" && posicionXBarra < 500){
            posicionXBarra += 10;
            miBarra.style.left = posicionXBarra + "px";
        }
        
        if(e.key == "ArrowLeft" && posicionXBarra > 0){
            posicionXBarra -= 10;
            miBarra.style.left = posicionXBarra + "px";
        }
    });

    const contenedor = document.getElementById("contenedor");

    for (let i = 0; i < 33; i++) {
      let nuevoDiv = document.createElement("div");
      nuevoDiv.style.width = "40px";
      nuevoDiv.style.height = "20px";
      nuevoDiv.style.background = "#88888888";
      nuevoDiv.style.margin = "2px";
      contenedor.appendChild(nuevoDiv);
    }
}

function animaJuego(){
    intervalo = setInterval(()=>{
        posicionYBola += velocidadY;
        miBola.style.top = posicionYBola + "px";

        posicionXBola += velocidadX;
        miBola.style.left = posicionXBola + "px";

        // techo
        if (posicionYBola <= 0 || posicionYBola >= 470)
            velocidadY *= -1;

        // paredes izquierda / derecha
        if (posicionXBola >= 500 || posicionXBola <= 0)
            velocidadX *= -1;

        let anchoBarra = miBarra.offsetWidth;
        let anchoBola = miBola.offsetWidth;

        // zona inferior
        if (posicionYBola >= 470){

            // si toca la barra rebota
            if (posicionXBola + anchoBola >= posicionXBarra && posicionXBola <= posicionXBarra + anchoBarra){
                velocidadY *= -1;
            } //else {
                //clearInterval(intervalo);
            //}
        }
        var objetoBola = miBola.getBoundingClientRect();
        var objetoBarra = miBarra.getBoundingClientRect();
        if(objetoBola.right >= objetoBarra.left &&
            objetoBola.left <= objetoBarra.right &&
            objetoBola.bottom >= objetoBarra.top &&
            objetoBola.top <= objetoBarra.bottom
            ){
                velocidadY *= -1;
        }
    },30);
}