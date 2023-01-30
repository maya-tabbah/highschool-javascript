var r;
function setup() {
  createCanvas(800, 600);
  colorMode(HSB);
}

function draw() {
  r = map(mouseX, 0, width, 0, 360);
  background(r,100,100);
  
  
  
}