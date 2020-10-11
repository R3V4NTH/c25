
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var raindrop;

var engine,world;




function setup() {
  createCanvas(450,800);
  

  engine = Engine.create();
  world = engine.world;
  //World.add(world,raindrop)

  

}

function draw() {
  background("black");  
  var rand = random(1,50);

  
if(frameCount%1 === 0){
  for (let i = 10; i < 440; i = i + rand) {
   var raindrop = createSprite(i,random(10,400),random(0.0000000001,5),random(0.00000000000000001,69))
   raindrop.shapeColor = rgb(0,255,0)
   raindrop.velocityY = 8
   raindrop.lifetime = 45
  }
 
 }
  drawSprites();
}