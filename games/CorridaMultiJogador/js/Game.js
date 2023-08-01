class Game {
  constructor() {}

  comecar() {
    jogador = new Player(); // novo jogador
    numeroJogadores = jogador.pegarNumeroJogadores();

    formulario = new Form();
    formulario.mostrar()
    
    carro1 =createSprite(width/2-50,height-100);
    carro1.addImage('carro1',carro1img);
    carro1.scale=0.07;

    carro2 =createSprite(width/2+100,height-100);
    carro2.addImage('carro2',carro2img);
    carro2.scale=0.07;
    
    carros=[carro1,carro2];
  }

  // administrar
  admElementos()
  {
    formulario.esconder();
    formulario.imagemTitulo.position(40, 50);
    formulario.imagemTitulo.class("gameTitleAfterEffect");
  }

  jogar()
  {
    this.admElementos();
    Player.pegarDadosJogadores();

    if (jogadores !== undefined) {
      image(pista, 0, -height * 5, width, height * 6);
      drawSprites();
    }
  }

  pegarEstadoDoJogo()
  {
    var estadoDoJogoRef = bancoDeDados.ref("estadoDoJogo");
    estadoDoJogoRef.on("value", function(dados) {
      estadoDoJogo = dados.val();
    });
  }
  
  atualizarEstadoDoJogo(estadoDoJogo){
    bancoDeDados.ref("/").update({
      estadoDoJogo: estadoDoJogo
    });
  }
}
