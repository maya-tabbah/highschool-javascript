var i;
var n;
var g;
var r;
var d;
var g;
function setup() {
  createCanvas(400, 400);
  i = color(150,150, 250);
  n = color(20,150,150);
  g = color(0);
  r = 200;
  d = 200;
  g = 100;
}

function draw() {
  background(220);
  
  fill(i);
  ellipse(d, d, r, r);
  
  if (keyIsPressed){
    if (key == 'm'){
      i = color(250,50,100);
    }else if(key == 'a'){
      strokeWeight(30);
      stroke(g);
    }else if(key == 'y'){
      strokeWeight(10);
      stroke(n);
    }else if(key == 't'){
      r = 400;
    }else if(key == 'b'){
      d = 100;
    }else if(key == 'h'){
      color(150,150, 250);
    }
  
  }
}