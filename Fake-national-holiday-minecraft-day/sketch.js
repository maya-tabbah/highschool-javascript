var angle = 0.0
var center = 150
var size = 6
var speed = 0.05
var squaresize = 10
var steve

function preload() {

steve = loadImage("SteveMinecraft.png")
creep = loadImage("minecraft.png");
}


function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  
 
  background(0);//black background
  
  
//When the mouse is pressed the background randomly changes color  
  if (mouseIsPressed){  
    background(random(255),  random(255), random(255));
    frameRate(6);
  }
  else {frameRate(60);
        
  }
  
//makes the minecraft dirt block move side to side and expand
  var x = center + cos(angle) * size;
  var y = center + sin(angle) * size;
  
//the grass on top of the dirt block
  fill(119,210,84);
  rect(x,130,y,20);
  
//the actual dirt of the dirt block
  fill(98,71,53);
  rect(x,150,y,90);
  
  angle += speed;
  size += 0.25
 
  //text
  fill(random(255), random(255), random(255)); //random colors
  text("Happy Minecraft Day", 60,100) //words + location
  textSize(30); //text size
  textFont('Helvetica'); //font
  
  image(steve,220,220,200,200);
  image(creep,10,220,100,200);
  
}
