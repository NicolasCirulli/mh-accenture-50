/* const $main = document.querySelector( 'main' )

$main.addEventListener( "click", (event) => {
    console.log( event.target )
} ) */

const $divs = document.querySelectorAll( 'div' )

console.log( $divs )

/* 
    detectar el click - addEventListener
    agregarle la clase rounded-full al div que se le hizo click
*/

const handleClick = ( event ) => {
    console.log('hiciste click', event.target)
    console.log( event.target.classList )
    event.target.classList.toggle( "rounded-full" )
}

$divs.forEach( div => div.addEventListener( "click", handleClick ) )


