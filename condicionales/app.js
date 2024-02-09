/* Condicionales */
/* IF ELSE */
/* let edadIngresada = prompt( "Ingrese su edad" ) 
let esMayor = Number(edadIngresada) >= 18
let vieneAcompañado = false

if ( esMayor || vieneAcompañado) {
    let nombreIngresado = prompt('Ingrese su nombre')
    if (nombreIngresado) {
        console.log(`Bienvenido/a ${nombreIngresado}`)
    } else {
        console.log(`Bienvenido/a`)
    }
}else{
    console.log('No puede pasar')
} */

/* ELSE IF */
/* 
let colectivo = false
let uber = false

if( colectivo ){
    console.log('Voy en colectivo')
}else if( uber ){
    console.log('Voy en uber')
}else{
    console.log('Me vuelvo a mi casa')
} */

/* const edad = 5
const precioEntrada = 10
if( edad <= 5 ){
    console.log( 'La entrada es gratis' )
}else if( edad <= 12 ){
    console.log('La entrada cuesta:$ ' + precioEntrada * 0.5)
}else if( edad < 65 ){
    console.log('La entrada cuesta:$ ' + precioEntrada)
}else{
    console.log('La entrada cuesta:$ ' + precioEntrada * 0.2)
} */

/* console.log('Después del condicional') */


/* Valores falsy 
    "" string vacio
    0
    -0
    null
    undefined
    NaN
    false
*/

/* const operacion = prompt( 'Ingrese la operación: sumar, restar, multiplicar, dividir' )
const num1 = Number(  prompt('Ingrese el primer numero')  )
const num2 = Number(  prompt('Ingrese el segundo numero')  )

switch (operacion) {
    case "sumar":
        console.log(`El resultado de la suma es: ${ num1 + num2 }`); 
        break;
    case "restar":
        console.log(`El resultado de la resta es: ${ num1 - num2 }`);
        break;
    case "multiplicar":
        console.log(`El resultado de la multiplicacion es: ${ num1 * num2 }`);
        break;
    case "dividir":
        console.log(`El resultado de la division es: ${ num1 / num2 }`);
        break;
    default:
        console.log('Operacion no valida');
        break;
} */

/* const edadIngresada = Number( prompt('Ingrese su edad') )
const iAmAdult = edadIngresada >= 18
const example = 18 <= edadIngresada

console.log( "I am an adult: " + !example) */