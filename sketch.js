var satellite, satelliteImg
var iss, issImg
var space
var dockSprite
function setup() {
  createCanvas(900,800);
 satellite=createSprite(65, 150, 50, 50);
 satellite.scale=0.2
 iss=createSprite(600,200,50,50)
 iss.addImage("iss",issImg)
 dockSprite=createSprite(530,217,40,40)
 dockSprite.visible = false;
 
}

function preload(){
  still=loadAnimation("Docking-undocking/spacecraft1.png")
  up=loadImage("Docking-undocking/spacecraft2.png")
  left=loadImage("Docking-undocking/spacecraft3.png")
  right=loadImage("Docking-undocking/spacecraft4.png")
  issImg=loadImage("Docking-undocking/iss.png")
  space=loadImage("Docking-undocking/spacebg.jpg")
}

function draw() {
  background(space);
  
  if(keyDown(UP_ARROW)){
    satellite.addAnimation("my god",up)
    
    satellite.y=satellite.y-2.7
  }
  if(keyDown(RIGHT_ARROW)){
    satellite.addAnimation("my god",right)
    
    satellite.x=satellite.x+2.7
  }
  if(keyDown(DOWN_ARROW)){
    satellite.addAnimation("my god",up)
    
    satellite.y=satellite.y+2.7
  }
  if(keyDown(LEFT_ARROW)){
    satellite.addAnimation("my god",left)
    
    satellite.x=satellite.x-2.7
  }

  if(satellite.collide(dockSprite)){
    textSize(30)
    text("Docking Successfull",100,200)
  }

  
  
  drawSprites();
}