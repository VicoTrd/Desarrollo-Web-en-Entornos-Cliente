// Tablero
class Tablero{
    casillas;
    constructor(casillas){
        this.casillas = casillas;
    }

    mostrar(){
        return this.casillas;
    }

    colocarMarca(fil, col, simbolo){
        if (this.casillas[fil][col] == " ")
            this.casillas[fil][col] = simbolo;
    }

    casillaLibre(fil, col){
        let casillaLibre = false;
        if(this.casillas[fil][col] == " ")
            casillaLibre = true;

        return casillaLibre;
    }

    tableroLleno() {
        // Recorremos todas las filas y columnas
        for (let i = 0; i < this.casillas.length; i++) {
            for (let j = 0; j < this.casillas[i].length; j++) {
                if (this.casillas[i][j] == " ") {
                    // Si encontramos una casilla vacía, el tablero NO está lleno
                    return false;
                }
            }
        }
        // Si no hay huecos vacíos, está lleno
        return true;
    }


    hayGanador(simbolo) {
    // Revisar filas
    for (let i = 0; i < 3; i++) {
        if (this.casillas[i][0] == simbolo && this.casillas[i][1] == simbolo && this.casillas[i][2] == simbolo)
            return true;
    }

    // Revisar columnas
    for (let j = 0; j < 3; j++) {
        if (this.casillas[0][j] == simbolo && this.casillas[1][j] == simbolo && this.casillas[2][j] == simbolo)
            return true;
    }

    // Revisar diagonales
    if ((this.casillas[0][0] == simbolo && this.casillas[1][1] == simbolo && this.casillas[2][2] == simbolo) || (this.casillas[0][2] == simbolo && this.casillas[1][1] == simbolo && this.casillas[2][0] == simbolo))
        return true;

    return false;
    }
}

// Clase jugador

class Jugador{
    nombre;
    simbolo;
    constructor(nombre, simbolo){
        this.nombre = nombre;
        this.simbolo = simbolo;
    }

    elegirMovimiento(){
    let movimientoFil = parseInt(prompt(this.nombre + " Dime tu movimiento: (fila)"));
    let movimientoCol = parseInt(prompt(this.nombre + " Dime tu movimiento: (columna)"));
        return [movimientoFil, movimientoCol];
    }

}

// JUEGO 

const tablero = new Tablero([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);

const jugador1 = new Jugador("Vico", "X");
const jugador2 = new Jugador("Jose", "0");

let turnoActual = jugador1;
let enJuego = true;

while(enJuego){
    let [fila, col] = turnoActual.elegirMovimiento();

    if(tablero.casillaLibre(fila, col)){
        tablero.colocarMarca(fila, col, turnoActual.simbolo);
        console.log(tablero.mostrar());

        if(tablero.hayGanador(turnoActual.simbolo)){
            console.log("Gana " + turnoActual);
            enJuego = false;
        } else if(tablero.tableroLleno()){
            console.log("Empate");
            enJuego = false;
        } else {
            if(turnoActual == jugador1){
                turnoActual = jugador2;
            } else {
                turnoActual = jugador1;
            }
        }
    }
}
