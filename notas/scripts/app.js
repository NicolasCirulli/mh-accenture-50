import { crearTarea, ordenarTareasPorPrioridad, imprimirElementos, crearArticleTarea    } from './module/funciones.js'
const $form = document.querySelector('form')
const $titulo = document.getElementById('formTitulo')
const $descripcion = document.getElementById('formDescripcion')
const $fecha = document.getElementById('formFecha')
const $prioridad = document.getElementById('formPrioridad')
const $contenedorTareas = document.getElementById('contenedorTareas')
const $selectOrden = document.getElementById('selectOrden')

let id = 0
let tareas = JSON.parse(  localStorage.getItem( 'tareas' )  ) || []

tareas = tareas.map( tarea => crearTarea( tarea.id, tarea.titulo, tarea.descripcion, tarea.fecha, tarea.prioridad, tarea.realizada ) )
if( tareas.length > 0 ){
    id = tareas[tareas.length - 1].id + 1
}

const ordenadas = ordenarTareasPorPrioridad( tareas, $selectOrden.value  ) 
imprimirElementos( ordenadas , $contenedorTareas, crearArticleTarea )
$form.addEventListener( 'submit', (e) =>{
    e.preventDefault()
    
    let values = [ $titulo, $descripcion, $fecha, $prioridad ]
    
    if( values.every( value => value.value ) ){
        const tarea = crearTarea( id++, $titulo.value, $descripcion.value, $fecha.value, $prioridad.value )
        tareas.push( tarea )
        values.forEach( input => input.value = "" )
        localStorage.setItem( "tareas", JSON.stringify( tareas ) ) 
        const ordenadas = ordenarTareasPorPrioridad( tareas, $selectOrden.value  ) 
        imprimirElementos( ordenadas , $contenedorTareas, crearArticleTarea )
    }else{
        Swal.fire({
            icon: "error",
            title: "Todos los campos son obligatorios",
          });
    }

   
} ) 

$contenedorTareas.addEventListener( 'input', (e) => {
    const tarea = tareas.find( tarea => tarea.id == e.target.dataset.id )
    tarea.cambiarEstado()
    localStorage.setItem( "tareas", JSON.stringify( tareas ) ) 
    const ordenadas = ordenarTareasPorPrioridad( tareas, $selectOrden.value  ) 
    imprimirElementos( ordenadas , $contenedorTareas, crearArticleTarea )
} )

$contenedorTareas.addEventListener( 'click', (e) => {
    if( e.target.dataset.accion ){
        tareas = tareas.filter( tarea => tarea.id != e.target.dataset.id )
        localStorage.setItem( "tareas", JSON.stringify( tareas ) ) 
        const ordenadas = ordenarTareasPorPrioridad( tareas, $selectOrden.value  ) 
        imprimirElementos( ordenadas , $contenedorTareas, crearArticleTarea )
    }  
} )

$selectOrden.addEventListener( 'input', () => {
    const ordenadas = ordenarTareasPorPrioridad( tareas, $selectOrden.value  ) 
    imprimirElementos( ordenadas , $contenedorTareas, crearArticleTarea )
} )

