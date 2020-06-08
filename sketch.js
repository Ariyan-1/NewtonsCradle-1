const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(600,700);

	engine = Engine.create();
	world = engine.world;
	
	bobObject1=new Bob(200,300,30);
	bobObject2=new Bob(260,300,30);
	bobObject3=new Bob(297,300,30);
	bobObject4=new Bob(330,300,30);
	bobObject5=new Bob(380,300,30);

	roofObject=new Roof(285,100,400,20);
	bobDiameter=60

	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1,0);
	rope3=new rope(bobObject3.body,roofObject.body,0,0);
    rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1,0);
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2,0);
    
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(200,200,200);
 	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  }

  function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-5,y:-5}) 
	}
  }