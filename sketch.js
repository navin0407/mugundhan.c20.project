var bg,sleep,brush,gym,eat,bath,move;
var astronut;

function preload();{
 bg= loadImage("images/iss.png");
 sleep = loadAnimation("images/sleep.png");
 brush = loadAnimation("images/brush.png");
 gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
 eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat2","images/eat2");
 bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png");
 move = loadAnimation("imges/move1.png","images/move1.png","images/move2.png","images/move2.png");
}

function setup() {
  createCanvas(600,500);

  astronut = createSprite(300,230);
  astronut.addAnimation("sleeping",sleep);
  astronut.scale = 0.1;
  
}

function draw() {
  background(bg);  
  drawSprites();

  textSize(20);
  Fill("white");
  text("Instructions:",20,35);
  textSize(15);
  text("Up Arrow = Brushing",20,55);
  text("Down Arrow = Gyming",20,70);
  text("Left Arrow = Eating",20,85);
  text("Right Arrow = Bathing",20,100);
  text("m key = Moving",20,115);

  edges=createEdgeSprites();
  astronut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronut.addAnimation("brushing", brush);
    astronut.ChangeAnimation("brushing");
    astronut.y = 350;
    astronut.velocityX = 0;
    astronut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronut.addAnimation("gyming",gym);
    astronut.ChangeAnimation("gyming");
    astronut.y = 350;
    astronut.velocityX = 0;
    astronut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronut.addAnimation("eating",eat);
    astronut.ChangeAnimation("eating");
    astronut.x = 150;
    astronut.y = 350;
    astronut.velocityX = 0.5;
    astronut.velocityY = 0.5;
  }
  if(keyDown("RIGHT_ARROW")){
    astronut.addAnimation("bathing", bath);
    astronut.ChangeAnimation("bathing");
    astronut.x = 300;
    astronut.velocityX = 0;
    astronut.velocityY = 0;
  }

  if(keyDown("m")){
    astronut.addAnimation("moving",move);
    astronut.ChangeAnimation("moving");
    astronut.velocityX = 1;
    astronut.velocityY = 1;
  }

}
