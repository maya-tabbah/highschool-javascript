var angle = 0.0;
var offset = 200; //position
var ypos = 200
var scalar = 50;  //# of circles
var speed = 0.05;

function setup() {
  createCanvas(500, 400);
  background(204);
}

function draw() {
  var x = offset + cos(angle) * scalar;
  var y = ypos + sin(angle) * scalar;
  ellipse(x, y, y, x);
  angle += speed;
}