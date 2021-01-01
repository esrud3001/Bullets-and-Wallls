var bullet, wall;
var speed, thickness,weight;

function setup() {
  createCanvas(1600,400);
  
  wall= createSprite(1200,200,thickness,100);
  wall.shapeColor = color(80,80,80);
  
  weight=random(30,52);
  speed=random(223,321);
  thickness=random(22,83);
  bullet=createSprite(50,200,30,30);
  bullet.velocityX = speed;

  
  
}
function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness* thickness *thickness);

    
    if(damage>10){
      wall.shapeColor=color(255,0,0);

    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  
  
  
  drawSprites();

}

function hasCollided(lbullet, lwall){

  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
   
    return true
  }
  
    return false;
}