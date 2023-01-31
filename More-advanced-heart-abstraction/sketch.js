function setup() {
  createCanvas(400, 400);
  frameRate(6)
}

function draw() {
  background(220);

  //draws hearts all over the canvas
  for (x = 60; x < 2 * width; x += 100) {
    for (y = 75; y < 2 * height; y += 100) {
      c = color(random(255), 0,0)
      s = random(0 ,5)
      heart(x, y, s, c);
    }
  }
}

//heart function that can draw a heart in different locations
function heart(x, y,s,color) {
  push()
   scale(s)
  fill(color)
   angleMode(DEGREES)
   strokeWeight(0)
   triangle(x - 60, y - 40, x + 40, y - 40, x - 10, y + 40)
   arc(x - 35, y - 40, 50, 75, 180, 0)
   arc(x + 15, y - 40, 50, 75, 180, 0)
  pop()
}
