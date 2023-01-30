var col;
var weight;
function setup() {
  createCanvas(400, 400);
  background(0);
  col = color(255,250,250,100);
  
}

function draw() {
  //noStroke();
  //ellipse(mouseX, mouseY, 50);
  
  weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  stroke(col)
  line(mouseX, mouseY, pmouseX, pmouseY);
}