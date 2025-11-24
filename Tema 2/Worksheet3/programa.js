/* 
function invierteCadena(cad_arg) {
    return cad_arg.split("").reverse().join("")
}
console.log(invierteCadena("hola"))
*/

/* 
function inviertePalabras(cad_arg) {
    palabras = cad_arg.split(" ")
    for (i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].split("").reverse().join("")
    }
    return palabras.join(" ")
}
console.log(inviertePalabras("hola mundo"))
*/

/* 
function encuentraPalabraMasLarga(cad_arg) {
    palabras = cad_arg.split(" ")
    mayor = 0
    for (i = 0; i < palabras.length; i++) {
        if (palabras[i].length > mayor) {
            mayor = palabras[i].length
        }
    }
    return mayor
}
console.log(encuentraPalabraMasLarga("javascript es poderoso"))
*/

/* 
function filtraPalabrasMasLargas(cad_arg, i) {
    palabras = cad_arg.split(" ")
    cont = 0
    for (j = 0; j < palabras.length; j++) {
        if (palabras[j].length > i) {
            cont++
        }
    }
    return cont
}
console.log(filtraPalabrasMasLargas("hola esto es una prueba", 3))
*/

/* 
function cadenaBienFormada(cad_arg) {
    cad_arg = cad_arg.toLowerCase()
    return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1)
}
console.log(cadenaBienFormada("hOLA mUnDo"))
*/

/* 
function infoCadena(cad) {
    if (cad === cad.toUpperCase()) {
        console.log("Solo mayúsculas")
    } else if (cad === cad.toLowerCase()) {
        console.log("Solo minúsculas")
    } else {
        console.log("Mezcla de ambas")
    }
}
infoCadena("HOLA")
infoCadena("hola")
infoCadena("HoLa")
*/

/* 
function buscarSubcadenas(texto, sub) {
    pos = texto.indexOf(sub)
    while (pos != -1) {
        console.log("Encontrado en:", pos)
        pos = texto.indexOf(sub, pos + 1)
    }
}
buscarSubcadenas("hola hola hola", "la")
*/

/* 
function consonantesVocales(cad) {
    vocales = "aeiouAEIOU"
    con = ""
    voc = ""
    for (i = 0; i < cad.length; i++) {
        c = cad[i]
        if (c != " ") {
            if (vocales.includes(c)) {
                voc += c
            } else {
                con += c
            }
        }
    }
    return con + voc
}
console.log(consonantesVocales("hola mundo"))
*/

/* 
function eliminarRepetidos(cad) {
    nueva = ""
    for (i = 0; i < cad.length; i++) {
        if (!nueva.includes(cad[i])) {
            nueva += cad[i]
        }
    }
    return nueva
}
console.log(eliminarRepetidos("holaa mundo"))
*/

/* 
function esSubcadena(cad1, cad2) {
    pos = cad1.indexOf(cad2)
    if (pos != -1) {
        console.log("Sí es subcadena. Posición:", pos)
    } else {
        console.log("No es subcadena")
    }
}
esSubcadena("hola mundo", "mundo")
*/

/* 
function esPalindromo(cad) {
    cad2 = cad.split("").reverse().join("")
    if (cad === cad2) {
        console.log("Es palíndromo")
    } else {
        console.log("No lo es")
    }
}
esPalindromo("radar")
*/

/* 
function contarPalabras(cad) {
    cad = cad.trim()
    cad = cad.replace(/\s+/g, " ")
    palabras = cad.split(" ")
    return palabras.length
}
console.log(contarPalabras("  hola   mundo   esto   es  "))
*/

/* 
function tablaPalabra(pal) {
    n = pal.length

    for (i = 0; i < n; i++) {
        linea = ""
        for (j = 0; j < n; j++) {
            if (i == 0) linea += pal[j] + " "
            else if (i == n-1) linea += pal[n-j-1] + " "
            else if (j == 0) linea += pal[i] + " "
            else if (j == n-1) linea += pal[n-i-1] + " "
            else linea += "  "
        }
        console.log(linea)
    }
}
tablaPalabra("HOLA")
*/