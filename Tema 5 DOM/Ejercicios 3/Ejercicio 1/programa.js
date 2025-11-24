window.onload = () =>{

    let cronometro = document.getElementById("cronometro");

    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");

    let segundos = 0;
    let minutos = 0;
    let intervalo;

    start.addEventListener("click", ()=>{
        if (!intervalo) {
            intervalo = setInterval(() => {
                segundos++;
                if (segundos == 60) {
                    segundos = 0;
                    minutos++;
                    if (minutos == 60) {
                        minutos = 0;
                        horas++;
                    }
                }

                let m = minutos.toString().padStart(2, "0");
                let s = segundos.toString().padStart(2, "0");

                cronometro.textContent = `${m}:${s}`;
            }, 1000);
        }
    });

    stop.addEventListener("click", ()=>{

        clearInterval(intervalo);
        intervalo = null;
    });

    reset.addEventListener("click", ()=>{
        clearInterval(intervalo);
        intervalo = null;

        minutos = 0;
        segundos = 0;
        let m = minutos.toString().padStart(2, "0");
        let s = segundos.toString().padStart(2, "0");

        cronometro.textContent = `${m}:${s}`;
    });
}