const mentor = {
    nombre: "Nicolás",
    apellido: "Cirulli",
    edad: 29,
    mascotas: ["Nila", "Kugi"]
}

const copiaMentor = mentor

const igualAMentor = {
    nombre: "Nicolás",
    apellido: "Cirulli",
    edad: 29,
    mascotas: ["Nila", "Kugi"]
}

/*
const obj1 = {}
const obj2 = obj1

console.log( {nombre:"Nicolas"} == {nombre:"Nicolas"} )
console.log( obj1 == obj2 )


copiaMentor.nombre = "Catriel"
console.log( mentor )
console.log( copiaMentor )

// Como modificar una propiedad de un objeto
mentor.nombre += " Catriel"
console.log( mentor.nombre )

// Agregar una propiedad a un objeto
mentor.segundoNombre = "Catriel"
console.log( mentor )

// Eliminar una propiedad a un objeto
delete mentor.edad
console.log( mentor )



// Metodos de Object

// Object.assign(objDestino, objFuente)

const objA = { nombre: "Fede", edad: 25 }

const objB = { edad: 30, altura: 174 }

const objC = { colorFavorito: "Verde", altura: 170 }

Object.assign( objA, objB, objC )

console.log( objA )

const copiaRealMentor = Object.assign( {}, mentor )

console.log( mentor == copiaRealMentor )

// Object.freeze(obj)

Object.freeze( copiaRealMentor )

copiaRealMentor.nombre = "Nuevo nombre"

console.log( copiaRealMentor )

console.log( Object.isFrozen( copiaRealMentor ) )

console.log( Object.isFrozen( {} ) )


// Object.entries(obj)
console.log(  Object.entries( mentor )  )

// Object.keys(obj)
console.log( Object.keys( mentor ) )

// Object.values(obj)
console.log( Object.values( mentor ) )

//Object.hasOwn(obj, prop)
console.log( Object.hasOwn( mentor , "edad") )
console.log( Object.hasOwn( mentor , "altura") )
*/

// Array

const numeros = [1,2,3,4,5,6,7,8,9,10]

const alumnos = ["Agustin", "Agustina", "Alejandra"]

console.log( alumnos.length )
console.log( alumnos[1] )

// push - Agrega al final del array
alumnos.push( "Alejo" )

// unshift - Agrega al inicio del array
alumnos.unshift( "Christian", "Carlos" )

// pop - Elimina el ultimo elemento del array
//console.log( alumnos.pop() )

// shift - Elemina el primer elemtno del array
//console.log( alumnos.shift() )

// splice 
alumnos.splice( 2, 1, "Emerson", "Agustin"  )

// slice
console.log( alumnos.slice( 2, 6 ) )

// indexOf
console.log( alumnos.indexOf( "Nicolas" ) )
console.log( alumnos.indexOf( "Agustina" ) )

// includes
console.log( "Nicolas en array alumnos:", alumnos.includes( "Nicolas" ) )
console.log( "Agustina en array alumnos:", alumnos.includes( "Agustina" ) )

// toReversed - reverse
// reverse modifica array original
console.log( alumnos.reverse() )
// toReversed - hace una copia y modifica la copia
console.log( numeros.toReversed() )


const numerosPares = []
const numerosImpares = []
for( let i = 0; i <= 100; i++ ){
    if( i % 2 == 0 ){
        numerosPares.push( i )
    }else{
        numerosImpares.push( i )
    }
}
console.log( numerosPares )
console.log( numerosImpares )
// concat
const numerosHastaCien = [].concat( numerosPares, numerosImpares )
//console.log( numerosHastaCien )

// Join
console.log( alumnos.join(" - ") )











