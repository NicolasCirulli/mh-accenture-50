console.log( alumnos )

const $main = document.getElementById('main')
const $tbody = document.getElementById('tbody')

function crearFila( alumno ){
    return `<tr>
                <td> ${alumno.nombre} </td>
                <td> ${alumno.grupo} </td>
                <td> <a class="underline" href="./detalle.html?id=${alumno.id}&nombre=${alumno.nombre}"> Ver detalle </a></td>
            </tr>`
}

function imprimirFilas( listaAlumnos, tbody ) {
    let template = ""
    for (const alumno of listaAlumnos) {
        template += crearFila( alumno )
    }
    tbody.innerHTML = template
}

imprimirFilas( alumnos, $tbody )