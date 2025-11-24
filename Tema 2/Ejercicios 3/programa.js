/* 
fecha = new Date()
console.log(fecha)
*/

/* 
fecha = new Date("2006/08/09")
console.log(fecha)
*/

/* 
fecha = new Date()
console.log(fecha.getFullYear())
console.log(fecha.getMonth())
console.log(fecha.getDate())
console.log(fecha.getDay())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
*/

/* 
fecha = new Date()
console.log(fecha.toDateString())
console.log(fecha.toTimeString())
*/

/* 
fecha = new Date()
fecha.setDate(fecha.getDate() + 10)
console.log(fecha)
*/

/* 
fecha1 = new Date()
fecha2 = new Date(fecha1.getFullYear(), 11, 31)
diferencia = fecha2 - fecha1
dias = diferencia / (1000 * 60 * 60 * 24)
console.log(dias)
*/

/* 
fecha1 = new Date("2025/01/01")
fecha2 = new Date("2025/05/01")
console.log(fecha1 < fecha2)
console.log(fecha1 > fecha2)
*/

/* 
fecha = new Date(2025, 8, 1)
console.log(fecha.getDay())
*/

/* 
fecha = new Date()
console.log(fecha.toISOString())
*/

/* 
fecha = new Date()
console.log(fecha.toString())
console.log(fecha.toUTCString())
*/

/* 
fecha = new Date()
dia = fecha.getDate().toString().padStart(2, "0")
mes = (fecha.getMonth() + 1).toString().padStart(2, "0")
anio = fecha.getFullYear()
hora = fecha.getHours().toString().padStart(2, "0")
min = fecha.getMinutes().toString().padStart(2, "0")
seg = fecha.getSeconds().toString().padStart(2, "0")
console.log(dia + "/" + mes + "/" + anio + " " + hora + ":" + min + ":" + seg)
*/

/* 
fecha = new Date()
console.log(new Intl.DateTimeFormat("es-ES").format(fecha))
console.log(new Intl.DateTimeFormat("en-US").format(fecha))
console.log(new Intl.DateTimeFormat("ja-JP").format(fecha))
*/

/* 
ahora = new Date()
nuevo = new Date(ahora.getFullYear() + 1, 0, 1)
diferencia = nuevo - ahora
d = Math.floor(diferencia / (1000 * 60 * 60 * 24))
h = Math.floor((diferencia / (1000 * 60 * 60)) % 24)
m = Math.floor((diferencia / (1000 * 60)) % 60)
s = Math.floor((diferencia / 1000) % 60)
console.log(d, h, m, s)
*/

/* 
nacimiento = new Date("2000/05/15")
hoy = new Date()
edad = hoy.getFullYear() - nacimiento.getFullYear()
meses = hoy.getMonth() - nacimiento.getMonth()
dias = hoy.getDate() - nacimiento.getDate()
if (dias < 0) {
    meses--
}
if (meses < 0) {
    edad--
}
console.log(edad)
*/

/* 
anio = 2025
mes = 8
dias = new Date(anio, mes + 1, 0).getDate()
for (i = 1; i <= dias; i++) {
    console.log(new Date(anio, mes, i))
}
*/

/* 
fecha = new Date()
while (true) {
    fecha.setMonth(fecha.getMonth() + 1, 13)
    if (fecha.getDay() == 5) {
        console.log(fecha)
        break
    }
}
*/