function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  ellipse(mouseX, height/2, 50); 
  if(mouseX < width/2){
  fill(0);
  } else{
    fill(255);
  }

}