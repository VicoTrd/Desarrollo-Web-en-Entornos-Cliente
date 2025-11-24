class Juego{
    jugador1;
    jugador2;
    constructor(jugador1, jugador2){
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
    }
}

class Jugador{
    nombre;
    victorias;
    derrotas;
    movimiento;

    constructor(nombre, victorias, derrotas, movimiento){
        this.nombre = nombre;
        this.victorias = 0;
        this.derrotas = 0;
        this.movimiento = null;
    }

    //Metodo pa elegir un movimiento
    elegirMovimiento(tipo){
        this.movimiento = new Movimiento(tipo);
    }

    //Metodo ver derrotas y victorias
    estadisticas(){
        return "Estadisticas de: " + this.nombre + " Derrotas: " + this.derrotas + " || Victorias: " + this.victorias;
    }
}

class Movimiento{
    movimiento;

    constructor(movimiento){
        this.movimiento = movimiento;
    }

    enfrentamiento(movimientoRival){
        let gano = false;
        if(this.movimiento==movimientoRival)
            console.log("Empate");
            else if(this.movimiento=="piedra" && movimientoRival=="tijera")
                gano = true;
            else if(this.movimiento=="papel" && movimientoRival=="piedra")
                gano = true;
            else if(this.movimiento=="tijera" && movimientoRival=="papel")
                gano = true;
        
        return gano;
    }
}

const jugador1 = new Jugador("Juan");
const jugador2 = new Jugador("Ana");

jugador1.elegirMovimiento("piedra");
jugador2.elegirMovimiento("papel");

const resultado = jugador1.movimiento.enfrentamiento(jugador2.movimiento.movimiento);

if(resultado){
    console.log(jugador1.nombre + " ha ganado");
    jugador1.victorias ++;
    jugador2.derrotas ++;
}
    else if(jugador1.movimiento.movimiento==jugador2.movimiento.movimiento){
        console.log("");
        }
        else{
            console.log(jugador2.nombre + " ha ganado");
            jugador2.victorias ++;
            jugador1.derrotas ++;
        }

console.log(jugador1.estadisticas());
console.log(jugador2.estadisticas());