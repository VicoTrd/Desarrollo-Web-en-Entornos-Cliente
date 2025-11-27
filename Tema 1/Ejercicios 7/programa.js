let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));
/*
// Tu código aquí para mostrar suma, resta, multiplicación y división

console.log("Suma: " + (a+b));
console.log("Resta: " + (a-b));
console.log("Multiplicacion: " + (a*b));
console.log("División: " + (a/b));

//--------------
let numero = Number(prompt("Ingrese un número"));
// Usa un condicional para determinar si es par o impar
if((numero%2)!=0){
    console.log("Es impar");
}
    else{
        console.log("Es par");
    }

let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));
// Escribe un condicional para encontrar el mayor

if(a>b && a>c)
    console.log("Num 1 es el mayor");
    else if(b>a && b>c)
        console.log("Num 2 es el mayor");
        else
            console.log("Num 3 es el mayor");

let num = Number(prompt("Ingrese un número"));
// Usa un bucle for para mostrar la tabla de multiplicar
for(let i = 1 ; i<=10 ; i++){
    console.log(num*i);
}

//----------------------
let N = Number(prompt("Ingrese un número"));
// Usa un bucle for y una variable acumuladora para sumar
for(let i = 1 ; i<=10 ; i++){
    console.log(N+i);
}

//----------------------------

let positivos = 0;
let negativos = 0;

for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Ingrese el número ${i+1}`));
    // Incrementa positivos o negativos según corresponda
    if(num>0)
        positivos++;
        else if(num<0)
            negativos++;
}
console.log("Positivos: " + positivos);
console.log("Negativos: " + negativos);

//-----------------

let num = Number(prompt("Ingrese un número"));
// Usa un bucle para verificar si es divisible por algún número menor que él
let i = 2;
while((num%i)!=0 && (i<num)){
    i++;

if((num%i)==0)
    console.log(num/i);
    else
        console.log("Primo");
}
//-----------------------

let numero = Number(prompt("Ingrese un número"));
let factorial = 1;
let resultado = 0;
// Calcula el factorial con un bucle
for(factorial = 1 ; factorial<=numero ; factorial++){
    resultado += numero*factorial;
    console.log(numero + " * " + factorial + " = " + resultado);
}

//---------------------------

let N = Number(prompt("Ingrese un número"));
// Usa un bucle y el operador % para imprimir los pares
for(let i = 1 ; i<N ; i++){
    if((N%i)==0)
        console.log(N/i);
}
*/
//------------------------------

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

while(intento !== numeroSecreto) {
    intento = Number(prompt("Adivina el número entre 1 y 10"));
    // Indica si el intento es mayor, menor o correcto
    if(numeroSecreto>intento)
        console.log("Es mayor");
        else if(intento<numeroSecreto)
            console.log("Es menor");
            else
                console.log("Has acertado.");
}