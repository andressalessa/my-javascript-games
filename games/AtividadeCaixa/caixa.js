/**
 * Legenda:
 * () - par�ntesis
 * {} - chaves
 * [] - colchetes
 */

// m�todo � parecido com uma fun��o (function)
class Caixa {
    // construtor
    constructor(posX, posY, largura, altura, velocityX)
    {
        this.posX = posX;
        this.posY = posY;
        this.largura = largura;
        this.altura = altura;
        this.velocityX = velocityX;
    }

    desenhar()
    {
        rect(this.posX, this.posY, this.largura, this.altura);
    }

    mover()
    {
        this.posX = this.posX + this.velocityX;
    }
}