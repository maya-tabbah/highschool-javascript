var rand;
var rand1;
var rand2;

function setup() {
  //createCanvas(random(400),random(400));
  createCanvas(400,400);
  rand = random(400);
  
  rand1 = floor(random(400));//floor(0) rounds the number
  
  rand2 = int(random(400));//int() cuts off the decimal
  
  console.log(rand);
  console.log(rand1);
  console.log(rand2);
  
  //outting these in the set up function makes it only run once
  
}

function draw() {
  background(220);
  //rand1 = floor(random(400)); //floor(0) rounds the number
 // rand2 = int(random(400));//int() cuts off the decimal
  //console.log(rand1);
  //console.log(rand2);
  //putting these in the draw function makes it repeat forever
  ellipse(rand1, rand2, 100, 100);
  
  
}