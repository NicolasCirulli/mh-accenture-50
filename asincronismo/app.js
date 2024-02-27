console.log( 'Inicio script' )
/* sincrono vs asincrono */
/* JS es un lenguaje de 1 solo hilo  */
import { alumnos } from './module/data.js'

function primerFuncion(){
    segundaFuncion()
    console.log('Primer funcion')
}
function segundaFuncion(){
    console.log('Segunda funcion')
    bucle()
    console.log('Termino el bucle')
}
function bucle(){
    for (let index = 0; index < 1000000000; index++) {  

    }
}
/* Promesas */

/* retornar una promesa */
function pedirListaAlumnos(){
    return new Promise( ( resolve, reject ) => {
        if( alumnos ){
            resolve( alumnos )
        }else{
            reject( 'No encontre la lista de alumnos' )
        }
    } )
}

const fnThen = ( parametro ) => { 
    const grupo2 = parametro.filter( alumno => alumno.grupo == 2 )
    console.log( grupo2 )
}

const fnCatch = ( error ) => { console.log( error ) }

/* pedirListaAlumnos()
    .then( fnThen )
    .catch( fnCatch )
    .finally( () => { console.log('Termino la promesa') } )
 */



/* Fetch */

const $ul = document.getElementById('lista')

let personajes = [{name: "No debería estar esto"}]

/* fetch( 'https://hp-api.onrender.com/api/characters/students')
    .then( ( resolve ) => resolve.json())
    .then( ( datos ) => {
        personajes = datos
        render( personajes, $ul, crearLi )
    } )
    .catch( ( err ) => console.log('error: ', err) ) */


function crearLi(personaje){
    return `<li> ${personaje.name} </li>`
}

function render( lista, elemento, fn ){
    console.log( "lista que llega:", lista )
    let template = ""
    for (const item of lista) {
        template += fn( item )
    }
    elemento.innerHTML = template
} 

console.log( 'fin script' )

/* url = "https://api.propublica.org/congress/v1/113/senate/members.json" */
/* key = "ZSYi5vBwG2Ph2ewN48ShA2sOe0TU2tsR086gS6Le" */
/* propiedad = X-API-Key */

/* const url = "https://api.propublica.org/congress/v1/113/senate/members.json"
const init = {
    method: "GET",
    headers: {
        "X-API-Key" : "ZSYi5vBwG2Ph2ewN48ShA2sOe0TU2tsR086gS6Le"
    }
}
fetch( url, init )
    .then( response => response.json() )
    .then( datosRespuesta => console.log( datosRespuesta ) )
    .catch( err => console.log(err) ) */