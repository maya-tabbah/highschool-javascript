var first;
var sec;
var third;
function setup() {
  createCanvas(400, 400);
  first = 150;
  sec = 210;
  third = 250;
}

function draw() {
  background(mouseY);
  
  fill(255, 215, 0);
  rect(150,100, 100, 200);
  

  
  if(mouseY <= first){
    fill(255,0,0);
    ellipse(height/2, 140, 50);
    }
  
  else if (mouseY >= sec && mouseY<= third){
    fill(255,255,0);
    ellipse(height/2, 200, 50);
  }
  
  else if (mouseY >= third){
    fill(0,255,0);
    ellipse(height/2, 260, 50);
  }
    
  else{
  	fill(255, 215, 0);
  }
  
  
  
}