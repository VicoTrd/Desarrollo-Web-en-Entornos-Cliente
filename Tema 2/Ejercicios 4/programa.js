/* 
cadena = "JavaScript"
console.log(cadena.length)
*/

/* 
cadena = "Hola mundo"
console.log(cadena[0])
console.log(cadena[cadena.length - 1])
*/

/* 
frase = "Programar es divertido"
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
*/

/* 
c1 = "Hola"
c2 = "Mundo"
console.log(c1 + " " + c2)
console.log(c1.concat(" ", c2))
*/

/* 
cadena = "Hola mundo"
console.log(cadena.indexOf("o"))
console.log(cadena.lastIndexOf("o"))
*/

/* 
cadena = "JavaScript es genial"
console.log(cadena.substring(0, 10))
console.log(cadena.slice(-6))
*/

/* 
frase = "El perro corre rápido"
console.log(frase.replace("perro", "gato"))
*/

/* 
cadena = "Frontend Developer"
console.log(cadena.includes("end"))
console.log(cadena.startsWith("Front"))
console.log(cadena.endsWith("per"))
*/

/* 
colores = "rojo,verde,azul,amarillo"
console.log(colores.split(","))
*/

/* 
console.log("Hola".repeat(5))
*/

/* 
cadena = "   Hola mundo   "
console.log(cadena.trim())
*/

/* 
num = "7"
console.log(num.padStart(3, "0"))
*/

/* contar vocales 
cadena = "Programar es espectacular"
vocales = cadena.match(/[aeiouáéíóú]/gi)
console.log(vocales ? vocales.length : 0)
*/

/* palíndromo 
palabra = "radar"
invertida = palabra.split("").reverse().join("")
console.log(invertida)
*/

/* invertir string 
texto = "JavaScript"
console.log(texto.split("").reverse().join(""))
*/

/* capitalizar 
frase = "hola mundo desde javascript"
palabras = frase.split(" ")
for (i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1)
}
console.log(palabras.join(" "))
*/

/* ocultar tarjeta 
tarjeta = "1234567812345678"
oculta = tarjeta.slice(-4).padStart(tarjeta.length, "*")
console.log(oculta)
*/

/* contar palabras 
frase = "El lenguaje JavaScript es muy poderoso"
console.log(frase.split(" ").length)
*/
