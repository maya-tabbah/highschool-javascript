
var w;
var b;
function setup() {
  createCanvas(400, 400);
   angleMode(DEGREES);
  
  w = 225,225,225;
  b = 0,0,0;
}

function draw() {
  x = mouseX;
  y = mouseY;
  
  background(220);
  strokeWeight(0);
  fill(b);      								//black 
  arc(x, y,150,150,90,270);			//Semi circle arc on the left
	fill(w);												//white
  arc(x,y,150,150,270,90);			//Semi circle arc on the right
  fill(b);								     //black
  ellipse(x,y,80);			      //black cirle inbetween the 2 arcs
  fill(w);										//white again
  ellipse(x,y,80,70);					//white circle inbetween the 2 arcs
  ellipse(x,y,115,20);		   	//tiny white circle in the black
  fill(0,0,0);						  	//black
  ellipse(x,y,190,20);		  	//tiny black circle in the white

}