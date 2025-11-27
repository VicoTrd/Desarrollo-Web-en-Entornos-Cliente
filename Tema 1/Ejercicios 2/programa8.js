let color = prompt("Dime un color");
let color2 = 0;
if(color=="rojo"){
    color2 = 1;
}
if(color=="amarillo"){
    color2 = 2;
}
if(color=="verde"){
    color2 = 3;
}

switch(color2){
    case 1:
        console.log("Alto");
        break;
    case 2:
        console.log("Precaución");
        break;
    case 3:
        console.log("Avanza");
        break;
    default:
        console.log("Color escogido incorrecto.");
}