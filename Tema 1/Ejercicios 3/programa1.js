for(let num = 0; num<=10 ; num++){
    console.log(num);
}

//-------------- 2
let num3 = 0;
for(let num2 = 0 ; num2<=5; num2++){
    num3 = num2 + num3;
}
console.log(num3);

//--------------- 3
let num4 = Number(prompt("Dime un numero"));
let res = 0;

for(let i = 0 ; i<=10 ; i++){
    res = num4*i;
    console.log(res);
}

//---------------- 4
let numWhile1 = 1;
while(numWhile1 < 11){
    numWhile1++;
    console.log(numWhile1);
}

//---------------- 5
let suma = 0;
let contador = 1;

while (suma < 20) {
    suma += contador;
    contador++;
}

console.log("La suma final es: " + suma);

//---------------- 6
let password;
do {
    password = prompt("Introduce la contraseña:");
} while (password !== "1234");

console.log("Contraseña correcta");

//---------------- 7
let numDo = 1;
do {
    console.log(numDo);
    numDo++;
} while (numDo <= 5);
