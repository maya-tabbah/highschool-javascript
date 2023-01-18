function setup() {
  createCanvas(400, 400);
   angleMode(DEGREES);
}

function draw() {
  background(220);
  strokeWeight(0);
  fill(0,0,0);      					//black 
  arc(200,150,150,150,90,270);//Semi circle arc on the left
	fill(255,255,255);					//white
  arc(200,150,150,150,270,90);//Semi circle arc on the right
  fill(0,0,0);								//black
  ellipse(200,115,80,80);			//black cirle inbetween the 2 arcs
  fill(255,255,255);					//white again
  ellipse(204,190,80,70);			//white circle inbetween the 2 arcs
  ellipse(200,115,20);		   	//tiny white circle in the black
  fill(0,0,0);						  	//black
  ellipse(200,190,20);		  	//tiny black circle in the white

}