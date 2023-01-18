var x;
var y;
function setup() {
  createCanvas(600, 600);
  x = 120;
  y = 90;
}


function draw() {
  background(180);
  //was ellipse(120, 90, 60, 60)
  ellipse(x, y, 60, 60);
  
  //was ellipse(200, 90, 60, 60)
  ellipse(x + 80, y, 60, 60);
  
  //was ellipse(280, 90, 60, 60)
  ellipse(x + 160, y, 60, 60);
  
  //was ellipse(360, 90, 60, 60)
  ellipse(x + 240, y, 60, 60);
  
  //was ellipse(440, 90, 60, 60)
  ellipse(x + 320, y, 60, 60);
}
