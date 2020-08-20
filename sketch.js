
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof1 = new roof (400,50,400,50);
	bob1 = new bob (250,350);
	bob2 = new bob (300,350);
	bob3 = new bob (350,350);
	bob4 = new bob (400,350);
	bob5 = new bob (450,350);
	chain1 = new chain (bob1.body,roof1.body,-145,0);
	chain2 = new chain (bob2.body,roof1.body,-78,0);
	chain3 = new chain (bob3.body,roof1.body,-8,0);
	chain4 = new chain (bob4.body,roof1.body,62,0);
	chain5 = new chain (bob5.body,roof1.body,140,0);
	

}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  keyPressed();
  // mouseDragged();
  //mouseReleased();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
 
}

	function keyPressed(){
    if (keyCode=== UP_ARROW){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.5 , y:-0.0045});
    }
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:0.73,y:0.9517});   
  
   
}


