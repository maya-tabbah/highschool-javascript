function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);  //this thing
} 

function draw() {
  //background(220);
  
  rect(mouseX, mouseY, 50,50);
  fill(mouseX, mouseY);
//  rect(height/2, width/2, mouseX, mouseY); this was for fun
}