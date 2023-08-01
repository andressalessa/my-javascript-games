// variaveis
var bancoDeDados, jogo, estadoDoJogo, numeroJogadores = 0, contadorJogadores = 0;
var jogador, formulario;
var backgroundImg,carro1,carro2,pista,carro1img,carro2img;
var carros,jogadores;

function preload() {
    // carregar as imagens
    backgroundImg = loadImage("./assets/planodefundo.png");
    carro1img = loadImage("./assets/car1.png");
    carro2img = loadImage("./assets/car2.png");
    pista = loadImage("./assets/PISTA.png");
}

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    
    // iniciar o banco de dados
    bancoDeDados = firebase.database();
    jogo = new Game();
    jogo.pegarEstadoDoJogo();
    jogo.comecar();
}

function draw() {
    // desenhar na tela
    background(backgroundImg);

    // if (numeroJogadores === 2) {
    //     jogo.atualizarEstadoDoJogo(1)
    // }
    // if (estadoDoJogo === 1) {
        jogo.jogar()
    // }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// continuar com as classes