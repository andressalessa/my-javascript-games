var caixa_branca;

function setup() 
{
  createCanvas(400, 400);

  // objeto caixa_branca da classe Caixa
  caixa_branca = new Caixa(100, 200, 40, 40, 2);
}

// função que se repete infinitamente
function draw() 
{
  background(220);

  caixa_branca.desenhar();
  caixa_branca.mover();

}

