var devfill;
var fillno;
var zero;
var col1;
var col2;
var col3;
var col4;
var col6;
var col7;
var col8;
var col9;
var col10;
var col11;
var col12;
var radius;
var linestroke;
var linesize;
var button;

function setup() {
  createCanvas(800, 570);
  background(255, 255, 255);
  devfill = color(210, 220, 220);
  fillno = (255);
  zero = 0;
  col1 = color(255, 0, 0);
  col2 = color(0, 255, 0);
  col3 = color(0, 0, 255);
  col4 = color(255, 255, 0);
  col5 = color(0, 255, 255);
  col6 = color(255, 0, 255);
  col7 = color(0, 150, 50);
  col8 = color(260, 80, 10);
  col9 = color(200, 100, 250);
  col10 = color(250, 80, 80);
  col11 = color(250, 137, 189);
  col12 = color(0, 0, 0);
  radius = 30;
  linestroke = color(0, 0, 0);
  linesize = 6;
  button = color(250, 180, 200);


}

function draw() {

  fill(fillno);
  strokeWeight(zero);
  //rect(20,20,760,550); //big rect
  //rect(350, 570, 100, 50); //laptop neck
  //rect(200, 620, 400, 80); //laptop stand

  fill(devfill); //grey fill
  strokeWeight(3); //stroke
  rect(40, 400, 550, 150); //bottom palette
  rect(600, 30, 170, 520); //right palette

  //colors on top row of bottom palette
  fill(col1);
  ellipse(100, 440, 60); //1/1
  fill(col2);
  ellipse(180, 440, 60); //1/2
  fill(col3);
  ellipse(260, 440, 60); //1/3
  fill(col4);
  ellipse(340, 440, 60); //1/4
  fill(col5);
  ellipse(420, 440, 60); //1/5
  fill(col6);
  ellipse(500, 440, 60); //1/6

  //colors on bottom row of bottom palette
  fill(col7);
  ellipse(100, 510, 60); //2/1
  fill(col8);
  ellipse(180, 510, 60); //2/2
  fill(col9);
  ellipse(260, 510, 60); //2/3
  fill(col10);
  ellipse(340, 510, 60); //2/4
  fill(col11);
  ellipse(420, 510, 60); //2/5
  fill(col12);
  ellipse(500, 510, 60); //2/6

  
  //The code for all markers
  if (mouseIsPressed) {
    strokeWeight(linesize);
    stroke(linestroke);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  //the col1 marker
  if (dist(mouseX, mouseY, 100, 440) < radius && mouseIsPressed) {
    linestroke = color(255, 0, 0);
  }

  //the col2 marker
  if (dist(mouseX, mouseY, 180, 440) < radius && mouseIsPressed) {
    linestroke = color(0, 255, 0);
  }

  //the col3 marker
  if (dist(mouseX, mouseY, 260, 440) < radius && mouseIsPressed) {
    linestroke = color(0, 0, 255);
  }

  //the col4 marker
  if (dist(mouseX, mouseY, 340, 440) < radius && mouseIsPressed) {
    linestroke = color(255, 255, 0);
  }

  //the col5 marker
  if (dist(mouseX, mouseY, 420, 440) < radius && mouseIsPressed) {
    linestroke = color(0, 255, 255);
  }

  //the col6 marker
  if (dist(mouseX, mouseY, 500, 440) < radius && mouseIsPressed) {
    linestroke = color(255, 0, 255);
  }

  //the col7 marker
  if (dist(mouseX, mouseY, 100, 510) < radius && mouseIsPressed) {
    linestroke = color(0, 150, 50);
  }

  //the col8 marker
  if (dist(mouseX, mouseY, 180, 510) < radius && mouseIsPressed) {
    linestroke = color(260, 80, 10);
  }

  //the col9 marker
  if (dist(mouseX, mouseY, 260, 510) < radius && mouseIsPressed) {
    linestroke = color(200, 100, 250);
  }

  //the col10 marker
  if (dist(mouseX, mouseY, 340, 510) < radius && mouseIsPressed) {
    linestroke = color(250, 80, 80);
  }

  //the col11 marker
  if (dist(mouseX, mouseY, 420, 510) < radius && mouseIsPressed) {
    linestroke = color(250, 137, 189);
  }
  //the col12 marker
  if (dist(mouseX, mouseY, 500, 510) < radius && mouseIsPressed) {
    linestroke = color(0, 0, 0);
  }

  //Clear All Button
  strokeWeight(1);
  fill(fillno); //white fill
  rect(610, 50, 150, 65); //clear all rect
  fill(zero); //text color black
  textSize(32); //text size
  text('Clear All', 620, 95); //text

  if (mouseX > 610 && mouseX < 760 && mouseY > 50 && mouseY < 111 && mouseIsPressed) {
    background(255);
  }

  //Eraser Button
  fill(button);
  rect(615, 140, 140, 40);
  fill(zero);
  textSize(20);
  text('Erase', 660, 170);

  if (mouseX > 615 && mouseX < 755 && mouseY > 140 && mouseY < 180 && mouseIsPressed) {
    linestroke = color(255, 255, 255);
  }

  //Magic Wand button
  fill(button);
  rect(615, 200, 140, 40);
  fill(zero);
  text('Magic Wand', 630, 230);
  textSize(15);
  text('Hold the "o" key down', 610, 256);

  if (keyIsPressed) {
    if (key == 'o') {
      line(mouseX, mouseY, 100, 100); //magic amirite
    }
  }

  // SUB-RACT the strokeweight
  fill(button);
  ellipse(690, 290, 50);
  fill(zero);
  textSize(60);
  text('_', 674, 285);
  textSize(14);

  text('Click the "-" key to', 625, 330);
  text('decrease pen size', 630, 342);

  if (keyIsPressed) {
    if (key == '-') {
      linesize = linesize - 1;
    }
  }

  //Increase the strokeweight
  fill(button);
  ellipse(690, 380, 50);
  fill(zero);
  textSize(50);
  text('+', 675, 393);
  textSize(14);
  text('Click the "=" key to', 625, 420);
  text('increase pen size', 630, 433);

  if (keyIsPressed) {
    if (key == '=') {
      linesize = linesize + 1
    }
  }

  //Random Squares button
  fill(button);
  rect(615, 450, 140, 40);
  textSize(20);
  fill(zero);
  text('Squares', 650, 479);
  textSize(15);
  text('Click or hold "x" for ', 620, 505);
  text('random squares', 630, 518);

  if (keyIsPressed) {
    if (key == 'x') {
      rect(mouseX, mouseY, 60, 60)
    }
  }









}