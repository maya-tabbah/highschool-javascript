function setup() {
  createCanvas(560, 120);
}

function draw() {
  
  var x = 100;
  
  fill(255,0,0);
  
  while(x < width){
    ellipse(x, 60, 60);
    x = x + 100;
  
  }
  
  fill(0);
  var x2 = 90
  
  while(x2 < width){
    ellipse(x2, 50, 10,20);
    x2 = x2 + 100;
  }
  
  x3 = 110;
  while(x3 < width){
    ellipse(x3, 50, 10,20);
    x3 = x3 + 100;
  }
0
  k = 85;
 
  while(k < width){
    rect(k, 70, 30, 1);
    k = k + 100;
  }
  
}