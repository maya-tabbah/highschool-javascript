var radius;
var col1;
var col2;
var col3;
var col4;
var col5;
var col6;

function setup() {
  createCanvas(400, 400);
  strokeWeight(0);
  radius = 35;
  col1 = color(255);
  col2 = color(255);
  col3 = color(255);
  col4 = color(255);
  col5 = color(255);
  col6 = color(255);
}

function draw() {
  background(51);

  //top left
  fill(col1);
  ellipse(100, 100, 70);
  //top middle
  fill(col2);
  ellipse(height / 2, 100, 70);
  //top right
  fill(col3);
  ellipse(300, 100, 70);
  //bottom left
  fill(col4);
  ellipse(100, 200, 70);
  //bottom middle
  fill(col5);
  ellipse(height / 2, 200, 70);
  //bottom right
  fill(col6)
  ellipse(300, 200, 70);



  //top left ellipse turns blue
  if (dist(mouseX, mouseY, 100, 100) < radius) {
    col1 = color(0, 200, 250); //blue
  } else {
    col1 = color(255); //white
  }


  //bottom right and left ellipses turn purple
  if (dist(mouseX, mouseY, 200, 100) < radius) {
    col4 = color(190, 0, 200); //purple
    col6 = color(190, 0, 200); //purple
  } else {
    col4 = color(255); //white
    col6 = color(255); //white
  }

  //top right & bottom mid ellipses turn black 
  if (dist(mouseX, mouseY, 300, 100) < radius) {
    col3 = color(0, 0, 0); //black
    col5 = color(0, 0, 0); //black
  } else {
    col3 = color(255); //white
    col5 = color(255); //white
  }


  //top three ellipses turn red 
  if (dist(mouseX, mouseY, 100, 200) < radius) {
    col1 = color(255, 0, 0); //red
    col2 = color(255, 0, 0); //red
    col3 = color(255, 0, 0); //red
  } else if (dist(mouseX, mouseY, 100, 100) < radius) {} else if (dist(mouseX, mouseY, 300, 100) < radius) {} else {
    col1 = color(250); //white
    col2 = color(255); //white
    col3 = color(255); //white
  }

  //top left ellipse turns green
  if (dist(mouseX, mouseY, 200, 200) < radius) {
    col1 = color(0, 255, 0);
  } else if (dist(mouseX, mouseY, 100, 200) < radius) {} else if (dist(mouseX, mouseY, 100, 100) < radius) {} else {
    col1 = color(255);
  }



  //bottom right ellipse turns orange
  if (dist(mouseX, mouseY, 300, 200) < radius) {
    col6 = color(240, 90, 0);
  } else if (dist(mouseX, mouseY, 200, 100) < radius) {} else {
    col6 = color(255);
  }




}