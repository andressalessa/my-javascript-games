const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var topWall, leftWall, rightWall, bottomWall;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  topWall = new Wall(200, 10, 400, 20);



  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  topWall.show();
}
