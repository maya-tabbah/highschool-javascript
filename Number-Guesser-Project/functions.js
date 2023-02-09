function playGame(){
  lowNum = prompt("Pick a low number")
  highNum = prompt("Pick a high number")
  
  rangeNum = int(random(int(lowNum), int(highNum)));
  
  one = prompt("guess the number in the range you created")
  
   if (int(one) == rangeNum) {
    alert("Correct!");
    alert ("Guesses left: 4");
     
  }
  
  if (int(one) > rangeNum){
      alert ("That's too high!");
      alert ("Guesses left: 4" );
    
    two = prompt("Guess a number in the range:");
  }
    if (int(one) < rangeNum){
      alert ("That's too low!");
      alert ("Guesses left: 4");
    
    two = prompt("Guess a number in the range:");
    }
  if(int(two) == rangeNum){
    alert("Correct!")
    alert ("Guesses left: 3");
  }
  
  if(int(two) > rangeNum){
    alert("That's too high!")
    alert ("Guesses left: 3 ");
    three = prompt("Guess a number in the range:");
  
  }
  
  if(int(two) < rangeNum){
    alert("That's too low!")
    alert ("Guesses left: 3 ");
    three = prompt("Guess a number in the range:");
  }
  
  if(int(three) == rangeNum){
    alert("Correct!")
    alert ("Guesses left: 2 ");
  }
  
  if(int(three) > rangeNum){
    alert("That's too high!")
    alert ("Guesses left: 2 ");
    four = prompt("Guess a number in the range:");
  }
  
   if(int(three) < rangeNum){
    alert("That's too low!")
    alert ("Guesses left: 2 ");
    four = prompt("Guess a number in the range:");
  }
  
  if(int(four) == rangeNum){
    alert("Correct!")
    alert ("Guesses left: 1 ");
  }
  
  if(int(four) > rangeNum){
    alert("That's too high!")
    alert ("Guesses left: 1");
    five = prompt("Guess a number in the range:");
  }
  
  if(int(four) < rangeNum){
    alert("That's too low!")
    alert ("Guesses left: 1 ");
    five = prompt("Guess a number in the range:");
  }
  
  if(int(five) == rangeNum){
    alert("Correct!")
    alert ("Guesses left: 0 ");
  }
  
  if(int(five) > rangeNum){
    alert("That's too high!")
    alert ("Guesses left: 0");
    alert("you lost!")
  }
  
  if(int(five) < rangeNum){
    alert("That's too low!")
    alert ("Guesses left: 0");
    alert("you lost!")
  }
  
  
  
      
      
  
  


}
//YOUR CODE SHOULD:
//(With all major actions as their own functions!)
//1. Ask the user to set a range of numbers for the computer to pick between by setting a lower and upper bound. (EX, computer will pick between 0-100 or 20-50, etc.)
//2. Computer will pick a random number.
//3. Use a variable to track the turns a user has - they should only have 5 guesses to get this right!
//3. User will be asked to guess the number && amount of turns will go down.
//4. User will receive feedback on guess.(If it's too high, too low, or just right.)
//5. If user didn't guess correctly, they will be asked again as long as they have turns left.
//6. Once your game works, see if you can take the algorithm that makes it run and put it inside its own function called playGame().
//7. Create a "play again" button that resets the game.

//Things I gave you bc I am nice:
function drawPlayButton(){
  rect(100,150,200,50)
  textAlign(CENTER)
  text("Click to play\nGuess the Number",200,170)
}

 function Replay() {
  rect(150, 225, 100, 50)
  textAlign(CENTER);
  text("Replay", 195, 250)
}

function mouseOnRect(x,y,width,height){
  if(mouseX>x && mouseX<x+width && mouseY>y && mouseY<y+height){
   return true 
  }
  else{
   return false 
  }
}