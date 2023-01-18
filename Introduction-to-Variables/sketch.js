function setup() {
  createCanvas(random(400), random(400));
    console.log(height,width);
  //console.log(width);          Console log can also be in the setup function
  //console.log(height);					     
}

function draw() {
  background(0);
  ellipse(width/2,height/2,width,height);
  console.log(height,width);
  //console.log(width);
  //console.log(height);
}


//width == holds the width of the canvas based on createCanvas
//height == holds the height of the canvas based on createCanvas
//console.log() == prints things to the console, include values from variables. Useful in debugging and programming