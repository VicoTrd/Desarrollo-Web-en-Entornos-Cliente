/*
function generarMatricula() {
/*  EJERCICIO 1: */
 /*
function generarMatricula() {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  let parteLetras = "";
  let parteNumeros = "";

  for (let i = 0; i < 3; i++) {
    let indice = Math.floor(Math.random() * letras.length);
    parteLetras += letras[indice];
  }
  for (let i = 0; i < 4; i++) {
    let indice = Math.floor(Math.random() * numeros.length);
    parteNumeros += numeros[indice];
  }
  return parteLetras + "-" + parteNumeros;
}

for (let i = 0; i < 5; i++) {
  console.log(generarMatricula());
}
*/
/* -------------------------------------- */


/*  EJERCICIO 2: */
 /*
let dados = Number(prompt("Dime un número de dados"));
let caras = Number(prompt("Dime un número de caras"));

let resultados = "";
let total = 0;

for (let i = 0; i < dados; i++) {
  let tirada = Math.floor(Math.random() * caras) + 1;
  resultados += tirada + (i < dados - 1 ? ", " : "");
  total += tirada;
}

console.log(dados + " dados de " + caras + " caras → " + resultados + " → total " + total);
*/
/* -------------------------------------- */


/*  EJERCICIO 3: */
 /*
let stringAlfanum = "abcdefghijklmnopqrstuvwxyz0123456789";
let resultado = "";

for (let i = 0; i < 16; i++) {
  let charAleatorio = Math.floor(Math.random() * stringAlfanum.length);
  resultado += stringAlfanum[charAleatorio];
}

console.log(resultado);
*/
/* -------------------------------------- */


/*  EJERCICIO 4: */
 /*
let contraseña = prompt("Introduce una contraseña: ");

let tieneMayus = false;
let tieneNum = false;
let tieneSimbolo = false;

for (let i = 0; i < contraseña.length; i++) {
  let c = contraseña[i];
  if (c >= "A" && c <= "Z") {
    tieneMayus = true;
  }
  if (c >= "0" && c <= "9") {
    tieneNum = true;
  }
  if ("!@#$%^&*()-_=+[]{};:,.<>?/".includes(c)) {
    tieneSimbolo = true;
  }
}

if (contraseña.length >= 8 && tieneMayus && tieneNum && tieneSimbolo) {
  console.log("Contraseña válida");
} else {
  console.log("Contraseña inválida");
  if (contraseña.length < 8) console.log("Debe tener al menos 8 caracteres");
  if (!tieneMayus) console.log("Debe tener al menos una mayúscula");
  if (!tieneNum) console.log("Debe tener al menos un número");
  if (!tieneSimbolo) console.log("Debe tener al menos un símbolo");
}
*/
/* -------------------------------------- */


/*  EJERCICIO 5:  */
 /*
let texto = prompt("Texto a comprimir:");
let comprimido = "";
let contador = 1;

for (let i = 0; i < texto.length; i++) {
  if (texto[i] === texto[i + 1]) {
    contador++;
  } else {
    comprimido += texto[i] + contador;
    contador = 1;
  }
}

console.log(comprimido);
*/
/* -------------------------------------- */


/*  EJERCICIO 6: */
 /*
let cadena = prompt("Texto comprimido:");
let descomprimido = "";

for (let i = 0; i < cadena.length; i += 2) {
  let letra = cadena[i];
  let cantidad = Number(cadena[i + 1]);
  for (let j = 0; j < cantidad; j++) {
    descomprimido += letra;
  }
}

console.log(descomprimido);
*/
/* -------------------------------------- */


/*  EJERCICIO 7: */
 /*
let secreto = Math.floor(Math.random() * 100) + 1;
let intentos = 7;
let acierto = false;

while (intentos > 0 && !acierto) {
  let numero = Number(prompt("Adivina el número (1-100). Intentos restantes: " + intentos));
  if (numero === secreto) {
    console.log("¡Acertaste!");
    acierto = true;
  } else if (numero < secreto) {
    console.log("El número es mayor");
  } else {
    console.log("El número es menor");
  }
  intentos--;
}

if (!acierto) {
  console.log("Has perdido, el número era: " + secreto);
}
*/
/* -------------------------------------- */


/*  EJERCICIO 8:  */
 /*
function generarTarjeta() {
  let numeros = [];
  for (let i = 0; i < 15; i++) {
    numeros.push(Math.floor(Math.random() * 10));
  }
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    let n = numeros[numeros.length - 1 - i];
    if (i % 2 === 0) {
      n = n * 2;
      if (n > 9) n -= 9;
    }
    suma += n;
  }
  let digitoControl = (10 - (suma % 10)) % 10;
  numeros.push(digitoControl);

  let tarjeta = "";
  for (let i = 0; i < 16; i++) {
    tarjeta += numeros[i];
    if ((i + 1) % 4 === 0 && i < 15) tarjeta += "-";
  }
  return tarjeta;
}

console.log(generarTarjeta());
*/
/* -------------------------------------- */


/*  EJERCICIO 9: */
 /*
let numeros = "10 20 30 40 50 60";
let arrayNum = numeros.split(" ").map(Number);

let suma = 0;
for (let n of arrayNum) {
  suma += n;
}
let promedio = suma / arrayNum.length;

arrayNum.sort((a, b) => a - b);
let mediana;
let mitad = Math.floor(arrayNum.length / 2);
if (arrayNum.length % 2 === 0) {
  mediana = (arrayNum[mitad - 1] + arrayNum[mitad]) / 2;
} else {
  mediana = arrayNum[mitad];
}

let sumaVarianza = 0;
for (let n of arrayNum) {
  sumaVarianza += (n - promedio) ** 2;
}
let desviacion = Math.sqrt(sumaVarianza / arrayNum.length);

console.log("Promedio: " + promedio);
console.log("Mediana: " + mediana);
console.log("Desviación estándar: " + desviacion);
*/
/* -------------------------------------- */


/*  EJERCICIO 10: */
 /*
let palabra = "javascript";
let oculta = "";
for (let i = 0; i < palabra.length; i++) {
  if (i % 2 === 0) {
    oculta += palabra[i] + " ";
  } else {
    oculta += "_ ";
  }
}
console.log(oculta);

let intentos = 6;
while (intentos > 0 && oculta.includes("_")) {
  let letra = prompt("Adivina una letra: ");
  let nueva = "";
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      nueva += letra + " ";
    } else {
      nueva += oculta[2 * i] + " ";
    }
  }
  if (oculta === nueva) {
    intentos--;
    console.log("Fallaste, te quedan " + intentos + " intentos");
  }
  oculta = nueva;
  console.log(oculta);
}

if (!oculta.includes("_")) {
  console.log("¡Ganaste!");
} else {
  console.log("Perdiste, la palabra era: " + palabra);
}
*/
/* -------------------------------------- */
