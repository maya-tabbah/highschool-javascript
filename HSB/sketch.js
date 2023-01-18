function setup() {
  createCanvas(360, 400);
  colorMode(HSB);
  noStroke()
;}

function draw() {
  background(mouseX,150,150);
  
  for(var i = 0; i <width; i=i+1){
  	fill(i, 100, 100);
    ellipse(i, i, i, i);

  
  }
}