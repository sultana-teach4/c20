function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 60);
 movingRect=createSprite(400,400,60,70);
 fixedRect.shapeColor="blue";
 movingRect.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2)
  {
    fixedRect.shapeColor="orange";
 movingRect.shapeColor="orange";
 console.log(movingRect.width/2+fixedRect.width/2)
 console.log(movingRect.x-fixedRect.x)
 
  }
  else{
    fixedRect.shapeColor="blue";
 movingRect.shapeColor="blue";
  }
  drawSprites();
}