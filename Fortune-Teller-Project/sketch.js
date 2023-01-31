fortune = []
function setup() {
  createCanvas(400, 400);
  
  fortune = ["You'll make a million dollars",
             "You'll meet your soulmate in 5 years",
             "You'll find $20 on the street tomorrow",
             "Something bad is going to happen soon",
             "You'll get into a good college",
             "A dream you have will come true",
             "You'll get free food",
             "You'll graduate high school early",
             "Someone will give you a giant teddy bear",
             "You'll pass your regents"
  ];
  r = random(0,255);  //r
  g = random(0,255);  //g
  b = random(0,255);  //b
}

function mousePressed (){ 
	 i = int(random(0,fortune.length))
}

function draw() {
  fill(0);
  rect(10,30,380,340); //giant rectancle 
  strokeWeight(4); //stroke weight
  stroke(r,g,b); //stroke color
  rect(50,50,300,150);  //rectancle  
  textSize(15);  //text size
  
  
  
  ellipse(200,300,100); //bottom circle 
  text("click here!", 165, 300)
  
  d = dist(mouseX, mouseY, 200, 300); //distance
  radius = 50; //radius of circle . 
  
 
  if(d < radius && mouseIsPressed){ //random text 
    text(fortune[i], 70, 100);
  }
  
  rect(30,200,340,30);  //little bar

}