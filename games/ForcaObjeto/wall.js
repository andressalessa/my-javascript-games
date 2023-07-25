class Wall {
    constructor(x, y, w, h)
    {
        this.w = w;
        this.h = h;

        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }

    show()
    {
        var pos = this.body.position;
        push(); // pausa as configurações antes deste ponto
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x, pos.y, this.w, this.h);
        pop(); // volta as configurações antes deste ponto
    }
}