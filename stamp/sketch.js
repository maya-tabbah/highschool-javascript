var x
var y
var r
var g
var b
var col
function setup() {
  createCanvas(400, 400);
  noStroke();
  background(50)
}

function mouseClicked() {
  
  r = random(255);
  g = random(255);
  b = random(225);
  shape1(r,g,b)
}


function shape1(r,g,b) {
  x = mouseX
  y = mouseY
  fill(r,g,b)
  ellipse(x, y, 60);
  fill(g,b,r);
    ellipse(x, y, 10);
    ellipse(x + 15, y, 10);
  fill(b,r,g);
    triangle(x,y+10,x+10,y+20,x+20,y+10)
    
}

function keyPressed(){
  if(key == 'a'){
    background(50);
  }
}



