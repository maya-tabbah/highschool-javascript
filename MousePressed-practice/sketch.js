var r;
var b;
function setup() {
  createCanvas(400, 400);
  r = color(255, 0, 0);
  b = color(0,0,255);
}

function draw() {
  background(220);
  
  fill(r);
	rect(150,100,100,100);
  
  fill(b);
	rect(0,0,100,100);
}

function mousePressed(){
	
  if (mouseX > 150 && mouseX < 250  && mouseY > 100 && mouseY < 200){
  	r = b;
  }else{
      r = color(255, 0, 0);
  }
  
  if (mouseX > 0 && mouseX < 100  && mouseY > 0 && mouseY < 100){
    b = color(255,0,0);
  }else{
  		b = color(0,0,255);
  }
  


}