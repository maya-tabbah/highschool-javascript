var angle = 0.0;
var speed = 2;
var x = 0;

function setup() {
  createCanvas(600, 200);
   background(220);
  angleMode(DEGREES)

}

function draw() {
  var y1 = 60 + sin(angle) * 20;
  ellipse( x , y1, 40, 40);
  angle += speed;
  x+=1
 
}