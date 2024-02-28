export function crearArticleTarea( tarea ){

    let color = ""
    switch (tarea.prioridad) {
        case "Baja":
            color = "bg-green-700"
            break;
        case "Media":
            color = "bg-yellow-700"
            break;
        case "Alta":
            color = "bg-red-700"
        default:
            break;
    }

    let checked = ""
    let line = ""
    if( tarea.realizada ){
        checked = "checked"
        line = "line-through"
        color = "bg-blue-800"
    }
    const fecha = tarea.fecha.toLocaleString('es-ar', {timeZone :"GMT"  }).split(',')

    return `<article class="flex flex-col gap-3 ${color} text-white p-5 w-3/4 max-w-[400px] rounded">
                <p class="text-center text-2xl font-bold">prioridad: ${tarea.prioridad}</p>
                <div class="flex justify-between items-end">
                    <div class="flex items-end gap-2">
                        <input data-id="${tarea.id}" class="w-6 h-6" type="checkbox" ${checked}>
                        <h3 class="text-2xl ${line}">${tarea.titulo}</h3>
                    </div>
                    <p class="text-xl">${fecha[0]}</p>
                </div>
                <div  class="flex justify-between">
                    <p class="text-xl ${line}">${tarea.descripcion}</p>
                </div>
                <button data-id="${tarea.id}" data-accion="borrar" class="w-2/4 px-3 py-2 self-center bg-white text-red-600 font-semibold text-xl"> Eliminar nota</button>
            </article>`
}

export function imprimirElementos( lista, elemento, fn ){
    let template = ""
    lista.forEach( item => template+= fn( item ) )
    elemento.innerHTML = template
} 
export function crearTarea( id, titulo, descripcion, fecha, prioridad, estado=false ){
    let tarea = {
        id: id,
        titulo : titulo,
        descripcion: descripcion,
        fecha: new Date(fecha),
        prioridad: prioridad,
        realizada: estado,
        cambiarEstado(){
            this.realizada = !this.realizada
        }
    }
    return tarea
}

export function ordenarTareasPorPrioridad( tareas, orden ){
    let ordenadas = tareas.toSorted( (a,b) => {
        let propiedad1 = parsePrioridad( a.prioridad )
        let propiedad2 = parsePrioridad( b.prioridad )
        return propiedad1 - propiedad2
    } )
    if( orden == "Descendente"  ){
         ordenadas = ordenadas.reverse()
    }
    return ordenadas.sort( (a,b) => a.realizada - b.realizada )
}

export function parsePrioridad( prioridad ){
    if( prioridad == "Alta" ) return 3
    if( prioridad == "Media" ) return 2
    if( prioridad == "Baja" ) return 1
    return 0
}