/* Funciones */

/* Declaracion funcion */

function comprobarIngreso() {
    let edadIngresada = prompt("Ingrese su edad")
    let vieneAcompañado = confirm("¿Viene acompañado?")
    let esMayor = Number(edadIngresada) >= 18

    if (esMayor || vieneAcompañado) {
        let nombreIngresado = prompt('Ingrese su nombre')
        if (nombreIngresado) {
            console.log(`Bienvenido/a ${nombreIngresado}`)
        } else {
            console.log(`Bienvenido/a`)
        }
    }
    else {
        console.log('No puede pasar')
    }
}

/* comprobarIngreso() */

/* Expresion de funcion */

const fn = function () {
    console.log('funcion de prueba')
}
/* fn() */

/* let nombre = "Eric" */

/* Funcion anonima */
const fnAnonima = function () {
    let nombre = "Juan"
    console.log(nombre)
}

/* fnAnonima()
fnAnonima()
console.log( nombre ) */


/* Scope */
/* let y const tienen scope de bloque */
/* {
    let nombre = "Agustin"
    {
        console.log(nombre)
    }
} */

/* var tiene scope local */
/* {
    {
        var apellido = "Agustina"
    }

}
console.log(apellido) */



/* Parametros y Return */

function sumar( num, num2, num3 ){
    let resultado = num + num2 + num3
    return {
        mensaje: `El resultado de la suma es: ${resultado}`,
        resultado : resultado
    }
}

/* const resultadoUno = sumar( 15, 20, 50 )  
console.log( resultadoUno )
const resultadoDos = sumar( 100, 200, -50 )
console.log( resultadoDos )
const resultadoTres = sumar( -100, 5, 17 )
console.log( resultadoTres ) */


/* Responsabilidad unica */
/* Nombres descriptivos ( verbos ) */
/* No buscar ningun dato externo, todo se recibe por parametros */
/* Las funciones no modifican nada que este fuera de la funcion */


/* Cuando la funcion no retorna nada, es un procedimiento */
function comprobarIngreso() {
    let edadIngresada = prompt("Ingrese su edad")
    let vieneAcompañado = confirm("¿Viene acompañado?")
    let esMayor = validarEdad( edadIngresada )

    if (esMayor || vieneAcompañado) {
        let nombreIngresado = prompt('Ingrese su nombre')
        darBienvenida(nombreIngresado)
    }
    else {
        console.log('No puede pasar')
    }
}

function validarEdad(edad){
    return Number(edad) >= 18
}

function darBienvenida( nombre ){
    if (nombre) {
        console.log(`Bienvenido/a ${nombre}`)
    } else {
        console.log(`Bienvenido/a`)
    }
}

console.log( "2023-05-15" > "2023-05-16" )