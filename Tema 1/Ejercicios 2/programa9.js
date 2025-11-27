let fruta = prompt("Dime una fruta (Manzana, Plátano o Uva)");
let frutaNum = 0;

if (fruta === "Manzana") {
  frutaNum = 1;
}
if (fruta === "Plátano") {
  frutaNum = 2;
}
if (fruta === "Uva") {
  frutaNum = 3;
}

switch (frutaNum) {
  case 1:
    console.log("Es una manzana roja");
    break;
  case 2:
    console.log("Es un plátano amarillo");
    break;
  case 3:
    console.log("Es una uva morada");
    break;
  default:
    console.log("Fruta no reconocida");
}