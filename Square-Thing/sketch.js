function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  text(mouseX + "," +mouseY, 20,20);
  
  
  rect(0,0,50,50);
  rect(349,349,50,50);
  rect(349,0,50,50);
  rect(0,349,50,50);
  
  rect(150,150,50,50);
  rect(200,150,50,50);
  rect(150,200,50,50);
  rect(200,200,50,50);
}