const alumnos = [
    {
        nombre: "Ivana", grupo: 1,
    },
    {
        nombre: "Solange",
        grupo: 1,
    },
    {
        nombre: "Carlos",
        grupo: 1,
    },
    {
        nombre: "Lisandro Uriel",
        grupo: 1,
    },
    {
        nombre: "Nahuel",
        grupo: 1,
    },
    {
        nombre: "Christian",
        grupo: 1,
    },
    {
        nombre: "Melany",
        grupo: 1,
    },
    {
        nombre: "Alejandra",
        grupo: 2,
    },
    {
        nombre: "Agustin B",
        grupo: 2,
    },
    {
        nombre: "Eric david",
        grupo: 2,
    },
    {
        nombre: "Alejo",
        grupo: 2,
    },
    {
        nombre: "Pablo Matias",
        grupo: 2,
    },
    {
        nombre: "Noelia",
        grupo: 3,
    },
    {
        nombre: "Lucas",
        grupo: 3,
    },
    {
        nombre: "Nahiara",
        grupo: 3,
    },
    {
        nombre: "Maria",
        grupo: 3,
    },
    {
        nombre: "Juan",
        grupo: 3,
    },
    {
        nombre: "Gaston",
        grupo: 3,
    },
    {
        nombre: "Agustin C",
        grupo: 4,
    },
    {
        nombre: "Wendy",
        grupo: 4,
    },
    {
        nombre: "Noemi",
        grupo: 4,
    },
    {
        nombre: "Emerson",
        grupo: 4,
    },
    {
        nombre: "Agustina",
        grupo: 4,
    },
    {
        nombre: "Romina",
        grupo: 4,
    }
];

/* Funciones flecha */
/* Son siempre anonimas */
/* Si tiene una sola instruccion, puedo quitar las llaves y el return no hace falta */
/* Si tiene un parametro, podemos omitir los parentesis */
/* No la podemos usar como metodo en un objeto ( por el this ) */
const restar = (a,b) => {
    return a - b
}
const multiplicarPor10 = a => a * 10

const holaMundo = () => "hola mundo" 


/* Funciones de orden superior */

console.log( alumnos )

/* forEach - No tiene return */
const fn = (alumno, indice) => console.log(  indice,  'Hola soy ' + alumno.nombre )
//alumnos.forEach( fn )


/* Map */
/* Retornar un nuevo array, con todos los return de la funcion aplicada */
/* El nuevo array, tiene la misma cantidad de elementos que el original */
const fnMap = alumno => alumno.nombre.toUpperCase()

const nombresAlumnos = alumnos.map( fnMap )

/* console.log( nombresAlumnos ) */


function forEachAMano( array, fn ){
    for (let i = 0; i < array.length; i++) {
        fn( array[i], i, array )
    }
}

function mapAMano( array, fn ){
    const nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        const resultado = fn( array[i], i, array )
        nuevoArray.push( resultado )
    }
    return nuevoArray
}

/* 
    const nuevoArray = []
    nuevoArray.push( fnMap( {nombre: 'Ivana', grupo: 1}, 0, alumnos ) )
    nuevoArray.push( fnMap( {nombre: 'Solange', grupo: 1}, 1, alumnos ) )
    ...
    return nuevoArray
*/


/* Filter */
/* Retorna un nuevo array con los elementos que al ejecutar la funcion devuelven un valor true */

function filterAMano( array, fn ){
    const nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        const resultado = fn( array[i], i, array )
        if( resultado ){
            nuevoArray.push( array[i] )
        }
    }
    return nuevoArray
}

/* console.log( filterAMano( alumnos, alumno => alumno.grupo == 1 ) )
console.log( filterAMano( alumnos, alumno => alumno.nombre.toLowerCase().includes( 'i' ) ) ) */

/* console.log( alumnos.filter( alumno => alumno.grupo == 1 ) )
console.log( alumnos.filter( alumno => alumno.nombre.toLowerCase().includes( 'c' )  ) )  */



function findAMano( array, fn ){
    for (let i = 0; i < array.length; i++) {
        const resultado = fn( array[i], i, array )
        if( resultado ){
            return array[i]
        }
    }
}

/* 
console.log( findAMano( alumnos, alumno => alumno.grupo == 1 ) )
console.log( findAMano( alumnos, alumno => alumno.nombre.toLowerCase().includes( 'c' ) ) )
console.log( findAMano( alumnos, alumno => alumno.nombre == "Nico" ) ) 
*/

/* console.log( alumnos.find( alumno => alumno.grupo == 1 ) )
console.log( alumnos.find( alumno => alumno.nombre.toLowerCase().includes( 'c' ) ) )
console.log( alumnos.find( alumno => alumno.nombre == "Nico" ) ) */

/* console.log( alumnos.find( alumno => alumno.nombre.startsWith( "Nico" ) ) ) */

/* Some */
/* console.log( alumnos.some( alumno => alumno.nombre.startsWith( "N" ) ) ) */

/* Every */
/* console.log( alumnos.every( alumno => alumno.grupo ) ) */


/* toSorted */
/* Ordenar un array */

const alumnosOrdenadosPorGrupo = alumnos.toSorted( (a,b) => {

    if( a.grupo < b.grupo ){
        return -1
    }
    if( a.grupo > b.grupo ){
        return 1
    }
    return 0

} )
/* console.log( alumnosOrdenadosPorGrupo ) */

const nombres = alumnos.map( alumno => alumno.nombre )

const nombresOrdenados = nombres.toSorted( (a,b) => {
    if( a < b ){
        return -1
    }
    if( a > b ){
        return 1
    }
    return 0
} ) 
/* console.log( nombresOrdenados ) */

const ordenadosPorGrupo = alumnos.toSorted( (a,b) => a.grupo - b.grupo )

/* console.log( ordenadosPorGrupo ) */

const ordenadosPorNombre2 = alumnos.toSorted( (a,b) => b.nombre.localeCompare( a.nombre ) ) 

/* console.log( ordenadosPorNombre2 ) */


/* reduce */

const numeros = [ 10, 2, 3, 10, 23, 40, 50 ]

const fnReduce = ( acumulado, elemento ) => {
    return acumulado + elemento
} 

const resultado = numeros.reduce( fnReduce )

/* 
    con valor inicial


    let acumulado = 0
    acumulado = fnReduce( acumulado, 10, 0, numeros )
    acumulado = fnReduce( acumulado, 2, 1, numeros )
    acumulado = fnReduce( acumulado, 3, 2, numeros )
    ...
    return acumulado
*/

/* 
    sin valor inicial

    let acumulado = 10
    acumulado = fnReduce( acumulado, 2, 1, numeros )
    acumulado = fnReduce( acumulado, 3, 2, numeros )
    acumulado = fnReduce( acumulado, 10, 3, numeros )
    ...
    return acumulado
*/

const grupos = alumnos.reduce( ( acumulado, alumno ) => {
    if( acumulado[ alumno.grupo ] ){
        acumulado[ alumno.grupo ].push( alumno.nombre ) 
    }else{
        acumulado[ alumno.grupo ] = [ alumno.nombre ] 
    }
    return acumulado 
}, {} )

console.log( grupos )

const aux = { nombre: "nico" }

console.log( aux.nombre )
console.log( aux["nombre"] )




