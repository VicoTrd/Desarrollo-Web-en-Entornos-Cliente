// Ej 1

function maximo(a, b, c, d){
    let max = a;
    if(b > max) max = b;
    if(c > max) max = c;
    if(d > max) max = d;
    return max;
}

let v1 = parseInt(prompt("Valor 1:"));
let v2 = parseInt(prompt("Valor 2:"));
let v3 = parseInt(prompt("Valor 3:"));
let v4 = parseInt(prompt("Valor 4:"));

console.log(maximo(v1, v2, v3, v4));


// Ej 2

function lanzamiento(){
    return Math.floor(Math.random()*6)+1;
}

console.log(lanzamiento());


// Ej 3

let resultados = [0,0,0,0,0,0];

for(let i = 0 ; i < 6000 ; i++){
    let tirada = lanzamiento();
    resultados[tirada-1]++;
}

console.log(resultados);



// Ej 4

function volumenEsfera(r){
    return (4/3) * Math.PI * (r*r*r);
}

let r = parseFloat(prompt("Radio esfera:"));
console.log(volumenEsfera(r));



// Ej 5

function areaCirculo(r){
    return Math.PI * (r*r);
}

let r2 = parseFloat(prompt("Radio círculo:"));
console.log(areaCirculo(r2));



// Ej 6

function potencia(base, exp){
    if(exp == 0)
        return 1;
    else
        return base * potencia(base, exp-1);
}

console.log(potencia(2,5));



// Ej 7

function factorial(n){
    let f = 1;
    for(let i = 1 ; i <= n ; i++){
        f = f * i;
    }
    return f;
}

for(let i = 1 ; i <= 10 ; i++){
    console.log(i, factorial(i));
}
