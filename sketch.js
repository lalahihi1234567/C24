
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var leftbin;
var rightbin;
var bottombin;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,590,1200,20);

	leftbin=new Bin(800,510,20,150);
	rightbin=new Bin(1000,510,20,150);
	bottombin=new Bin(900,575,219,20);

	paper=new Paper(100,500,20);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  if (keyDown("up")){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:19,y:-40});
  }
  ground.display();
  bottombin.display();
  leftbin.display();
  rightbin.display();
  paper.display();
}



