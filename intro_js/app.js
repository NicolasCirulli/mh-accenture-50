// tipos de datos
// String
/* console.log( "Nicolás" )
console.log( 'Catriel' )
console.log( `Cirulli` )

console.log( "$10" )
console.log( "10" ) */

//Number
/* console.log( 10 )
console.log( -10 )
console.log( -10.5 ) */

/* Boolean */

/* console.log( true )
console.log( false ) */

/* undefined */
/* console.log( undefined ) */

/* null */
/* console.log( null ) */

// variables
let nombre = "Nicolás"

nombre = nombre + " Catriel"

const apellido = "Cirulli"

const edad = 29

const mascota = true

let presentacion = `Soy ${nombre} ${apellido} y tengo ${edad} años`

/* console.log( presentacion )

console.log( 'El mentor dijo: "participen" ')
console.log( "I'm Nicolás" )
console.log( "El mentor \n dijo: \"participen\" " ) */

// operadores

// + - * / ** %

/* 
console.log( 20 + 30 )
console.log( 30 - 20 )
console.log( 5 * 10 )
console.log( 10 / 2 )
console.log( 2 ** 3 )

console.log( 10 % 2 )
*/

// Comparación
// < > >= <=  == === != !== 
/* 
console.log( "30 < 20:", 30 < 20 )
console.log( "30 > 20:", 30 > 20 )
console.log( "30 <= 30:", 30 <= 30 )
console.log( "30 >= 30:", 30 >= 30 )
console.log( '"3" == 3:', "3" == 3 )
console.log( '"3" === 3:', "3" === 3 )
console.log( '"3" != 3:', "3" != 3 )
console.log( '"3" !== 3:', "3" !== 3 )
*/

/* Operadores logicos */
/* || ( AND )  || ( OR )  ! ( NOT ) */
/* 
 
console.log( "Tabla de verdad AND" )
console.log( "true && true:", true && true )
console.log( "true && false:", true && false )
console.log( "false && true:", false && true )
console.log( "false && false:", false && false )

console.log( "Tabla de verdad OR" )
console.log( "true || true:", true || true )
console.log( "true || false:", true || false )
console.log( "false || true:", false || true )
console.log( "false || false:", false || false )


console.log( "Tabla de verdad NOT" )
console.log( "!true:", !true )
console.log( "!false:", !false )
*/




/* Objeto */
const mentor = {
    nombre: "Nicolás",
    apellido: "Cirulli",
    edad: 29,
    genero: "M",
    mentor: true,
    tecnologia: "JavaScript",
    mascota: {
        nombre: "Nila",
        animal: "Gato"
    },
    saludar(){
        console.log( 'Hola a todos' )
    }
}



console.log( mentor )
console.log( mentor.apellido )
console.log( mentor.mascota.animal )

/* Tipos de datos */
/* Primitivos 
    string
    number
    boolean
    undefined
    null

    bigInt
    symbol
*/


/* Array */

const listaAlumnos = [ "Agustin", "Agustina", "Alejandra", "Alejo" ]

const listaNumeros = [10, 20, 30, 40 ,50, 5]

const listaNumerosPares = [0,2,4,6,8,10]

console.log( listaAlumnos )
console.log( listaAlumnos[1] )
console.log( listaAlumnos[3] )
console.log( listaAlumnos.length )
