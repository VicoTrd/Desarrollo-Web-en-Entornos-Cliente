/* 
fecha = new Date()

console.log("Año:", fecha.getFullYear())
console.log("Mes:", fecha.getMonth() + 1)
console.log("Día:", fecha.getDate())
console.log("Hora:", fecha.getHours())
console.log("Minutos:", fecha.getMinutes())
console.log("Segundos:", fecha.getSeconds())
*/

/* 
fechaHoy = new Date()
console.log("Hoy:", fechaHoy)

fecha85 = new Date(fechaHoy)
fecha85.setDate(fechaHoy.getDate() + 85)
console.log("Hoy + 85 días:", fecha85)

fecha187 = new Date(fechaHoy)
fecha187.setDate(fechaHoy.getDate() - 187)
console.log("Hoy - 187 días:", fecha187)

fechaMas2Anios = new Date(fecha85)
fechaMas2Anios.setFullYear(fecha85.getFullYear() + 2)
console.log("fecha85 + 2 años:", fechaMas2Anios)

fecha187Menos24h = new Date(fecha187)
fecha187Menos24h.setHours(fecha187.getHours() - 24)
console.log("fecha187 - 24 horas:", fecha187Menos24h)

fechaResto = fecha85 - fecha187
console.log("Diferencia en milisegundos:", fechaResto)
*/

/* 
contador = 60

function contar() {
    console.log(contador)
    contador--

    if (contador >= 0) {
        setTimeout(contar, 1000)
    }
}

contar()
*/


/* 
contador = 10

function cuentaAtras() {
    console.log(contador)
    contador--

    if (contador < 0) {
        location.href = "https://www.google.com"
    } else {
        setTimeout(cuentaAtras, 1000)
    }
}

cuentaAtras()
*/


/* 
function reloj() {
    f = new Date()

    h = f.getHours().toString().padStart(2, "0")
    m = f.getMinutes().toString().padStart(2, "0")
    s = f.getSeconds().toString().padStart(2, "0")

    console.log(h + ":" + m + ":" + s)

    setTimeout(reloj, 1000)
}

reloj()
*/


