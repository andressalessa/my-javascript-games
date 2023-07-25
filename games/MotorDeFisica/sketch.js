// modulos
// motor de fisica
const Engine = Matter.Engine;
// mundo
const World = Matter.World;
// corpo = objeto
const Body = Matter.Body;
// corpos = objetos
const Bodies = Matter.Bodies;


var engine, world;
var ball, ground;
var angle=60;


function setup() {
  createCanvas(400, 400);
  engine = Engine.create(); // universo do motor de fisica
  world = engine.world;
  
  var ballOptions = {
    // elasticidade
    restitution: 0.95,
    // atrito do ar
    frictionAir: 0.01
  }

  ball = Bodies.circle(100, 10, 20, ballOptions);
  World.add(world, ball);

  ground = Bodies.rectangle(200, 390, 400, 20, { isStatic: true });
  World.add(world, ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("black");
  // atualizar
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, ball.circleRadius, ball.circleRadius);
  rect(ground.position.x, ground.position.y, 400, 20);
  
}
