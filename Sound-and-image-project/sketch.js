//we need variables to hold sounds
var myImage;
var woodSound;
var spookySound;
var greekSound;

function preload() {
  //load in sounds here with images!
  woodSound = loadSound("wood.mp3")
  spookySound = loadSound("spooky.mp3")
  myImage = loadImage("grimace.png")
  greekSound = loadSound("greekSound.mp3");
}

function setup() { 
  createCanvas(400, 400);
  colorMode(HSB);
} 

function draw() { 
  background(220);
  image(myImage, 150, 150,100,100);
}

function mousePressed(){
  woodSound.play()
  woodSound.stop(3) //3 is the # of seconds
}

function keyTyped(){
  if(key=='c'){
  tint(100,50,100);
  spookySound.play();
  }
  
  if(key == 'v'){
    greekSound.play();
  }
}

function keyReleased(){
 tint(255)
  spookySound.stop()
  greekSound.stop()
}

//we are going to add in CALLBACK FUNCTIONS in order to play our sounds
//CALLBACK FUNCTIONS are called at specific times in our program and run parallel to the draw loop.
//We need them so we can get outside of the confines of setup (which runs once) and draw (which runs forever)
//We will add mousePressed, keyTyped, and keyReleased, but there are way more.