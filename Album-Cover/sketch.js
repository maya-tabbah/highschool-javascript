var x;
var r;
var g;
var b;
function setup() {
  createCanvas(400, 400);
  x = 25;
  r = random(255); // random red   //quick begining change
  g = random(255); // random blue 
  b = random(255); //random green

  
}

function draw() {
  
//The Yellow Ombre effect
  background(0);
  noStroke();
  for(var i = 0; i < height; i=i+1)   //the variable i is set equal to 0, 0 is greater than the height, and i keeps on adding 1
    { 
      fill(255 * (i / height), 255 *(i / height),0);  //255 is red and red is mulitplied by i over the height and the green does the same, blue is empty
      rect(0,i, width, 1); //the x value starts at 0 and the y value is set to i, width takes up the whole screen 

    }
  //console.log(255* (i / height));
  

//Sunflower
  fill(0,90,0,200); //transparent green
  triangle(width/2, mouseY+x+10, 230, mouseY+x+20, height/2, mouseY+60); //right leaf
  triangle(width/2,mouseY+60,170,mouseY+72,width/2,mouseY+85); //left leaf
  
  
  stroke(0); //stroke
  strokeWeight(3); //stokeweight
  
  
  line(height/2, mouseY,height/2,mouseY + 100); //stem
  
  fill(255,180,0,50);			//transparent yellow pedals
  ellipse(175, mouseY, x);      //petal 1
  ellipse(225, mouseY, x);			//petal 2
  ellipse(215, mouseY-20, x);	  //petal 3
  ellipse(180, mouseY+x-10 ,x);	//petal 4
  ellipse(200, mouseY-x ,x);	  //petal 5
  ellipse(200, mouseY+x, x);	  //petal 6
  ellipse(218, mouseY+x-5, x);	//petal 7
  ellipse(185, mouseY-20, x);	  //petal 8
  
  fill(0,0,0); //black
  ellipse(height/2, mouseY, 40);  //black circle
	
//The clouds
  r = random(255); // random red
  g = random(255); // random blue
  b = random(255); //random green

  
  noStroke();
  fill(r, g, b,200); //random colors, same transparency 
  //frameRate(3); // I would put this, but it slows down the entire program
  
  //cloud 1
  ellipse(mouseY+height/2+40,305,50);
  ellipse(mouseY+height/2,300,70);		
  ellipse(mouseY+160,305,50);
  
  //cloud 2
  ellipse(mouseY+height/2+40,360,x*2);
  ellipse(mouseY+height/2+15,365,x+10);
  ellipse(mouseY+height/2+60,365,x+10);
  
  //cloud 3
  ellipse(mouseY+x*14-10,330,x*2);
  ellipse(mouseY+x*12+15,335,x+15);
  ellipse(mouseY+x*14+15,335,x+15);
  
  //cloud 4
  ellipse(mouseY+60,320,x*2);
  ellipse(mouseY+80,325,x*2-10);
  ellipse(mouseY+40,325,x*2-10);
  
  //cloud 5
  ellipse(mouseY+130,370,x*2);
  ellipse(mouseY+110,375,x*2-10);
  ellipse(mouseY+150,375,x*2-10);
  
  
  

  
}