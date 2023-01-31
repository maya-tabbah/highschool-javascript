function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES)
  background(220);
  angle = 0
}

function draw() {
  push();
  translate(200,200)
  rotate(angle);
  rect(0,0,100,20);
  angle +=1
  pop();
  
  console.log(angle);
  
  
  
  
  
  
  
  
  
  //Adjust this value - start small and see what happens!
	
  //What happens if you move the rect to the origin?
  
  //what if you add a translation before the rotation, to shift the origin?

  //what if you create a variable for angle, and increment it the way we did for speed when creating movement?
  //what if the angle of rotation is controlled by mouseX or mouseY?
}