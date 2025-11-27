let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");
// Usa un condicional con && para determinar si puede entrar
if((edad>=18) && (permiso=="si"))
    console.log("Si puede entrar")
    else
        console.log("No puede entrar");

//----------------------
/*
let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");
// Usa un condicional con || para determinar si pasa al siguiente nivel

if((matematicas || fisica || quimica)=="no")
    console.log("No pasa")
    else
        console.log("Si pasa");

//-------------------------

let contraseñaCorrecta = "231786"
let contraseña = prompt("Ingrese la contraseña");
// Usa ! para comprobar si no es correcta
if(contraseña!=contraseñaCorrecta)
    console.log("Contraseña incorrecta");
    else
        console.log("Contraseña correcta");

//----------------------------------------

let numero = Number(prompt("Ingrese un número"));
// Usa && para verificar el rango
if((numero>=10) && (numero<=50))
    console.log("Está entre 10 y 50");

//-------------------------------------

let edad = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");
// Usa && y || según corresponda

if((edad>=18) || (tutor = "si"))
    console.log("Puede entrar");

//----------------------

let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su contraseña");
// Condicional usando && y ||

if(usuario == "usuario")
    console.log("Acceso correcto")

if((usuario == "admin") && (contraseña=="1234"))
    console.log("Acceso correcto");
    else
        console.log("Acceso incorrecto");

//-----------------------------

let numero = Number(prompt("Ingrese un número"));
// Usa operadores lógicos para evaluar ambas condiciones
if((numero>0) && (numero<100))
    console.log("Num positivo menor que 100");

//-----------------------------

let dia = prompt("Ingrese un día de la semana");
// Usa || para comparar con lunes, martes, miércoles, jueves, viernes

if(dia == ("lunes" || "martes" || "miercoles" || "jueves" || "viernes"))
    console.log("Es entre-semana");
    else
        console.log("Es fin de semana");

//-------------------------------
*/