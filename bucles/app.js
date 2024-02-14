const alumnos = ["Leon", "Agustin", "Alejandra", "Alejo", "Christian", "Gaston"]

// For

//console.log( alumnos )
/*
for(  let i = 0; i < alumnos.length ; i++  ){
    console.log( `Hola me llamo ${ alumnos[i] }` )
}


for( let i = 10; i > 0; i-- ){
    if( i % 2 == 0 ){
        console.log(`${i} es par`)
    }else{
        console.log( `${i} es impar` )
    }
}


let resultado = 0

for( let i = 0; i <= 200; i++ ){
    if( i % 2 == 0 ){
        resultado = resultado + i
    }
}

console.log( 'El resultado es: ' , resultado )
*/

// While

// prompt
/*
let numeroIngresado = Number( prompt( 'Ingrese un numero, para cancelar ingrese 0' ) )
let sumaNumerosIngresados = 0
while( numeroIngresado ){
    sumaNumerosIngresados += numeroIngresado
    numeroIngresado = Number( prompt( 'Ingrese un numero, para cancelar ingrese 0' ) )
}

alert( `La suma de los numeros ingresados es: ${sumaNumerosIngresados}` )
*/

/*
// Do while
let numeroIngresado
let sumaNumerosIngresados = 0
do {
    numeroIngresado = Number( prompt( 'Ingrese un numero, para cancelar ingrese 999' ) )
    if( numeroIngresado && numeroIngresado != 999 ){
        sumaNumerosIngresados += numeroIngresado
    }
}while ( numeroIngresado && numeroIngresado != 999 );

alert( `La suma de los numeros ingresados es: ${sumaNumerosIngresados}` )
*/

const nombre = "Nicolas"
/*
let aux = ""

for( let i = 0; i < 5; i++ ){
    aux += nombre[i]
}

console.log( aux )
*/

// for of

const mentores = [
    {
        nombre : "Nicolas",
        edad: 29,
    },
    {
        nombre : "Lucrecia",
        edad: 28
    }
]
/*
for (const letra of nombre) {
    console.log( letra )
}

for (const alumno of alumnos) {
    console.log( alumno )
}

for( let i = 0; i < mentores.length; i++ ){
    const mentor = mentores[i]
    console.log( `El mentor/a ${mentor.nombre} tiene ${mentor.edad} años` )
}

for( const mentor of mentores ){
    console.log( `El mentor/a ${mentor.nombre} tiene ${mentor.edad} años` )
}
*/


/* Responsabilidad unica */
/* Nombres descriptivos ( verbos ) */
/* No buscar ningun dato externo, todo se recibe por parametros */
/* Las funciones no modifican nada que este fuera de la funcion */

function encontrarIndiceAlumno( listaAlumnos, nombre ){
    if( !listaAlumnos || !nombre ){
        return 'Parametros invalidos'
    }
    let indiceEncontrado = -1
    for (let i = 0; i < listaAlumnos.length; i++) {
        const alumno = listaAlumnos[i];
        if( alumno == nombre ){
            indiceEncontrado = i
        }
    }
    return indiceEncontrado
}

const indiceAgus = encontrarIndiceAlumno( alumnos, "Agustin" )
const indiceGus = encontrarIndiceAlumno( alumnos, "Gaston" )
const indiceNico = encontrarIndiceAlumno(  alumnos, "Nicolas" )

console.log( encontrarIndiceAlumno() )

console.log( indiceAgus )
console.log( indiceGus )
console.log( indiceNico )



/* 
for (const mentor of mentores) {

    for( const key in mentor ){
        console.log( key )
    }

}*/