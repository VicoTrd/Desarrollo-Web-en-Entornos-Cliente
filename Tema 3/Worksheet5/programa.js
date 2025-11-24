//1 Jugador
class Jugador {
  constructor(nombre){
    this.nombre = nombre
    this.ganadas = 0
    this.perdidas = 0
    this.movimiento = ""
  }
  hacerMovimiento(m){
    this.movimiento = m
  }
}

//2 Juego
class Juego {
  constructor(j1, j2){
    this.j1 = j1
    this.j2 = j2
    this.ganador = ""
  }
  jugar(){
    const a = this.j1.movimiento
    const b = this.j2.movimiento
    if(a==b){
      this.ganador = "Empate"
    }else if(
      (a=="piedra" && b=="tijera")||
      (a=="tijera" && b=="papel")||
      (a=="papel" && b=="piedra")
    ){
      this.ganador = this.j1.nombre
      this.j1.ganadas++
      this.j2.perdidas++
    }else{
      this.ganador = this.j2.nombre
      this.j2.ganadas++
      this.j1.perdidas++
    }
    console.log("Jugador 1:", this.j1.nombre, "Movimiento:", a)
    console.log("Jugador 2:", this.j2.nombre, "Movimiento:", b)
    console.log("Ganador:", this.ganador)
  }
}

//3 Juggar
jug1 = new Jugador("Jose")
jug2 = new Jugador("Ana")

jug1.hacerMovimiento("piedra")
jug2.hacerMovimiento("tijera")

juego = new Juego(jug1,jug2)
juego.jugar()

jug1.hacerMovimiento("papel")
jug2.hacerMovimiento("piedra")
juego.jugar()

console.log("Jose Ganadas:", jug1.ganadas, "Perdidas:", jug1.perdidas)
console.log("Ana Ganadas:", jug2.ganadas, "Perdidas:", jug2.perdidas)