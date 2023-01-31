function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (var x = 0; x < width; x = x + 35) {
    for (var y = 0; y < height; y = y + 35) {
      fill(255, 0, 0); //red
      ellipse(x, y, 40, 40); //red circle
      
      fill(0, 255, 0); //green
      ellipse(x, y, 30, 30); //green circle
      
      fill(0, 0, 250); //blue
      ellipse(x, y, 18, 18); //blue circle
      
      fill(255, 0, 150); //pink
      ellipse(x, y, 8, 8); //pink circle
    }
  }
}