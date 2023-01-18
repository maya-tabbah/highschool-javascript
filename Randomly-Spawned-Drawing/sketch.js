var w;
var x;
var y;

function setup() {
  createCanvas(600, 400);
  x = int(random(600));
  y = int(random(400));
  w = (225,225,225);
console.log(x +","+y)
}

function draw() {
  background(197, 209, 220);
  text(mouseX + "," +mouseY, 20,20);  //point guide thing
  
  
  
  									//head
	fill(255,211,0);							    //yellow
  ellipse(x, y, 200);               //Face
	fill(w);//white
  ellipse(x-30, y-40, 30,50);     	//Left eye
  ellipse(x+40, y-40, 30,50);				//Right eye
	line(x+10, y+20, x-10, y+10);			//Mouth point 1
	line(x-10, y+30, x+10, y+20);			//Mouth point 2
	line(x-10, y+30, x+10, y+40);			//Mouth point 3
	line(x+10, y+40, x-10, y+50);			//mouth point 4
  fill(mouseX, mouseY,167);			    //changing color
  ellipse(x-55, y+20, 26, 20);		  //blush 1
  ellipse(x+55, y+20, 26, 20);			//blush 2								
  
  
  
  
//hat
  triangle(x-100, y-30, x-110, y-150, x, y-100); 
  fill (w);	//white
  
  
  			//The Straw
	fill(39, 176, 0);		//green
	beginShape();						
  	vertex(x+100, y+85);				//point 1
  	vertex(x+6, y+23);					//point 2
  	vertex(x-8,y+31)						//point 3
  	vertex(x+75, y+85);					//point 4
	endShape(CLOSE); 					
	fill(w);						//white
  
  
//Cup
beginShape();
  vertex(x+45, y+85);			//point 1
  vertex(x+120,y+85);			//point 2
  vertex(x+105,y+160);		//point 3
  vertex(x+60,y+160);			//point 4
  endShape(CLOSE);
  

//Tea
  fill(80, 45, 15); //brown
  beginShape();
  	vertex(x+54,y+125);			//point 1
  	vertex(x+112,y+125);		//point 2
  	vertex(x+105,y+160);		//point 3
  	vertex(x+60,y+160);			//point 4
  endShape(CLOSE);
  fill(w);  //white
  
  
}


// My Paragraph
//This is my emoji, he is nameless. I created this emoji to represent three of my most 
//common moods, me avoiding people at a party, me excluding myself from a group of people
//because i'm too awkward to actually speak, and me hearing TEA while sipping TEA. 
//This nameless emoji CANNOT compare to the apple emojis, he is one hundred percent
//better and those are just facts. As you can he, his hat and his cheeks just magically change
//color and he is doing duck lips while sipping his tea, which has never been done before, clearly
//he deserves to be in the Guinness book of world records for that accomplishment. My emoji
//is definitely NOT AT ALL cocky in anyway. If anything he is the most down to earth emoji
//up in this classroom, and those are just facts as well. 
	
  


