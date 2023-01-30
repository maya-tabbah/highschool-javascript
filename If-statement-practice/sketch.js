function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (mouseY > height/2){
    background(0,0,255);
  }
  
  else if (mouseX && mouseY){
    background(255, 0, 255);
  }
  
  else{
    background(200,80,0);
  }
  
  
  
  
  
  
}