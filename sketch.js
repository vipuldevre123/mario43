var mario,ground;
function preload() {
  marioimg = loadAnimation("mario.gif");
  bgimg = loadImage("background.jpg");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  mario = createSprite(50,380,20,20);
  mario.addAnimation("marioimg",marioimg);
  ground = createSprite(width/2,height-80,width,10);
  ground.visible = false;
}

function draw() {
  background(bgimg);
  if(keyDown(UP_ARROW)){
    mario.velocityY = -5;
    mario.velocityX = 1;
  }
  mario.velocityY = mario.velocityY+0.08;
  mario.collide(ground);
  bricks();
  enemies();
  drawSprites();
}
function bricks(){
  if(frameCount%50 === 0){
     var brick = createSprite(400,380,50,5);
  brick.velocityX = -3;
  brick.y = Math.round(random(20,350))
  }
 
}
function enemies(){
  if(frameCount%50 === 0){
     var enemy = createSprite(400,380,20,20);
     enemy.velocityX = -3;
     enemy.y = Math.round(random(20,350))
     enemy.x = Math.round(random(20,400))
  }
}