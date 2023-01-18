var size;
function setup() {
  createCanvas(400, 400);
	angleMode(DEGREES);
  size = 200;
}

function draw() {
  background(255,173,204);//pink
  
  if(mouseX > width/2){
    background(0);//black
    size = 50;
    console.log("true")
  }
  
  else if(mouseX <= 10){
    background(random(255));
   }
  
  else if(height/2 && width/2){
  	background(0,255,0);
  }
               
  else{
    background(255,173,204);//pink
    size = 200;
    console.log("false")
  }
  
  
  arc(width/2, height/2, size, size,90,270); //left side of circle
  
	
	arc(width/2, height/2, size, size,270,90); //right side of circle
  
}