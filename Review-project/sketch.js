var smile
function preload() {
  smile = loadImage("smile.png");
}





function setup() {
  createCanvas(600, 600);
  x = 10
  
  bg = color(250,50,100);
  textSize(20);
  strokeWeight(0);
 

}

function draw() {
  background(bg);
  
  
  
  //ellipse(x,500, 100);  // smiley
  
  fill(10,100,250);
  ellipse(100, 100, 30, 100);
  fill(200,130,250);
  ellipse(180, 60, 30, 100);
  fill(180,210,250);
  ellipse(260, 60, 50);
  fill(150,80,250);
  ellipse(330, 60, 50);
  fill(170,170,250);
  ellipse(410, 60, 30, 100);
  fill(0,0,200);
  ellipse(500, 100, 30, 100);
  
  fill(200,200,200);
  rect(200,height/2,200,100);
  
  
  if (mouseX >200 && mouseX < 400 && mouseY > 300 && mouseY < 400)
    bg = color(250,220,95);
  
  
  fill(0);
  if(mouseIsPressed && mouseX >200 && mouseX < 400 && mouseY > 300 && mouseY < 400){
    
    text("This is doing too much", 200,200);
  }
  
  text("Click Me", 260, 360);
  
  
  
  image(smile,x,400,150,150);
  x ++
  
  if(x > 600){
  x = 10
  }
  
}