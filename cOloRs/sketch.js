function setup() {
  createCanvas(400, 175);
  //we do not declare a colorMode here because RGB is the default.
}

function draw() {
  background(220);
  strokeWeight(100);
  
  fill(255,0, 0);
  ellipse(50,50,50);
  
  fill(255,100,0);
  ellipse(125,50,50);
  
  fill(255,200,0);
  ellipse(200,50,50);
  
  fill(0,230,0);
  ellipse(275,50,50);
  
  fill(0,0,255);
  ellipse(350,50,50);
  
  //swap driver && navigator roles
  fill(155,0, 200);
  ellipse(50,125,50);
  
  fill(100, 0, 190);
  ellipse(125,125,50);
  
  fill(255,0,100);
  ellipse(200,125,50);
  
  fill(0,150,255);
  ellipse(275,125,50);
  
  fill(0,100,100);
  ellipse(350,125,50);
}