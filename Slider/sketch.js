var r, g, b;

function setup() {
  createCanvas(400, 400);
  noStroke();

  rSlider = createSlider(0, 255, 100);
  rSlider.position(130, 100);
  
  gSlider = createSlider(0, 255, 0);
  gSlider.position(130, 200);
  
  bSlider = createSlider(0, 255, 255);
  bSlider.position(130, 300);
}

function draw() {
  background(mouseX,mouseY,10,150);
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  fill(r, g, b);
  triangle(200,50,10,350,400,350);
  

  
     
    
}