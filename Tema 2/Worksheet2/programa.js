/* 
console.log(Math.random())
console.log(Math.random() * 100 + 100)
a = Number(prompt("Valor 1:"))
b = Number(prompt("Valor 2:"))
console.log(Math.random() * (b - a) + a)
*/

/* 
angulo = Number(prompt("Dime un ángulo"))
console.log("Seno:", Math.sin(angulo))
console.log("Coseno:", Math.cos(angulo))
console.log("Tangente:", Math.tan(angulo))
*/

/* 
c1 = Number(prompt("Cateto 1:"))
c2 = Number(prompt("Cateto 2:"))
h = Math.sqrt(c1*c1 + c2*c2)
console.log("Hipotenusa:", h)
*/

/* 
seguir = "si"
while (seguir == "si") {
    c1 = Number(prompt("Cateto 1:"))
    c2 = Number(prompt("Cateto 2:"))
    h = Math.sqrt(c1*c1 + c2*c2)
    console.log("Hipotenusa:", h)
    seguir = prompt("¿Quieres seguir? (si/no)")
}
*/

/* 
a = Number(prompt("Coeficiente a"))
b = Number(prompt("Coeficiente b"))
c = Number(prompt("Coeficiente c"))

d = b*b - 4*a*c

if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2*a)
    x2 = (-b - Math.sqrt(d)) / (2*a)
    console.log("Soluciones:", x1, x2)
} else if (d == 0) {
    x = -b / (2*a)
    console.log("Solución única:", x)
} else {
    console.log("No tiene soluciones reales")
}
*/

/* 
base = Number(prompt("Base:"))
exp = Number(prompt("Exponente:"))
console.log("Resultado:", Math.pow(base, exp))
*/

/* 
for (i = 1; i <= 10; i++) {
    console.log(i, Math.sin(i))
}
*/

/* 
n = Math.floor(Math.random() * 3) + 1
if (n == 1) {
    document.write("<img src='img1.jpg'>")
}
if (n == 2) {
    document.write("<img src='img2.jpg'>")
}
if (n == 3) {
    document.write("<img src='img3.jpg'>")
}
*/
