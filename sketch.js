var movingrect,fixedrect;
var car,wall;

function setup() {
  createCanvas(1200,600);
  movingrect=createSprite(400, 200, 80, 50);
  fixedrect=createSprite(200,200,50,80);
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";

  car=createSprite(300,200,60,60); 
  car.shapeColor="blue"; 
  car.velocityX=5; 
  wall=createSprite(900,200,20,70); 
  wall.shapeColor="yellow";
  
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(isTouching(movingrect,fixedrect)){
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
  }else{
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  }
 /* if(isTouching(car,wall)){
 car.velocityX=0;
 fill("red");
 textSize(40);
 text("It Is TOUCHING!!",800,400)
  }*/
  bounceOff(car,wall);
  drawSprites();
}