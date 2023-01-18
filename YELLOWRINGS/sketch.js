function setup() {
  createCanvas(400, 175);
  colorMode(HSB);
  //you MUST declare this line if you want to use HSB!
}

function draw() {
  background(220);
  strokeWeight(10);
  stroke(60,60,100);
  
  
  fill(190,100,100);
  ellipse(50,50,50);
  
  fill(140,100,100);
  ellipse(125,50,50);
  
  fill(60,100,50);
  ellipse(200,50,50);
  
  fill(300,100,100);
  ellipse(275,50,50);
  
  fill(30,100,100);
  ellipse(350,50,50);
  
  //swap driver && navigator roles
  
  fill(240, 100, 100);
  ellipse(50,125,50);
  
  fill(360, 100, 100);
  ellipse(125,125,50);
  
  fill(330, 100, 100);
  ellipse(200,125,50);
  
  fill(220, 100, 100);
  ellipse(275,125,50);
  
  fill(150, 100, 100);
  ellipse(350,125,50);
}