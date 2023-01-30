var r;
var t;
var size;

function setup() {
  createCanvas(400, 400);
  r = color(255, 0, 0);
  size = 100;
  t = color(0, 255, 0);
}

function draw() {
  background(220);

  fill(r);
  ellipse(100, 100, size, size);

  if (keyIsPressed) {
    if (key == 'b') {
      r = color(0);
    } else if (key == 'm') {
      r = color(0, 255, 0);
    } else if (key == 'n') {
      r = color(0, 0, 255);
    }
  }
  if (mouseIsPressed) {
    size++
  }


}