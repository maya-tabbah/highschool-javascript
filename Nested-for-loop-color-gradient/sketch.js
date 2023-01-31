function setup() {
  createCanvas(600, 120);
  noStroke();
}

function draw() {
  background(180);
  
  for(var x = 0; x < width; x = x + 15){
    for(var y = 0; y < height; y = y + 15){
      fill(x,y,100);
      ellipse(x,y,15,15);
    }
  }
  
  
}