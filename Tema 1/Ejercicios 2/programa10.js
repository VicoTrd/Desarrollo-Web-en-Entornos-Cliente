let nota = prompt("Dime una nota(A, B, C, D, F)");
if(nota=="A"){
    let nota2 = 1;
}
if(nota=="B"){
    let nota2 = 2;
}
if(nota=="C"){
    let nota2 = 3;
}
if(nota=="D"){
    let nota2 = 4;
}
if(nota=="F"){
    let nota2 = 5;
}

switch(nota2){
    case 1:
        console.log("Excenlente");
        break;
    case 2:
        console.log("Muy bien");
        break;
    case 3:
        console.log("Bien");
        break;
    case 4:
        console.log("Suficiente");
        break;
    case 5:
        console.log("Reprobado");
        break;
    default:
        console.log("Nota inválidad");
}