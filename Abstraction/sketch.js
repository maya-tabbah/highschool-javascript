function setup() {
  createCanvas(400, 400);
  frameRate(2);
}

function draw() {
  background(220);

  //code to draw a heart
  for(x = 50; x < width ; x += 100){
    for(y = 50; y < height; y += 100){
      var color = random(255)
      heart(x, y, color);
    }
  }
}

function heart(x, y, color){
    angleMode(DEGREES)
  fill(color)
  strokeWeight(0)
  triangle(x - 60,y - 40,x + 40,y - 40,x - 10,y + 40)
  arc(x - 35,y - 40,50,75,180,0)
  arc(x + 15,y - 40,50,75,180,0)
  }