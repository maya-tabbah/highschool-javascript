function setup() {
  createCanvas(600, 120);
}

function draw() {
  background(220);

  ///(initialize the variable; check for a condition; increment the variable)  
  for (var x = 11; x < width; x = x + 25) {
    noStroke();
    
    //use the incrementing variable for the red value.
    //Divide it by 2 so that it increments less drastically 
    fill(x / 2, 100, 100);
    
    //draw an ellipse with the x location of the variable called x 
    ellipse(x, 60, 20, 20);
  }
}


