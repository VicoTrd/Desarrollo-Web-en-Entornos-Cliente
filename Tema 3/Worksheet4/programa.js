tablero = [
  ["","",""],
  ["","",""],
  ["","",""]
]

jugador = "X"
terminado = false

function mostrarTablero(){
  for(i=0;i<3;i++){
    console.log(tablero[i][0],"|",tablero[i][1],"|",tablero[i][2])
  }
  console.log("---------")
}

function hayGanador(){
  // Revisar filas
  for(i=0;i<3;i++){
    if(tablero[i][0]==tablero[i][1] && tablero[i][1]==tablero[i][2] && tablero[i][0]!=""){
      return true
    }
  }
  // Revisar columnas
  for(i=0;i<3;i++){
    if(tablero[0][i]==tablero[1][i] && tablero[1][i]==tablero[2][i] && tablero[0][i]!=""){
      return true
    }
  }
  // Revisar diagonales
  if(tablero[0][0]==tablero[1][1] && tablero[1][1]==tablero[2][2] && tablero[0][0]!=""){
    return true
  }
  if(tablero[0][2]==tablero[1][1] && tablero[1][1]==tablero[2][0] && tablero[0][2]!=""){
    return true
  }
  return false
}

function turno(fila,col){
  if(terminado){
    console.log("El juego ya terminó")
    return
  }
  if(tablero[fila][col]!=""){
    console.log("Casilla ocupada")
    return
  }
  tablero[fila][col] = jugador
  mostrarTablero()
  if(hayGanador()){
    console.log("Jugador", jugador, "ha ganado!")
    terminado = true
    return
  }
  // Canmbiar jugador
  if(jugador=="X") jugador="O"
  else jugador="X"
}

turno(0,0)
turno(1,1)
turno(0,1)
turno(1,0)
turno(0,2) // gana
