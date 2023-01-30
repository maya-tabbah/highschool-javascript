var fillColor;
var radius;

function setup() {
  createCanvas(400, 400);
  fillColor = color(220, 45, 90);
  radius = 50;
}

function draw() {
  background(220);

  mousedist = dist(mouseX, mouseY, width / 2, height / 2);
  fill(fillColor);
  ellipse(width / 2, height / 2, 100, 100);

  if (mouseIsPressed) {
    if (mousedist < radius) {
      fillColor = color(0);
    } else {
      fillColor = color(220, 45, 90);
    }

  }





}