function setup() {
  createCanvas(800, 450);
}

function draw() {
  r = random(225);
  g = random(225);
  b = random(225);

  frameRate(1);
  x2 = int(random(-70, 65));

  for (var x = 0; x < width; x = x + 85) {
    for (var y = 0; y < height; y = y + 85) {
      stroke(g, r, b); //stroke color palette
      strokeWeight(2); //stroke weight

      fill(r, g, b); //large ellipse color palette
      ellipse(x, y, 100 + x2); //large ellipse

      fill(r, b, g); // large rectangle color palette
      rect(x, y, 100 + x2 ,100 + x2); //large rectangle 

      fill(g, r, b); //small rect and small ellipse color palette
      ellipse(x, y, 20 + x2); //small ellipse
      rect(x,y,35 + x2, 20 + x2); //small rect
    }
  }
}