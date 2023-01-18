var ran;
var ran2;
function setup() {
  createCanvas(400, 400);
  ran = random(400);
  ran2 = random(300);
  console.log(ran);
  
}

function draw() {
  background(220);
  rect(200, 200, ran, ran2);
  ellipse(ran, ran2, 50);
  ellipse(100,100, ran2);
	fill(ran, ran2);
  rect(100,50, ran, ran2);
  
}