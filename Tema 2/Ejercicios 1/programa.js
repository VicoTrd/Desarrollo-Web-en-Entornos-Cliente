/*

console.log(Number("123"));      // 123  -> Convierte la cadena a número
console.log(Number("3.14"));     // 3.14 -> Convierte número decimal
console.log(Number("abc"));      // NaN  -> No se puede convertir

console.log(parseInt("123"));    // 123  -> Convierte a entero
console.log(parseInt("3.14"));   // 3    -> Solo toma la parte entera
console.log(parseInt("abc"));    // NaN  -> No es un número válido al inicio

console.log(parseFloat("123"));  // 123  -> Convierte a número
console.log(parseFloat("3.14")); // 3.14 -> Convierte decimal
console.log(parseFloat("abc"));  // NaN  -> No se puede convertir

*/


/*
function esEntero(valor) {
  return Number.isInteger(valor);
}

console.log(esEntero(10));    // true
console.log(esEntero(3.14));  // false
console.log(esEntero("5"));   // false
*/



/*
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(0/0)); 
console.log(Number.isNaN(parseInt("abc")));

*/

/*
let resultado = 1 / 0;
console.log(resultado);                 
console.log(Number.isFinite(resultado)); 
*/


/*
var num = 3.141592;

console.log(num.toFixed(2));
console.log(num.toFixed(4));
console.log(num.toFixed(6));
*/


/*
var num = 123456;

console.log(num.toExponential(2));
*/


/*
let num = 255;

console.log("Binario:", num.toString(2));   // 11111111
console.log("Octal:", num.toString(8));     // 377
console.log("Hexadecimal:", num.toString(16)); // ff
*/


/*
var num = 123.456789;

console.log(num.toPrecision(4));
*/

function validarNumero(cadena) {
    let num = Number(cadena);

    if (isNaN(num)) {
        return "No es un número válido";
    }

    if (Number.isInteger(num)) {
        return "Es un número válido y es un ENTERO";
    } else {
        return "Es un número válido y es un DECIMAL";
    }
}

// Ejemplos de uso:
console.log(validarNumero("123"));
console.log(validarNumero("123.45"));
console.log(validarNumero("abc"));
