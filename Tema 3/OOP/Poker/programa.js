class Baraja{
    constructor() {
        this.baraja = this.crearCartas();
    }

    crearCartas() {
        const simbolos = ["Diamantes", "Corazones", "Picas", "Treboles"];
        const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

        let baraja = [];

        for (let i = 0; i < simbolos.length; i++) {
            for (let j = 0; j < numeros.length; j++) {
                baraja.push(numeros[j] + " de " + simbolos[i]);
            }
        }

        return baraja;
    }
}

class Jugador{
    constructor(nombre){
        this.nombre = nombre;
    }

    crearMesa(){
        let mesa = ["Dealer", "Ciega pequena", "Ciega grande", "Jugador4", "Jugador5", "Jugador6", "Jugador7", "Jugador8"];
        let cantJugadores = cantJugadores.push([this.nombre]);


        for(let i = 0 ; i<mesa.length ; i++){
            mesa.push(this.nombre[i] + mesa[i]);
        }

        return mesa;
    }
}

const baraja = new Baraja();
console.log(baraja.baraja);