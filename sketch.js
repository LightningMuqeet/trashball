var ground, bin;
var log1, log2, log3;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,650,800,10);
	
    
	log1 = new Log(600,635,200,20);
	log2 = new Log(500,595,20,100);
	log3 = new Log(700,595,20,100);  

	paper = new Paper()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155);
  Engine.update(engine);
  ground.display();
 
  paper.display();
  log1.display();
  log2.display();
  log3.display();
  imageMode(CENTER);
  image(bin,600 ,595,250,150)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position, {x:50, y:-60});
	}
}

