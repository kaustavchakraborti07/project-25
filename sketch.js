
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;


function setup() {
	createCanvas(1000, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paper=new Paper(200,300,70);
	groundObject=new ground(width/2,470,width,20);
	dustbinObj=new dustbin(900,450);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  groundObject.display();
  dustbinObj.display();
  paper.display();

}
function keyPressed(){
if(keyCode=== UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-105});

}



}
