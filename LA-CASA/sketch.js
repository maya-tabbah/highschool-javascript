function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0); //black background 
  strokeWeight(0);	//strokeweight of 0 idk why
  beginShape();
  vertex(20,220);		//start of left wall
  vertex(20,300);		//end of left wall
  vertex(50,300);		//Left floor
  vertex(50,280);		//left doorway thing
  vertex(80,280);		//Doorway space
  vertex(80,300);		//right doorway thing
  vertex(110,300);	//right floor
  vertex(110,220);	//right wall
  endShape(CLOSE);
  triangle(65,160,10,220,120,220); //roof
  
  
  
  
  
}