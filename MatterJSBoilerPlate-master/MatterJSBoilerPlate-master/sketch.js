
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
background = "blue"

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof = new Roof(600,100,400,100)
bob1 = new Bob()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 roof.display();


  drawSprites();
 
}



