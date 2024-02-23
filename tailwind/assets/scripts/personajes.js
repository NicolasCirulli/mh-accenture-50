import {
  imprimirTarjetas,
  filtrarPersonajesPorNombre,
  verifiqueChecked,
  fnReduce,
  filtrarPersonajesPorTag,
  obtenerTags
} from "./module/funciones.js";

const $main = document.getElementById("contenedor-main");
const $input = document.getElementById("inputBusqueda");
const $contenedorCheks = document.getElementById("contenedorChecks");

const arrayTags = obtenerTags( personajes )

imprimirTarjetas(personajes, $main);
$contenedorCheks.innerHTML = arrayTags.reduce(fnReduce, "");

/* detectar el evento */
$input.addEventListener("input", () => {
  /* filtrar los personajes por nombre */
  const personajesFiltradosPorNombre = filtrarPersonajesPorNombre(
    personajes,
    $input.value
  );
  /* Recuperar los values de los checkboxes que esten checked */
  const valuesChecked = verifiqueChecked();
  /*  2- filtrar por tag  */
  const personajesFiltradosPorTag = filtrarPersonajesPorTag(
    personajesFiltradosPorNombre,
    valuesChecked
  );
  /* muestro los personajes en la vista*/
  imprimirTarjetas(personajesFiltradosPorTag, $main);
});
/* 1- detectar el evento en los checkbox */
$contenedorCheks.addEventListener("input", () => {
  /* filtrar los personajes por nombre */
  const personajesFiltradosPorNombre = filtrarPersonajesPorNombre(
    personajes,
    $input.value
  );
  /* Recuperar los values de los checkboxes que esten checked */
  const valuesChecked = verifiqueChecked();
  /*  2- filtrar por tag  */
  const personajesFiltradosPorTag = filtrarPersonajesPorTag(
    personajesFiltradosPorNombre,
    valuesChecked
  );
  /* muestro los personajes en la vista*/
  imprimirTarjetas(personajesFiltradosPorTag, $main);
});
