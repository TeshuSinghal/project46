
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var airplaneImg;
var airplane;
var coinImg;
var cloudImg;

function preload(){
	airplaneImg = loadImage("plane.png");
	coinImg = loadImage("coin.png");
	cloudImg = loadImage("cloud.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	airplane = createSprite(displayWidth- 1000, displayHeight- 400, 60, 40);
	airplane.addImage(airplaneImg);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(80, 162, 218);

  spawnCoins();
  spawnClouds();
  
  drawSprites();
 
}

function spawnCoins() {
	if (frameCount % 120 === 0) {
	  var coin = createSprite(width+20,height-300,40,10);
	  coin.y = Math.round(random(100,600));
	  coin.addImage(coinImg);
	  coin.scale = 0.1;
	  coin.velocityX = -3;
	  coin.lifetime = 500;
	  
	}
	
  }

  function spawnClouds() {
	if (frameCount % 60 === 0) {
	  var cloud = createSprite(width+20,height-300,40,10);
	  cloud.y = Math.round(random(100,600));
	  cloud.addImage(cloudImg);
	  cloud.scale = 0.5;
	  cloud.velocityX = -3;
	  cloud.lifetime = 500;
	  
	}
	
  }



