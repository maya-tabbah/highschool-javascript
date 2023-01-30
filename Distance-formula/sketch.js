var radius;
function setup() {
  createCanvas(400, 400);
  radius = 50;
}

function draw() {
  background(220);
  
  ellipse(width/2, height/2, 100, 100);
  
  if(dist(mouseX, mouseY, width/2, height/2) < radius){
    fill(0); 
  }else{
  	fill(255);
  }
     
}