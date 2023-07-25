var tower, towerImg;
var ghost, ghostImg;
var climberGroup, invisibleGroundGroup;

function preload() {
  towerImg = loadImage("tower.png");
}

function setup() {
  createCanvas(600, 600);

  tower = createSprite(300, 300);
  tower.addImage(towerImg);
  tower.velocityY = 5;

  
}

function draw() {
  background(200);

  if (tower.y > 400) {
    tower.y = 300;

  }

  drawSprites();
}
