//the functions you will need are in functions.js and both files are linked in the HTML already.

function setup() {
  createCanvas(400, 400);
  var guess = 5 
}

function draw() {
  background(220);
  drawPlayButton();
  Replay();
}

function mousePressed(){
  if(mouseOnRect(100,150,200,50)==true){
    playGame();
    
    //your code to play the game should go here!
  
    //HINT: for the main actions of the game, you may want a while loop so that the user will keep being asked to guess as long as their answer doesn't match the computer's.
    
     }
  
  if(mouseOnRect(150, 225, 100, 50)==true){
    playGame();
  
  }
}