export function filtrarPersonajesPorNombre(listaPersonajes, nombre) {
    return listaPersonajes.filter(personaje => personaje.name.toLowerCase().startsWith(nombre.toLowerCase()))
}

export function filtrarPersonajesPorTag(listaPersonajes, seleccionados) {
    if( seleccionados.length == 0 ) {
        return listaPersonajes
    }else{
        return listaPersonajes.filter(personaje => seleccionados.some(seleccionado => personaje.tags.includes(seleccionado)))
    }
}

export function verifiqueChecked() {

    const checkboxes = document.querySelectorAll('[type="checkbox"]')
    const values = []
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            values.push(checkbox.value)
        }
    }
    return values
}
/* Trabajando con string e innerHTML */
export function crearTarjeta(personaje) {
    return `
    <article class="bg-zinc-200 flex flex-col gap-3 w-11/12 md:w-5/12 xl:w-3/12 rounded-lg shadow-lg pb-2">
        <img class="w-full h-[350px] xl:h-[500px] rounded-t-lg object-cover object-top" src="${personaje.image}" alt="Imagen de ${personaje.name}">
        <div class="ps-3 flex flex-col gap-3">
            <div class="flex items-end gap-3 pe-2 ">
                <h2 class="font-bold text-3xl grow">${personaje.name}</h2>
                <span class="italic text-blue-900 underline" >#${personaje.tags[0]} </span>
                <span class="italic text-blue-900 underline" >#${personaje.tags[1]} </span>
            </div>
            <h3 class="text-lg underline">${personaje.title}</h3>
            <p class="line-clamp-4 italic">${personaje.blurb}</p>
        </div>
        <div class="flex gap-5 justify-evenly">
            <a href="#" class="border border-zinc-800 w-20 text-center py-1 font-semibold rounded hover:bg-zinc-900 hover:text-white hover:border-white"> Detalle </a> 
            <a href="#" class="border border-zinc-800 w-20 text-center py-1 font-semibold rounded hover:bg-zinc-900 hover:text-white hover:border-white"> Builds </a> 
        </div>
    </article>
    `;
}

export function imprimirTarjetas(listaPersonajes, elemento) {
    let template = ""
    for (const personajeIterado of listaPersonajes) {
        template += crearTarjeta(personajeIterado)
    }
    if( listaPersonajes.length == 0 ){
        template = `<h2 class="font-semibold text-white text-2xl"> No hay personajes con los filtros aplicados </h2>`
    }
    elemento.innerHTML = template
}
export function crearCheckbox(tag) {
    return `<label>${tag}
                <input type="checkbox" name="tag" value="${tag}">
            </label>`
}
export const fnReduce = (template, tag) => template + crearCheckbox(tag);

export function obtenerTags( personajes ){
    const tags = personajes.map((personaje) => personaje.tags).flat();
    const setTags = new Set(tags);
    return Array.from(setTags);
}
