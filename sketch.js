
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var ground;
var stone;
var boyImage;
var mango1,mango2;


function preload()
{
	boyImage  = loadImage("images/boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(400,500,50,50);
	ground = new Ground(width/2,700,width,10);
	
	stone = new Stone(400,420,20,20);
	
	mango1  =new Mango(400,400,50,50);
	
	mango2  = new Mango(500,450,50,50);

	

	
	
	World.add(world,ground)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boyImage,60,580,150,150);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
 
  stone.display();
 
 
  
  

  
 
  
  drawSprites();
 
}



