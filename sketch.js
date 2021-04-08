
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score, ground,ball

score=0;

function preload(){
  
  
 monkey_running =                loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,600);
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
   
 monkey=createSprite(40,160,20,20);
  monkey.addAnimation('running',monkey_running);
  monkey.scale=0.1;
 
  ground=createSprite(300,375,600,50);
  ground.velocityX=-8;
 }

function draw() {
  background('FloralWhite');
   
  monkey.collide(ground);
  monkey.velocityY=monkey.velocityY+0.8;
  
  if (keyDown('space')){
    monkey.velocityY=-12;
  } 
  
  ground.x=ground.width/2;
  ground.shapeColor='Chartreuse';
  //console.log(ground.x);
  
  food();
  obstacles();
   
  score=Math.ceil(frameCount/frameRate())
  textSize(32);
  textFont('Forte');
  fill('DodgerBlue');
  text('Survival Time:' + score,180,80);
  
  drawSprites();
}

function food(){
  if (World.frameCount%80==0){
    banana=createSprite(600,50,10,10);
    banana.y=Math.round(random(100,220));
    banana.velocityX=-4;
    banana.lifetime=200;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    foodGroup.add(banana);
  }
}

function obstacles(){
  if (World.frameCount%300==0){
    obstacle=createSprite(600,330,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.2;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
  }
}