//variables
var bg,bgimg;
var player,playerimg;
var meteor,meteorleftimg,meteorrightimg;

function preload(){
  bgimg=loadImage("Space.jpg");
  playerimg=loadImage("rocket.png");
  meteorleftimg=loadImage("meteorleft.png");
  meteorrightimg=loadImage("meteorright.png");
}

function setup() {
  createCanvas(1200,600);

  bg = createSprite(600,300,1200,600);
  bg.addImage(bgimg);
  bg.velocityY=5;

  player=createSprite(600,500,50,50)
  player.addImage(playerimg);
  player.scale=0.7;
}

function draw() {
  background(0);  

  if(bg.y > 600){
     bg.y =300;
  }
  if(keyDown("left")){
    player.x = player.x-5;
  }
  if(keyDown("right")){
    player.x = player.x+5;
  }
  spawnMeteors();
  drawSprites();
}
function spawnMeteors(){
  if(frameCount%100===0){
    var num=Math.round(random(1,2));
    if(num===1){
      meteor=createSprite(random(600,1200),0,30,30);
      meteor.addImage(meteorleftimg);
      meteor.velocityY=6;
      meteor.velocityX=-3;
    }
    if(num===2){
      meteor=createSprite(random(0,600),0,30,30);
      meteor.addImage(meteorrightimg);
      meteor.velocityY=6;
      meteor.velocityX=3;
    }
  }
}