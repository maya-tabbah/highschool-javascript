var trifill;
var bgc;
var rse;
var crazyrect;
var rectrand1;
var rectrand2;
var rectrand3;
var magicircle;
var circlestroke;
var radius;
var tristoke;
var cirwei;


function setup() {
  createCanvas(500, 500);
  trifill = color(250, 10, 130);
  rse = 90;
  crazyrect = color(90, 120, 190);
  magicirlce = color(255);
  circlestroke = color(250, 250, 90);
  radius = 70;
  tristroke = color(100, 200, 0);
  cirwei = 20;
}




function draw() {
  bgc = background(250, 100, 250)

  //when mouse is pressed on different locations the bg changes color 
  if (mouseIsPressed) {
    bgc = background(mouseX, mouseY, 150);
  }

  //features and vars of the rectangle
  strokeWeight(0); //stoke of rectangle 
  fill(crazyrect); //original fill of rectangle

  //the randoms for the color value of the rectangle
  rectrand1 = random(255); //random r
  rectrand2 = random(255); //random g
  rectrand3 = random(255); //random b

  //rectangle that gives you a seizure when you hover over it
  rect(100, 150, 170, 90); //rect
  if (mouseX > 100 && mouseX < 270 && mouseY > 150 && mouseY < 240) {
    crazyrect = color(rectrand1, rectrand2, rectrand3);
  } else {
    crazyrect = color(90, 120, 190);
  }


  //features and vars of square
  strokeWeight(12);
  stroke(150, 0, 150);
  fill(trifill);


  //the square grows when pressed
  rect(150, 20, 90, rse);
  if (mouseIsPressed) {
    if (mouseX > 150 && mouseX < 240 && mouseY > 20 && mouseY < 20 + rse) {
      rse = 600;
    } else {
      rse = 90;
    }
  }

  //features and vars of cirlce
  strokeWeight(cirwei);
  stroke(circlestroke);
  fill(magicirlce);
  ellipse(100, 360, 140);


  //triangle appears when hovered over circle
  if (dist(mouseX, mouseY, 100, 360) < radius) {
    strokeWeight(10);
    stroke(tristroke);
    triangle(350, 450, 400, 290, 450, 400);
  }


  //stokeweight of circle when hovered
  if (dist(mouseX, mouseY, 100, 360) < radius) {
    cirwei = 30;
  } else {
    cirwei = 20;
  }






}