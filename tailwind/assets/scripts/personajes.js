console.log(personajes);

const main = document.getElementById("contenedor-main");

/* Trabajando con string e innerHTML */
function crearTarjeta( personaje ) {
  return `
    <article class="flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 rounded border border-blue-700">
        <img class="w-full" src="${personaje.image}" alt="Imagen de ${personaje.name}">
        <h2>${personaje.name}</h2>
        <h3>${personaje.title}</h3>
        <p>${personaje.blurb}</p>
    </article>
    `;
}

function imprimirTarjetas( listaPersonajes, elemento ){
    let template = ""
    for (const personajeIterado of listaPersonajes) {
        template += crearTarjeta( personajeIterado )
    }
    elemento.innerHTML = template
}

/* imprimirTarjetas( personajes, main ) */



/* 

    <article class="flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 rounded border border-blue-700">
        <img class="w-full" src="${personaje.image}" alt="Imagen de ${personaje.name}">
        <h2>${personaje.name}</h2>
        <h3>${personaje.title}</h3>
        <p>${personaje.blurb}</p>
    </article>

*/
/* Trabajando con nodos */
function createCard( champion ){
    /* Creo el nodo <article> */
    /* document.createElement( elemento ) */
    const article = document.createElement( 'article' )
    /* Le agrego las clases */
    article.className = "flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 rounded border border-blue-700"
   
    /* Agrego id */
    article.setAttribute( "id", "key"+champion.key )
    
    /* Creo el nodo <img> */
    const img = document.createElement( "img" )
    /* Agrego clase a el nodo img */
    img.className = "w-full" 

    /* Agrego atributo src a la imagen */
    /* setAttribute */
    img.setAttribute( "src", champion.image )

    /* Agrego atributo alt */
    const alt = `Imagen de ${champion.name}`
    img.setAttribute( "alt", alt )

    /* element.appendChild para agregar el nodo img como hijo al nodo article */
    article.appendChild( img )    

    const h2 = document.createElement('h2')
    h2.textContent = champion.name

    h2.classList.add( "font-bold", "text-3xl" )

    const h3 = document.createElement('h3')
    h3.textContent = champion.title


    const p = document.createElement( 'p' )
    p.textContent = champion.blurb

   /* Agregando uno a uno
   article.appendChild( h2 )
   article.appendChild( h3 )
   article.appendChild( p )
    */

    /* element.append me permite agregar varios a la vez */
    article.append( h2, h3, p )

    return article
} 


function renderCards( championsList , element, fn ){
    /* Recorro la lista de personajes */

    const fragment = document.createDocumentFragment()
    for (const iterator of championsList) {
        /* Ejecuto la funcion que crear el nodo */
        const newArticle = fn( iterator ) 
        /* Agrego el nodo al elemento */
        fragment.appendChild( newArticle )
    }
    element.appendChild( fragment )

}

renderCards( personajes, main, createCard )


function buscarKeyCampeon( listaCampeones, nombreABuscar ){

    for (const campeon of listaCampeones) {
        if( campeon.name == nombreABuscar ){
            return campeon.key
        }
    }

    return null

}
const idAkali = "key"+buscarKeyCampeon(personajes , "Akali" )


const articles = document.querySelectorAll('article:nth-child(even)')
const articles2 = document.querySelectorAll('article:nth-child(odd)')

for (const article of articles) {
    article.classList.add( "bg-blue-800", "text-white" )
}

for (const article of articles2) {
    article.classList.add( "bg-red-800", "text-white" )
}
