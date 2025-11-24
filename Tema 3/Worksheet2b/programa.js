// 1
clase = [
    "Angel Garcia, 20, 6, 7, 10",
    "Maria Lopez, 21, 8, 9, 7",
    "Juan Perez, 19, 5, 6, 8",
    "Laura Diaz, 22, 9, 8, 10",
    "Carlos Ruiz, 20, 7, 6, 9"
]
console.log(clase)

// 2
function notaEstudiante(numero, trimestre){
    datos = clase[numero].split(", ")
    if(trimestre==1) return Number(datos[2])
    if(trimestre==2) return Number(datos[3])
    if(trimestre==3) return Number(datos[4])
    suma = Number(datos[2])+Number(datos[3])+Number(datos[4])
    return suma/3
}
console.log("Nota 1er estudiante, 2do trimestre:", notaEstudiante(0,2))
console.log("Nota media 1er estudiante:", notaEstudiante(0))

// 3
function edadMedia(){
    suma = 0
    for(i=0;i<clase.length;i++){
        datos = clase[i].split(", ")
        suma += Number(datos[1])
    }
    return suma/clase.length
}
console.log("Edad media:", edadMedia())

// 4
function estudianteAleatorio(){
    i = Math.floor(Math.random()*clase.length)
    datos = clase[i].split(", ")
    return datos[0]
}
console.log("Estudiante al azar:", estudianteAleatorio())
console.log("Estudiante al azar:", estudianteAleatorio())

// 5
function paresImpares(){
    arr = []
    for(i=0;i<100;i++){
        arr.push(Math.floor(Math.random()*1000)+1)
    }
    console.log("Array original:", arr)
    pares = []
    impares = []
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0) pares.push(arr[i])
        else impares.push(arr[i])
    }
    arr = pares.concat(impares)
    console.log("Array pares e impares:", arr)
}
paresImpares()