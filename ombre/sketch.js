function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  noStroke();
  for(var i = 0; i < height; i=i+1)   //the variable i is set equal to 0, 0 is greater than the height, and i keeps on adding 1
    { 
      fill(255 * (i / height), 255 *(i / height),0);  //255 is red and red is mulitplied by i over the height and the green does the same, blue is empty
      rect(0,i, width, 1); //the x value starts at 0 and the y value is set to i 

    }
  console.log(255* (i / height));
    
  
  
  
}