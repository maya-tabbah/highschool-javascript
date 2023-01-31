var colorlist = []

function setup() {
  createCanvas(400, 400);
  noStroke();
  colorlist=[color(255,0,0),
                color(0,255,0),
                color(0,0,255),
                color(120,0,0),
                color(60,130,40)]
  i = int(random(0,colorlist.length));
}

function draw() {
  background(220);
  
  fill(colorlist[i]);
  rect(100,100,100,50);
  
  ellipse(300,300,70);
  
  ellipse(100,300,20);
  
  rect(300,50,40,40);
  
  ellipse(200,200,60);
}