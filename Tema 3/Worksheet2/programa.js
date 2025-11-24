// 🟢 Nivel Básico – Fundamentos de Arrays

frutas = ["manzana","banana","pera","naranja","uva"]
console.log("Primera fruta:", frutas[0])
console.log("Última fruta:", frutas[frutas.length-1])

frutas.push("kiwi")
console.log("Después de push:", frutas)
frutas.pop()
console.log("Después de pop:", frutas)
frutas.unshift("mango")
console.log("Después de unshift:", frutas)
frutas.shift()
console.log("Después de shift:", frutas)

console.log("Recorrer con for:")
for(i=0;i<frutas.length;i++){
    console.log(frutas[i])
}

console.log("Recorrer con for...of:")
for(f of frutas){
    console.log(f)
}

console.log("Recorrer con forEach:")
frutas.forEach(f => console.log(f))

numeros = [1,2,3,4,5]
console.log("Índice de 3:", numeros.indexOf(3))
console.log("Incluye 7:", numeros.includes(7))

masNumeros = [6,7,8]
concatenados = numeros.concat(masNumeros)
console.log("Concatenados:", concatenados)


// 🟡 Nivel Intermedio – Transformación y Filtrado

duplicados = []
for(i=0;i< numeros.length;i++){
    duplicados.push(numeros[i]*2)
}
console.log("Duplicados:", duplicados)

pares = []
for(i=0;i<numeros.length;i++){
    if(numeros[i]%2==0){
        pares.push(numeros[i])
    }
}
console.log("Pares:", pares)

suma = 0
for(i=0;i<numeros.length;i++){
    suma += numeros[i]
}
console.log("Suma total:", suma)

nombres = ["Luis","Ana","Marta","Carlos"]
nombresOrdenados = [...nombres].sort()
console.log("Orden alfabético:", nombresOrdenados)
nombresOrdenadosRev = [...nombres].sort().reverse()
console.log("Orden inverso:", nombresOrdenadosRev)

joinNombres = nombres.join(",")
console.log("Join:", joinNombres)

cadena = "hola,como,estas"
arrDesdeCadena = cadena.split(",")
console.log("Split:", arrDesdeCadena)


// 🔵 Nivel Avanzado – Manipulación y Combinaciones

arrayConDuplicados = [1,2,3,2,4,1]
sinDuplicados = []
for(i=0;i<arrayConDuplicados.length;i++){
    if(sinDuplicados.indexOf(arrayConDuplicados[i])==-1){
        sinDuplicados.push(arrayConDuplicados[i])
    }
}
console.log("Sin duplicados:", sinDuplicados)

console.log("Máximo:", Math.max(...numeros))
console.log("Mínimo:", Math.min(...numeros))

arr2D = [[1,2],[3,4]]
aplanado = []
for(i=0;i<arr2D.length;i++){
    for(j=0;j<arr2D[i].length;j++){
        aplanado.push(arr2D[i][j])
    }
}
console.log("Aplanado:", aplanado)

conteo = {}
for(i=0;i<numeros.length;i++){
    n = numeros[i]
    if(conteo[n]==undefined) conteo[n]=0
    conteo[n]++
}
console.log("Conteo elementos:", conteo)

personas = [{nombre:"Ana",edad:23},{nombre:"Luis",edad:30}]
soloNombres = []
for(i=0;i<personas.length;i++){
    soloNombres.push(personas[i].nombre)
}
console.log("Solo nombres:", soloNombres)

nombresArray = ["Ana","Luis","Marta"]
edadesArray = [23,30,20]
combinados = []
for(i=0;i<nombresArray.length;i++){
    combinados.push({nombre:nombresArray[i],edad:edadesArray[i]})
}
console.log("Combinados:", combinados)

usuarios = [{nombre:"Ana",edad:25},{nombre:"Luis",edad:30},{nombre:"Marta",edad:20}]
usuarios.sort(function(a,b){return a.edad-b.edad})
console.log("Usuarios ordenados por edad:", usuarios)

numerosConRepetidos = [5,2,3,2,1,5]
unicosOrdenados = []
for(i=0;i<numerosConRepetidos.length;i++){
    if(unicosOrdenados.indexOf(numerosConRepetidos[i])==-1){
        unicosOrdenados.push(numerosConRepetidos[i])
    }
}
unicosOrdenados.sort(function(a,b){return a-b})
console.log("Únicos ordenados:", unicosOrdenados)

sumaCuadradosPares = 0
for(i=0;i<numeros.length;i++){
    if(numeros[i]%2==0){
        sumaCuadradosPares += numeros[i]*numeros[i]
    }
}
console.log("Suma cuadrados pares:", sumaCuadradosPares)