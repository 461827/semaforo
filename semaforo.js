const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

const semaforo = ( event ) => {
    pararAutomatico();
    ligarSemaforo[event.target.id]();
}

const proximaCor = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const mudarCor = () => {
    const cores = ['vermelho','amarelo','verde']
    const cor = cores[ colorIndex ];
    ligarSemaforo[cor]();
    proximaCor();
}

const pararAutomatico = () => {
    clearInterval ( intervalId );
}

const ligarSemaforo = {
    'vermelho':      () => img.src = './img/vermelho.png',
    'amarelo':   () => img.src = './img/amarelo.png',
    'verde':    () => img.src = './img/verde.png',
    'automatico': () => intervalId = setInterval( mudarCor, 1000 )
}

buttons.addEventListener('click', semaforo );