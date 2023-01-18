var size;
var sizey;
function setup() {
  createCanvas(400, 400);
  size = 50;
  sizey = 50;
}


function draw() {
  background(220);
  ellipse(width/2, height/2, size, sizey);
  
  if (mouseX > width/2){
    size = 100;
  }
  
  
  else if (mouseY < 10){
    sizey = 25;
  }
  
  
  else{
    size = 50;
    sizey = 50;
  }
  
  
}