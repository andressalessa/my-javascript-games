class Form {
  constructor() {
    this.nome = createInput("").attribute("placeholder", "Digite seu nome");
    this.botaoJogar = createButton("Jogar");
    this.imagemTitulo = createImg("./assets/TITULO.png", "nome do jogo");
    this.mensagem = createElement("h2");
  }

  esconder() 
  {
    this.mensagem.hide();
    this.botaoJogar.hide();
    this.nome.hide();
  }

  mostrar()
  {
    this.addPosicaoElementos();
    this.addEstiloElementos();
    this.gerenciarClickBotao();
  }

  addPosicaoElementos()
  {
    this.imagemTitulo.position(120, 50);
    this.nome.position(width / 2 - 110, height / 2 - 80);
    this.botaoJogar.position(width / 2 - 90, height / 2 - 20);
    this.mensagem.position(width / 2 - 300, height / 2 - 100);
  }

  addEstiloElementos()
  {
    this.imagemTitulo.class("gameTitle");
    this.nome.class("customInput");
    this.botaoJogar.class("customButton");
    this.mensagem.class("greeting");
  }

  gerenciarClickBotao() {
    this.botaoJogar.mousePressed(() => {
      this.nome.hide(); // hide = esconder
      this.botaoJogar.hide(); // hide = esconder
      
      var mensagem = `Olah, ${this.nome.value()} </br>espere o outro jogador entrar...`;
      this.mensagem.html(mensagem);

      contadorJogadores = contadorJogadores + 1;
      jogador.nome = this.nome.value();
      jogador.indice = contadorJogadores;
      jogador.addJogador();
      jogador.atualizarNumeroJogadores(contadorJogadores);
    });
  }

}
