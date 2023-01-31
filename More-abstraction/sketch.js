function setup() {
  createCanvas(400, 400);
  frameRate(2)
}

function draw() {
  background(220);
  
  for(x = 50; x < width ; x += 100){
    for(y = 50; y < height; y += 100){
      var color = random(255)
      shape(x, y, color);
    }
  }
}

function shape(x,y,color){
  fill(color);
  ellipse(x,y,60);
  ellipse(x+20,y-10,10);
  ellipse(x,y-10,10);
  triangle(x+10,y+20,x+20,y,x,y);







}