function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(119, 98, 255);   //background color of circle
  fill(119, 98, 255);         //fill color of circle
 	ellipse(200, 150, 300);			//circle
  strokeWeight(30);						//thickness
  point(100,100)							//Left point
  stroke(214, 141, 200);			//pink color
  point(250,100);							//right point
  line(200, 200, 150, 200);		//mouth thing

}