function preload(){
  powder = loadImage("powder.png");


}

function setup() {
  createCanvas(400, 400);
  //noStroke();
  textSize(15);
  frameRate(5);
 
 
}

function draw() {
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  background(r,g,b);
  
  for(x = 50; x < width ; x += 100){
    for(y = 50; y < height; y += 100){
      var color = random(255)
      shape(x, y, color);
}
} 
  
function shape(x,y,color){
  image(powder, x-50,y-70,100,100);
  fill(255);
  rect(x-10,y-15,20,50);
  fill(150);
  ellipse(x,y-18,17,12);
  fill(0,0,255);
  rect(x-9,y-4,18,18);
  text("👶", x-7,y+10);
  
}






}