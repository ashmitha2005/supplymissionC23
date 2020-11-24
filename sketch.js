var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, boxside1, boxside2, boxside3;
var side1Body, side2Body, side3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxside1 = createSprite(groundSprite.x + 100, height-90,20,100);
	boxside1.shapeColor="red";

	boxside2 = createSprite(groundSprite.x - 100, height-90,20,100);
	boxside2.shapeColor="red";

	boxside3 = createSprite(groundSprite.x+10, height-50, 200,20);
	boxside3.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	side1Body = Bodies.rectangle(groundSprite.x + 100, height-90,20,100, {isStatic:true});
	World.add(world,side1Body);

	side2Body = Bodies.rectangle(groundSprite.x - 100, height-90,20,100, {isStatic:true});
	World.add(world,side2Body);

	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 side3Body = Bodies.rectangle(groundSprite.x+10, 630, 200,20, {isStatic:true});
	World.add(world,side3Body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false);
    
  }
}



