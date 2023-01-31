var smileyXPos, smileyYPos;
var headColor;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES) //tell Buck we have no time for the unit circle when drawing our arcs
  smileyXPos=78
  smileyYPos=134
  headColor = color(93, 168, 184);
  eyeColor = color(0,0,0);
}

function draw() {
  background(220);
  noStroke()
  
  
  //head
  fill(headColor)
  ellipse(smileyXPos,smileyYPos,150)
  
  //left eye
  fill(0)
  ellipse(smileyXPos,smileyYPos,20,50)
  
  fill(255)
  ellipse(smileyXPos-3,smileyYPos-16,10)
  
  
  
  //right eye
  fill(0)
  ellipse(smileyXPos+40,smileyYPos,15,50)
  
  fill(255)
  ellipse(smileyXPos+38,smileyYPos-16,8)
  
  //mouth
  fill(99,24,24)
  arc(smileyXPos+15,smileyYPos+30,75,50,0,180,CHORD)
  
  
  //teeth
  fill(255)
  rect(smileyXPos+15,smileyYPos+30,15,10)
  rect(smileyXPos,smileyYPos+30,15,10)
  
  //flower
  textSize(56)
  text("🌸",smileyXPos-70,smileyYPos-20)
  
  
  if (keyIsPressed){
    headColor = color('red')
  
  
  if(key == "w"){
    smileyYPos = 10  ;
    }
    
   if(key == "s"){
     smileyYPos = 300; 
      } 
    
    if(key == "a"){
      smileyXPos = 10;
    }
    
    if(key == "d"){
      smileyXPos = 300;
    }
    
    if(mouseY < height/2){
      fill(0,0,0);
      ellipse(smileyXPos,smileyYPos,20,50)
      ellipse(smileyXPos+40,smileyYPos,15,50)    
    }else {
      fill(0,200,0);
      ellipse(smileyXPos,smileyYPos,20,50)
      ellipse(smileyXPos+40,smileyYPos,20,50)
    }
 
  }
  
  
  
  
}