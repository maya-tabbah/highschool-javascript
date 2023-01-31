var angle = 0.0;
var speed = 5;
var x = 0;
var origin = 100
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  var y1 = origin + sin(angle + 40) * 40;
  var y2 = origin + sin(angle + 10) * 40;
  var y3 = origin + sin(angle) * 40;
  ellipse( x + 80, y1, 40, 40);
  ellipse(x + 120, y2, 40, 40);
  ellipse(x + 160, y3, 40, 40);
  angle += speed;
  
  if (keyIsPressed){
    x = + 3
   }
  if (x > width){
    x = -160

  }
}

