function setup() {
  createCanvas(400, 400);

}
				//comment out certain lines to see more
function draw() {
 // background(mouseX,mouseY,220); //remove the mouse x & y to see more or comment out the background
  
  ellipse(mouseX, mouseY, 50, 50);
  ellipse(200,200, mouseX, mouseY);
  console.log(mouseX);
}