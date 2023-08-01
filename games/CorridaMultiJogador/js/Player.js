class Player {
  constructor() {
    this.nome = null;
    this.indice = null;
    this.posX = 0;
    this.posY = 0;
  }

  pegarNumeroJogadores()
  {
    var numeroJogadoresRef = bancoDeDados.ref("numeroJogadores");
    numeroJogadoresRef.on("value", dados => {
      numeroJogadores = dados.val();
    });
  }

  atualizarNumeroJogadores(contador)
  {
    bancoDeDados.ref("/").update({
      numeroJogadores: contador
    });
  }

  // adiciona novo jogador
  addJogador()
  {
    var indiceJogador = "jogadores/jogador" + this.indice;

    if (this.indice === 1) {
      this.posX = width / 2 - 100;
    } else {
      this.posX = width / 2 + 100;
    }

    bancoDeDados.ref(indiceJogador).set({
      nome: this.nome,
      posX: this.posX,
      posY: this.posY
    });
  }

  static pegarDadosJogadores(){
    var dadosJogadorRef=bancoDeDados.ref('jogadores')
    dadosJogadorRef.on('value',dado => {
      jogadores=dado.val()
    })
  }
}
