var angle = 0.0;
var center = 150;
var size = 6;
var speed = 0.05;
var circlesize = 10;

function setup() {
  createCanvas(300, 300);
  background(0);
}

function draw() {
  var x = center + cos(angle) * size;
  var y = center + sin(angle) * size;
  ellipse(x, y, circlesize, circlesize);
  angle += speed;
  size += 0.25
  circlesize += 0.25
  
  if (circlesize % 2==0){
    fill(255)

  }
  
  if (keyIsPressed){
    fill(random(255), random(255), random(255))
  
  
  }
  
  
}