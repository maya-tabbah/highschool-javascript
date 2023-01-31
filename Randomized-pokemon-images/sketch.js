var pika, charmander, panda
var images = []
var i

function preload(){
  pika = loadImage("pika.png")
  charmander = loadImage("charmander.png")
  panda = loadImage("panda.png")
  
}

function setup() {
  createCanvas(400, 400);
  images = [pika, charmander,panda ]
  i = int(random(0, images.length));
}

function draw() {
  background(220);
    
  
    image(images[i], 0, 150, 100, 100);
  


}








