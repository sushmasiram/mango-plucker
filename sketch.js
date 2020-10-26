
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage, boy;
var ground, tree;
var mango1, mango2, mango3, mango4;

function preload(){
	boyImage = loadImage("boy.png");
}

function setup(){
	createCanvas(1000, 700);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 650, 1000, 100);

	tree = new Tree(600, 340);

	mango1 = new Mango(420, 250);
	mango2 = new Mango(700, 150);
	mango3 = new Mango(800, 300);
	mango4 = new Mango(600, 120);
	mango5 = new Mango(560, 230);
	mango6 = new Mango(660, 330);
	mango7 = new Mango(760, 180);
	mango8 = new Mango(540, 120);
	mango9 = new Mango(660, 230);
	mango10 = new Mango(460, 290);
	mango11 = new Mango(480, 240);
	
	stone = new Stone(68,350)

	launch = new launcher(stone.body,{x:85,y:445})

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);

  image(boyImage ,50,380,200,300);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  stone.display();

  launch.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launch.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:55, y:445}) 
	  launch.attach(stone.body);
	}
}

function detectollision(lstone,lmango){
	console.log(lstone.body.circleRadius)
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  console.log(distance)
  s = lstone.body.circleRadius+lmango.body.circleRadius;
  if(distance<=s)
  {
    Matter.Body.setStatic(lmango.body,false);
  }

}



