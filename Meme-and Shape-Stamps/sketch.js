var r,g,b; //for color

//for pyramids
var base;
var shadow;

function setup() {
  createCanvas(400, 400);
  //frameRate(1)
  angleMode(DEGREES);
  ellipseMode(CENTER);
  noStroke();
  background(230);
  
  //picks colors randomly -- for pyramids
  
  bread = loadImage("bread.png");
  cat = loadImage("cat.png");
  
}

function draw() {
}

function mouseClicked(){
  r = random(255);
  g = random(255);
  b = random(255);
  //pick a random number between 0 and 1
  var rand = random();
  //if the number is bigger than 0.5 (which is likely to happen half of the time)
  if(rand < 0.3){
    shape_1(mouseX, mouseY, random());
  }
  
  if(0.32 < rand < 0.67){
    shape_3(mouseX, mouseY, random());
  }
  
  if(0.68 < rand < 1.0){
    shape_2(mouseX, mouseY, random());
  }
  

}

function keyPressed(){
  if(key =='c'){
    background(230);
  }
}

function shape_1(x, y, s){
  push();
    translate(x,y);
    fill(102, 102, 153)
    scale(s);
    angleMode(DEGREES)
    strokeWeight(0)
    triangle(60, 100, -60, 100, 0, 0);
    image(bread,-22, 40,50,50);
  pop();
}

function shape_2(x, y, s){
  push();
    translate(x, y);
    scale(s);
    fill(204, 0, 102);
    angleMode(DEGREES)
    strokeWeight(0)
    ellipse(0,0, 100);
    image(cat,-36, -38, 80,80);
  
  pop();
}

function shape_3(x, y, s){
  push();
    var base = color(121,g,b,240);
    var shadow = color(r,50, 50);
    translate(x, y);
    scale(s);
    angleMode(DEGREES)
    strokeWeight(0)

    fill(base);
    triangle(0,0,20,-50,40,0);//base
  
    fill(shadow);
    triangle(40,0,20,-50,60,0);//shade
  
  pop();
}

