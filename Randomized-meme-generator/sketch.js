var rat, lemon, dog, spongebob, cat, squid
var extreme, beep, ahh, bday, ehh
var quotes, pics, fonts, sounds, index, index2, index3


function preload(){
  //preload images
  rat = loadImage("rat.jpg");
  lemon = loadImage("lemon.jpg");
  dog = loadImage("dog.jpg");
  spongebob = loadImage("spongebob.jpg");
  cat = loadImage("cat.jpg");
  squid = loadImage("squid.jpg");
  
  //preload sounds
  extreme = loadSound("extreme.wav");
  beep = loadSound("beep.wav");
  ahh = loadSound("ahh.wav");
  bday = loadSound("bday.mp3");
  ehh = loadSound("ehh.wav");
}

function setup() {
  createCanvas(400, 400);
  
  textFont("ZCOOL KuaiLe"); //font 1
  textFont("Kalam"); //font 2
  textFont("Modak"); //font 3
  
  //fonts
  fonts = ["ZCOOL KuaiLe", "kalam", "modak"]
  
  //pics
  pics = [rat, lemon, dog, spongebob, cat, squid]
  
  //quotes
  quotes = ["when you go into the kitchen and see a rat cooking your food", "When Ingrid leaves you during SEP", "When TYWLS makes you wear your uniform", "When your chapstick smells good", "How toddlers look with their hair up", "When a mom starts beating their kid in the grocery store"]
  
  //sounds
  sound = [extreme, beep, ahh, bday, ehh]
  
  //index
  index = int(random(0, pics.length));
  
  //another index
  index2 = int(random(0, fonts.length)); 
}


function draw() {
  background(220);
  
  //random backgrounds
  image(pics[index],0, 0, 400, 400);
  
  
  fill(200,100,100);
  textSize(35);
  textFont(fonts[index2]);
  text(quotes[index], 50, 30, 300, 200);
  
}


function mousePressed(){
  
  //yet another index
  index3 = int(random(0, sound.length));
  
  //sound
  sound[index3].play()



}