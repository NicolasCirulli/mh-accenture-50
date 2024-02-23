const $main = document.getElementById('main')
const urlParams = new URLSearchParams( location.search )
const id = urlParams.get( 'id' ) 

const alumnoEncontrado = alumnos.find( alumno => alumno.id == id )

console.log( alumnoEncontrado )

$main.innerHTML = ` <h2> ${alumnoEncontrado.nombre} </h2> `