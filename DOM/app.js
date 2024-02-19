

/* Formas de recuperar elementos  (Referencias) */

/* document.getElementById( id ) */
const h1 = document.getElementById( "titulo" )

h1.innerHTML = `Lista <span class="font-bold"> alumnos </span>`

/* document.querySelector( selector ) */
const parrafo = document.querySelector("p")

/* document.querySelectorAll( selector ) */
const parrafos = document.querySelectorAll("main p")

/* textContent && innerText ( El texto que contiene el elemento ) */
/* console.log( h1.innerText ) */

const main = document.querySelector('main')

/* console.log( main.innerHTML ) */

const alumnos = ["Lucas", "Agustin", "Agustin", "Agustina", "Alejo"]

/* 
innerHTML 
-Guarda un string que representa el contenido HTML que tiene una etiqueta 
-Nos permite modificar el html que contiene 
*/
main.innerHTML = `
    <ul> 
        <li class="text-blue-600 font-bold"> Lucas </li>
        <li class="text-blue-600 font-bold"> Agustin </li>
        <li class="text-blue-600 font-bold"> Agustin </li>
        <li class="text-blue-600 font-bold"> Agustina </li>
        <li class="text-blue-600 font-bold"> Alejo </li>
    </ul>
`

/* classList */

const li = document.querySelectorAll('li')
li[0].classList.add( "text-2xl" )

console.log( [ li[0] ] )

console.log( li[0].classList.contains( "bg-red-500" ) )

console.log( li[2].classList.remove( "text-blue-600" ) )

console.log( li[3].classList.replace( "text-blue-600", "text-red-600" ) )

/* setAttribute me permite agregar atributo a una etiqueta */
li[0].setAttribute( "name", "alumno" )

/* children ( contiene los elementos hijos ) */

/* parentElement ( el elemento padre ) */



