// Array de ejemplo
numeros = [34,21,32,41,25,14,42,43,14,31,54,45,52,42,23,33,15,51,31,35,21,52,33,13,23]
strings = ["this","is","a","test","of","arrays","javascript","is","fun"]
nombres = ["Jose Manuel","Antonio Vico","Juan Hantana","Julio Lopez","Manuel Diaz"]

// find largest number
mayor = numeros.reduce((a,b)=>a>b?a:b)
console.log("Mayor:", mayor)

// find longest string
masLarga = strings.reduce((a,b)=>a.length>b.length?a:b)
console.log("Más larga:", masLarga)

// find even numbers
pares = numeros.filter(n=>n%2==0)
console.log("Pares:", pares)

// find odd numbers
impares = numeros.filter(n=>n%2!=0)
console.log("Impares:", impares)

// find words that contain 'is'
contieneIs = strings.filter(s=>s.includes("is"))
console.log("Contiene 'is':", contieneIs)

// assert all numbers divisible by 3
todosDiv3 = numeros.every(n=>n%3==0)
console.log("Todos divisible por 3:", todosDiv3)

// zip two arrays together
a = [1,2,3]
b = ["a","b","c"]
zip = a.map((v,i)=>[v,b[i]])
console.log("Zip:", zip)

// sort joined array from smallest to largest
joinArrays = [...a,...[4,0,5]]
joinArrays.sort((x,y)=>x-y)
console.log("Array ordenado:", joinArrays)

// remove the first word in the array
strings.shift()
console.log("Sin primera palabra:", strings)

// place a new word at the start of the array
strings.unshift("hola")
console.log("Con palabra al inicio:", strings)

// replace some elements
strings.splice(2,2,"nuevo1","nuevo2")
console.log("Después de reemplazar:", strings)

// nombres que empiezan con J, proyectar iniciales y ordenar
conJ = nombres.filter(n=>n[0]=="J")
iniciales = conJ.map(n=>n.split(" ").map(p=>p[0]).join(""))
ordenadas = iniciales.sort()
console.log("Iniciales ordenadas:", ordenadas)


// Treasure hunt
mapa = [
 [34,21,32,41,25],
 [14,42,43,14,31],
 [54,45,52,42,23],
 [33,15,51,31,35],
 [21,52,33,13,23]
]

fila = 0
col = 0
salir = false
while(!salir){
  valor = mapa[fila][col]
  console.log("Celda visitada:", fila+1, col+1, "Valor:", valor)
  if(valor == (fila+1)*10 + (col+1)){
    console.log("Tesoro encontrado en:", fila+1, col+1)
    salir = true
  }
  nuevaFila = Math.floor(valor/10)-1
  nuevaCol = (valor%10)-1
  fila = nuevaFila
  col = nuevaCol
}