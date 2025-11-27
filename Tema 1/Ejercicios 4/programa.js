//--------------- 4.10
for (let i = 1; i <= 6; i++) {
    document.write("<h" + i + ">Cabecera h" + i + "</h" + i + ">");
}


//-------------- 4.11
let columnas = Number(prompt("Introduce el número de columnas:"));
let alto = Number(prompt("Introduce la altura (en píxeles):"));
let ancho = Number(prompt("Introduce el ancho (en píxeles):"));

document.write("<table border='0' cellspacing='2' bgcolor='black'>");
document.write("<tr bgcolor='white' height='" + alto + "'>");

for (let i = 1; i <= columnas; i++) {
    document.write("<td width='" + ancho + "'></td>");
    }

document.write("</tr>");
document.write("</table>");

//-------------- 4.12
let filas12 = Number(prompt("Introduce el número de filas (4.12):"));
let columnas12 = Number(prompt("Introduce el número de columnas (4.12):"));
let alto12 = Number(prompt("Introduce la altura (en píxeles) (4.12):"));
let ancho12 = Number(prompt("Introduce el ancho (en píxeles) (4.12):"));

document.write("<h2>Ejercicio 4.12</h2>");
document.write("<table border='0' cellspacing='2' bgcolor='black'>");

for (let i12 = 1; i12 <= filas12; i12++) {
    document.write("<tr bgcolor='white' height='" + alto12 + "'>");
    for (let j12 = 1; j12 <= columnas12; j12++) {
        document.write("<td width='" + ancho12 + "'></td>");
    }
    document.write("</tr>");
}

document.write("</table><br><br>");


//-------------- 4.13
let columnas13 = Number(prompt("Introduce el número de columnas (4.13):"));
let alto13 = Number(prompt("Introduce la altura (en píxeles) (4.13):"));
let ancho13 = Number(prompt("Introduce el ancho (en píxeles) (4.13):"));

document.write("<h2>Ejercicio 4.13</h2>");
document.write("<table border='0' cellspacing='2' bgcolor='black'>");
document.write("<tr bgcolor='white' height='" + alto13 + "'>");

let i13 = 1;
while (i13 <= columnas13) {
    document.write("<td width='" + ancho13 + "'></td>");
    i13++;
}

document.write("</tr>");
document.write("</table><br><br>");


//-------------- 4.14
let filas14 = Number(prompt("Introduce el número de filas (4.14):"));
let columnas14 = Number(prompt("Introduce el número de columnas (4.14):"));
let alto14 = Number(prompt("Introduce la altura (en píxeles) (4.14):"));
let ancho14 = Number(prompt("Introduce el ancho (en píxeles) (4.14):"));

document.write("<h2>Ejercicio 4.14</h2>");
document.write("<table border='0' cellspacing='2' bgcolor='black'>");

let i14 = 1;
while (i14 <= filas14) {
    document.write("<tr bgcolor='white' height='" + alto14 + "'>");
    let j14 = 1;
    while (j14 <= columnas14) {
        document.write("<td width='" + ancho14 + "'></td>");
        j14++;
    }
    document.write("</tr>");
    i14++;
}

document.write("</table><br><br>");


//-------------- 4.15
let num_adivinar15 = Number(prompt("Jugador 1 (4.15): introduce el número a adivinar:"));
let num15 = Number(prompt("Jugador 2 (4.15): intenta adivinar el número"));

while (num15 !== num_adivinar15) {
    if (num15 < num_adivinar15) {
        alert("El número es mayor");
    } else {
        alert("El número es menor");
    }
    num15 = Number(prompt("Intenta de nuevo (4.15):"));
}

alert("¡Correcto! Has adivinado el número (4.15)");


//-------------- 4.16
let num_adivinar16 = Number(prompt("Jugador 1 (4.16): introduce el número a adivinar:"));
let num16;

do {
    num16 = Number(prompt("Jugador 2 (4.16): intenta adivinar el número"));
    if (num16 < num_adivinar16) {
        alert("El número es mayor");
    } else if (num16 > num_adivinar16) {
        alert("El número es menor");
    }
} while (num16 !== num_adivinar16);

alert("¡Correcto! Has adivinado el número (4.16)");


//-------------- 4.17
document.write("<h2>Ejercicio 4.17</h2>");
for (let i17 = 1; i17 <= 10; i17++) {
    document.write("<h3>Tabla del " + i17 + "</h3>");
    for (let j17 = 1; j17 <= 10; j17++) {
        document.write(i17 + " x " + j17 + " = " + (i17 * j17) + "<br>");
    }
    document.write("<br>");
}


//-------------- 4.18
let filas18 = Number(prompt("Introduce el número de filas (4.18):"));
let columnas18 = Number(prompt("Introduce el número de columnas (4.18):"));
let alto18 = Number(prompt("Introduce la altura (en píxeles) (4.18):"));
let ancho18 = Number(prompt("Introduce el ancho (en píxeles) (4.18):"));

document.write("<h2>Ejercicio 4.18</h2>");
document.write("<table border='0' cellspacing='2' bgcolor='black'>");

for (let i18 = 1; i18 <= filas18; i18++) {
    document.write("<tr bgcolor='white' height='" + alto18 + "'>");
    for (let j18 = 1; j18 <= columnas18; j18++) {
        document.write("<td width='" + ancho18 + "'></td>");
    }
    document.write("</tr>");
}

document.write("</table><br><br>");


//-------------- 4.19
let ancho19 = Number(prompt("Introduce el ancho (y alto) de la celda (4.19):"));

document.write("<h2>Ejercicio 4.19</h2>");
document.write("<table border='0' cellspacing='0'>");

for (let i19 = 0; i19 < 8; i19++) {
    document.write("<tr height='" + ancho19 + "'>");
    for (let j19 = 0; j19 < 8; j19++) {
        if ((i19 + j19) % 2 === 0) {
            document.write("<td width='" + ancho19 + "' bgcolor='white'></td>");
        } else {
            document.write("<td width='" + ancho19 + "' bgcolor='black'></td>");
        }
    }
    document.write("</tr>");
}

document.write("</table><br><br>");
