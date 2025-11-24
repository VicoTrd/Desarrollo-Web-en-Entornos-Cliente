/*
function valorAbsoluto(num) {
    return Math.abs(num);
}


console.log(valorAbsoluto(-10));  
console.log(valorAbsoluto(7)); 
*/

/*
let entrada = prompt("Ingresa un número decimal:");
let numero = parseFloat(entrada);

console.log("Número original ", numero);
console.log("Redondeado: ", Math.round(numero));
console.log("Redondeo por exceso: ", Math.ceil(numero));
console.log("Redondeo por defecto: ", Math.floor(numero));
*/


/*
var num1 = 5;
var num2 = 81;
num1 = Math.pow(num1, 3);
console.log(num1);

num2 = Math.sqrt(num2, 2);
console.log(num2);
*/

/*
var numeros = [10, -5, 3, 99, 42];

var maximo = Math.max(...numeros);
var minimo = Math.min(...numeros);

console.log("Número más grande:", maximo);
console.log("Número más pequeño:", minimo);

var aleatorio = Math.random();
console.log("Número aleatorio entre 0 y 1:", aleatorio);
*/


/*
var dado = Math.random() * (6 + 1) + 1;
dado = parseInt(dado);
console.log(dado);
*/

/*
var min = prompt("Minimo: ");
var max = prompt("Máximo: ");
function numRango(aleatorio){
    aleatorio = parseInt(Math.random() * (max + min) + min);
}
console.log(aleatorio);
*/

/*
var grados = 45;
var radianes = (grados*Math.PI)/180;

var sen = Math.sin(radianes);
var cos = Math.cos(radianes);

console.log("Seno: " + sen, " Coseno: " + cos);
*/

/*
var grados = 60;
var radianes = (grados*Math.PI)/180;

var tan = Math.tan(radianes);
var valor2 = 80.9;
valor2 = Math.atan(valor2);

console.log("Tangente: " + tan, " Valor a grados: " + valor2);
*/


/*
var log = 10;
log = Math.log(log);

console.log(log);
*/


/*
var aleatorio = Math.random() * (100 + 1) + 1;
var numUsu = -1;

while(numUsu != aleatorio){
    numUsu = prompt("Dime un numero: ");

    if(numUsu > aleatorio)
        console.log("El numero es mayor");
        else if(numUsu < aleatorio)
            console.log("El numero es menor");
            else
                console.log("Has acertado");
}
*/


/*
var x1 = 1;
var x2 = 4;

var y1 = 2;
var y2 = 8;

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(distancia);
*/


/*
var ruleta = Math.random() * (36 + 0) + 0;
console.log(ruleta);
*/

/*
function generarPassword(longitud = 8) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";

    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        password += caracteres.charAt(indice);
    }

    return password;
}

console.log("Contraseña generada:", generarPassword());
*/