var col;
var radius;
var size1;
var size2;
function setup() {
  createCanvas(400, 400);
  col = color(200, 0, 100);
  radius = 50;
  size1 = 100;
  size2 = 100;
  
}

function draw() {
  background(220);
  
  ellipse(100, 100, 100, 100);
  md = dist(mouseX, mouseY, 100, 100);
  fill(col);
  if (mouseIsPressed){
    if (md < radius){
      col = color(0,0,0);
    }else{
      col = color(200, 0, 100);
    }
  }
  
  
  ellipse(300, 300, size1, size2);
  mdsize = dist(mouseX, mouseY, 300, 300);
  if (mouseIsPressed){
    if (mdsize < radius);
    size1 = 200;
    size2 = 200;
  }else{
    size1 = 100;
    size2 = 100;
  
  }
  
  
  
}