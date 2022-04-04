window.onload = function () {
    // Variables
    const HELLO = [ 
        '.assets/CHINO.svg',
        '.assets/CIAO.svg',
        '.assets/COREANO.svg',
        '.assets/HALLO.svg',
        '.assets/hola.svg',
        '.assets/HELLO.svg',
        '.assets/JAPO.svg',
        '.assets/NAHUATL.svg',
        'assets/OLA.svg',
        '.assets/RUSO.svg',
        '.assets/SALUT.svg',
    ];

const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
let posicionActual = 0;
let $imagen = document.querySelector('#hello-hero')
let $botonPlay = document.querySelector('#play');
let intervalo;

function pasarFoto() {
    if(posicionActual >= HELLO.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}

function retrocederFoto() {
    if(posicionActual <= 0) {
        posicionActual = HELLO.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}

function renderizarImagen () {
    $imagen.style.backgroundImage = `url(${HELLO[posicionActual]})`;
}

function playIntervalo() {
    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    $botonPlay.addEventListener('click', playIntervalo);
    renderizarImagen();
}

}