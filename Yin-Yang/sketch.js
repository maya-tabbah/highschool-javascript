var x;
var y;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  x = 150;
  y = 25;
}

function draw() {
  background(220);
  				
  								//Trapezoid
  fill(255, 101, 102); //pink
  beginShape();
  vertex(200,25);	//point 1
  vertex(50,100); //point 2
  vertex(50,275); //point 3
  vertex(200,350); //point 4
  endShape(CLOSE);
  
  							//Rectangles
	fill(1, 173, 255);
  rect(200,25, x,y);	//rect 1
	rect(200,75, x,y);	//rect 2
  rect(200,125,x,y);	//rect 3
  rect(200,175,x,y);	//rect 4
  rect(200,225,x,y); //rect 5
  rect(200,275,x,y); //rect 6
  rect(200,325,x,y); //rect 7
  
  									//Star thingy
  stroke(0,0,0);		
  fill(0)	//tbh I have no idea what i did here but,
  strokeWeight(1);	//it looks cool. 
  beginShape();
  vertex(200,50);		
  vertex(300,100);
  vertex(100,300);
  vertex(200,300);
  endShape(CLOSE);
  
  
  								//The actual yin yang
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