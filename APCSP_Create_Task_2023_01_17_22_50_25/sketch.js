//goal: Create a running man that will go and collect pizza. If he touches the edge, he dies, if he touches bombs, he dies. 
function setup() {
  createCanvas(400, 400);
  
  
 score = 0;
  
  
  a1 = int(random(20,370));
  a2 = int(random(20,370));
  
  b1 = int(random(20,370));
  b2 = int(random(20,370));
  
  c1 = int(random(20,370));
  c2 = int(random(20,370));
  
  d1 = int(random(20,370));
  d2 = int(random(20,370));
  
  e1 = int(random(20,370));
  e2 = int(random(20,370));
  
  f1 = int(random(20,370));
  f2 = int(random(20,370));
  
  g1 = int(random(20,370));
  g2 = int(random(20,370));
  
  h1 = int(random(20,370));
  h2 = int(random(20,370));
  
  i1 = int(random(20,370));
  i2 = int(random(20,370));
  
  j1 = int(random(20,370));
  j2 = int(random(20,370));
  
  k1 = int(random(20,370));
  k2 = int(random(20,370));
  

  a3 = int(random(20,370));
  a4 = int(random(20,370));
  
  b3 = int(random(20,370));
  b4 = int(random(20,370));
  
  c3 = int(random(20,370));
  c4 = int(random(20,370));
  
  d3 = int(random(20,370));
  d4 = int(random(20,370));
  
  e3 = int(random(20,370));
  e4 = int(random(20,370));
  
  f3 = int(random(20,370));
  f4 = int(random(20,370));
  
  g3 = int(random(20,370));
  g4 = int(random(20,370));
  
  h3 = int(random(20,370));
  h4 = int(random(20,370));
  
  i3 = int(random(20,370));
  i4 = int(random(20,370));
  
  j3 = int(random(20,370));
  j4=  int(random(20,370));
  
  k3 = int(random(20,370));
  k4 = int(random(20,370));

}

function draw() {
  background(50,50,50);
  
  //black square
  fill(0);
  rect(mouseX,mouseY,20,20);
  
   

  if (score == 0){
    fill(255,0,0);   
    rect(a1,a2,20,20);
    fill(0,255,0);   
    rect(a3,a4,20,20);

  }
  
  if (score == 1){
    fill(255,0,0);   
    rect(b1,b2,20,20);
    fill(0,255,0);   
    rect(b3,b4,20,20);
  }
  
  if (score == 2){
    fill(255,0,0);   
    rect(c1,c2,20,20);
    fill(0,255,0);   
    rect(c3,c4,20,20);
  }
  
  if (score == 3){
    fill(255,0,0);  
    rect(d1, d2, 20, 20);
    fill(0,255,0);   
    rect(d3,d4,20,20);
  }
  
  if (score == 4){
    fill(255,0,0);  
    rect(e1,e2,20,20);
    fill(0,255,0);   
    rect(e3,e4,20,20);
  
  }
  
  if (score == 5){
    fill(255,0,0);  
    rect(f1,f2,20,20);
    fill(0,255,0);   
    rect(f3,f4,20,20);
  }
  
  if (score == 6){
    fill(255,0,0);  
    rect(g1,g2,20,20);
    fill(0,255,0);   
    rect(g3,g4,20,20);
  }
  
  if (score == 7){
    fill(255,0,0);  
    rect(h1,h2,20,20);
    fill(0,255,0);   
    rect(h3,h4,20,20);
  }
  
   if (score == 8){
     fill(255,0,0);  
    rect(i1,i2,20,20);
     fill(0,255,0);   
    rect(i3,i4,20,20);
  }
  
  if (score == 9){
    fill(255,0,0);  
    rect(j1,j2,20,20);
    fill(0,255,0);   
    rect(j3,j4,20,20);
  }
  
  if (score == 10){
    fill(225);
    rect(50,50,300,300);
    textSize(12);
    text("you win!", 200,200);
    
  
  }
  
  
  
  
  


  console.log ("The score is " + score)
}


function mousePressed(){

  if (mouseOnRect(a1,a2,20,20)){
    score += 1;
  }
  
  if (mouseOnRect(b1,b2,20,20)){
    score += 1;
  }
  
  if (mouseOnRect(c1,c2,20,20)){
    score += 1;
  }
  
  if (mouseOnRect(d1,d2,20,20)){
    score += 1;
  
  }
  
  if (mouseOnRect(e1,e2,20,20)){
    score += 1;
  }
  
  if (mouseOnRect(f1,f2,20,20)){
    score += 1;
  }
  
  if (mouseOnRect(g1,g2,20,20)){
    score += 1;
  }
  
  if (mouseOnRect(h1,h2,20,20)){
    score += 1;
  }
  
  if (mouseOnRect(i1,i2,20,20)){
    score += 1;
  }
  
  if (mouseOnRect(j1,j2,20,20)){
    score += 1;
  }
  
  if (mouseOnRect(a3,a4,20,20)){
    score = 0;
  }
  
  if (mouseOnRect(b3,b4,20,20)){
    score = 0;
  }
  
  if (mouseOnRect(c3,c4,20,20)){
    score = 0;
  }
  
  if (mouseOnRect(d3,d4,20,20)){
    score = 0;
  }
  
  if (mouseOnRect(e3,e4,20,20)){
    score = 0;
  }
  
   if (mouseOnRect(f3,f4,20,20)){
    score = 0;
  }
  
  if (mouseOnRect(g3,g4,20,20)){
    score = 0;
  }
  
   if (mouseOnRect(h3,h4,20,20)){
    score = 0;
  }
  
   if (mouseOnRect(i3,i4,20,20)){
    score = 0;
  }
   if (mouseOnRect(j3,j4,20,20)){
    score = 0;
  }
  
   if (mouseOnRect(k3,k4,20,20)){
    score = 0;
  }
  
  
    
  
}




function mouseOnRect(x,y,w,h){
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y +h){
    return true 
  }
}



