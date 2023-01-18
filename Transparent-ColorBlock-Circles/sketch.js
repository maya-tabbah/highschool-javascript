function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  //background(220);
  fill(255,0,0,1);
  ellipse(width/2,height/2,120);
  
  fill(0,255,0,1);
  ellipse(160,150,120);
  
  fill(0,0,255,1);
  ellipse(240,150,120);
}