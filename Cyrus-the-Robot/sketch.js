function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(176, 1, 0);
  
  			//The Body
  rect(100,150,200,150); //Body
  rect(195,130,10,20);		//Head
  rect(160,70,80,60);   //Neck
  rect(150,300,20,80);  //Left leg
  rect(230,300,20,80);	//Right leg
  rect(40,200,60,20);  //Left hand
  rect(300,200,60,20);  //Right hand
  
  
  		//Facial features 
ellipse(180,90,10)  //Left eye
ellipse(220,90,10)	//Right eye
line(180,120, 220,120) //Mouth


  		//Body features
ellipse(200,180,30); //Button 1
ellipse(200,230,30); //Button 2

  
  
}