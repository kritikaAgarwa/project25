
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,side1,side2;
var side3;
function preload()
{
dustbinImg= loadImage("dustbin.png");
}

function setup() {
	createCanvas(1600, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = new dustbin(1090,335,10,110);
	side2 = new dustbin(1310,315,20,150);
	side3 = new dustbin(1165,380,330,20);
	paperball= new Paper();
	ground = new Ground(800,height,1600,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);

  paperball.display();
  ground.display();
//side1.display();
  //side2.display();
  //side3.display();
 
  
image(dustbinImg,1000,200,400,200); 
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){

        Matter.Body.applyForce(paperball.body,{x:300,y:200},{x:850,y:-350});
    }
}

