
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(100,690,20)

	ground = new Ground(400,height,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  if (keyCode === UP_ARROW) {
	   
	keyPressed();

  }
  ground.display();
  paperObject.display(); 
}

function keyPressed() {
	   
	Matter.Body.applyforce(paperObject.body,paperObject.body.position,{x:85,y:-85});

}

