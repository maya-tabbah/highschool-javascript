var x;
var y;
function setup() {
  createCanvas(400, 400);
  x = 0
  speed = 4
  y = 1
}

function draw() {
  background(220);
  
  ellipse(width/2, y, 50, 50);
  y += speed
  
  ellipse(x, 150, 50, 50);
  x += speed
  
  if (x > width || x < 0){
    speed *= -1
  }
  

}