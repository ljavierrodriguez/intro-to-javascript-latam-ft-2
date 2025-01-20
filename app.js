/* Tipo de Datos */
/* 
1.- Number: 30 -45 10.4
2.- String: luis pedro parte1 ('', "", ``)
3.- Boolean: true o false
4.- Undefined: carece de valor o no esta definido
5.- Object: 
    5.1.- Array [] array()
    5.2.- Literal Object {}
    5.3.- Null
*/

// var let const

// Number
let edad = 30; // number
let precio = 10.50; // number

// String ('', "", ``)

let nombre = "Luis"; // Luis
let apellido = 'Rodriguez'; // Rodriguez
//let nombreCompleto = `Mi nombre es: ${nombre} ${apellido}`; // Luis Rodriguez

// Boolean true (verdadero) o false (falso)

let esMayorDeEdad = true;
let tieneLicencia = false;

// Undefined

let tiempo; // undefined
console.log(tiempo) // undefined

// Null 

let status = null

// Literal Object

let persona = {
    nombre: 'John',
    edad: 30
}

console.log(persona.edad) // 30

// Array 

let notas = [10, 15, 21, 5, 23, 12, 9]
let nombres = ["Hugo", "Paco", "Luis", "Mickey", "Donald"]
let estudiantes = [{ name: 'Mickey' }, { name: 'Donald' }, { name: 'Goofy' }]

console.log(notas[4])

console.log(estudiantes[1].name)

/* 

if (condicion) {
    // si es verdadero se ejecuta todas las acciones aqui presente
}

if (condicion) {
    // si es verdadero se ejecuta todas las acciones aqui presente
} else {
    / si es false se ejecuta todas las acciones aqui presente
}

if (condicion) {

} else if (condicion) {
 
} else if (condicion) {
 
} else {
 
}

*/

let a = 8
let b = '8'
let c = 15

if (a == 10) {

}

if (a !== b) {

} else {

}

if (a > b && a > c) {
    console.log(a)
} else if (b > c) {
    console.log(b)
} else {
    console.log(c)
}

// Operadores Logicos
// and => && or => || not => !

// Operadores de Comparacion
/*
==
===
!=
!==
>=
<=
>
<

*/

console.log(a !== b)

let opcion = 4

switch (opcion) {
    case 1:
        console.log("Has seleccionado 1")
        break;
    case 2:
        console.log("Has seleccionado 2")
        break;
    case 4:
        console.log("Has seleccionado 4")
        break;

    default:
        console.log("Has seleccionado una opcion no valida")
        break;
}


// Funciones 

/* 

function funcName(){
    // codigo 
}

const funcName = function(){
    // codigo
}


const sumar = (a, b) => a + b

const restar = (a, b) => {
    return a - b    
}

Ejemplos:

console.log(sumar(5, 5)) // 10

*/


function saludar(nombre) {
    return `Saludos, ${nombre} bienvenido`
}

const sumar = (a, b) => a + b


console.log(saludar("Samantha")) // Saludos, Samantha Bienvenido

console.log(sumar(10, 8)) // 18
console.log(sumar(14, 6)) // 20
console.log(sumar(9, 7)) // 16
console.log(sumar(128, 410)) // 18

/* 
for(contador; condicion; incremento){
    //codigo
}
 */



function nombreFuncion() {
    for (let i = 1; i <= 300; i++) {
        console.log(i)
    }
}

function nombreCompleto(nombre, apellido) {
    return `${nombre} ${apellido}`
}

console.log(nombreCompleto("Carolina", "Straub"))
console.log(nombreCompleto("Samantha", "Morales"))
console.log(nombreCompleto("Carlos", "Vivanco"))

function obtenerMayorDeTresNumeros(a, b, c) {
    if (a > b && a > c) {
        return "a:" + a
    } else if (b > c) {
        return "b:" + b
    } else {
        return "c:" + c
    }
}

console.log(obtenerMayorDeTresNumeros(1, 2, 3)) // c: 3
console.log(obtenerMayorDeTresNumeros(3, 2, 1)) // a: 3
console.log(obtenerMayorDeTresNumeros(2, 3, 1)) // b: 3
console.log(obtenerMayorDeTresNumeros(89, 56, 120)) // b: 3