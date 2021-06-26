PLAY = 1;
END = 0;
var gameState = PLAY                                                               
var player , playerFalling , playerImage;
var  obstacleGroup , virus1 , virus2 , virus3 , virus4 , virus5; 
var scoreGroup ,  handSanitizer , handSanitizerImage ,  mask , maskImage;
var vaccine , vaccineImage , ground , groundImage , invisibleGround

function preload(){
 playerFalling = loadImage("falling.png");
 playerImage = loadImage("running.png");

 virus1 = loadImage("virus1.png");
 virus2 = loadImage("virus2.png");
 virus3 = loadImage("virus3.png");
 virus4 = loadImage("virus4.png");
 virus5 = loadImage("virus5.png");

 handSanitizerImage = loadImage("handSanitizer.png");
 maskImage = loadImage("mask.png");

 vaccineImage = loadImage("vaccine.png");
 groundImage = loadImage("background.jpg")

}

function setup() {
  createCanvas(1200,600);
  player = createSprite(100, 200, 20, 50);
  // player.addImage("player" , playerImage);
  // player.addImage("player" , playerFalling);
     player.scale = 0.5
     player.y = 200;

  

  /*ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;*/

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  obstaclesGroup = createGroup();
}

function draw() {
  background(255,255,255); 

  player = createSprite(100, 200, 20, 50);
 // player.addImage("player" , playerImage);
 // player.addImage("player" , playerFalling);
    player.scale = 0.5
    player.y = 200;
    //ground.velocityX = -3
    if(gameState===PLAY){
  if(keyWentUp("space")) {
    player.velocityY = -10;
    
  }}
  
  //player.velocityY = player.velocityY + 0.8
  
 /* if (ground.x < 600){
    ground.x = ground.width/2;
  }*/                                               
 
  
  player.collide(invisibleGround);
  
  //spawn the clouds
  spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(1100,300,10,40);
    obstacle.velocityX = -6;
    
    
     
     var rand = Math.round(random(1,5));
     switch(rand) {
       case 1: obstacle.addImage(virus1);
               break;
       case 2: obstacle.addImage(virus2);
               break;
       case 3: obstacle.addImage(virus3);
               break;
       case 4: obstacle.addImage(virus4);
               break;
       case 5: obstacle.addImage(virus5);
               break;
       default: break;
     }
    
               
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    
     obstaclesGroup.add(obstacle);
  }
 }