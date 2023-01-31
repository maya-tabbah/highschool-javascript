var animal
function setup() {
  createCanvas(400, 400);
  textSize(20);
  noStroke();
  alert1 = "hell yeah"
  alert2 = ":("
  
  
  
}//end set up

function draw() {
  background(100);
  
  
  rect(150, 50,  100, 50); 
  text("?", 195, 80);
  
}// end draw

function mousePressed() {
  if (mouseX > 150 && mouseX < 250 && mouseY > 50 && mouseY < 150){
    var fav_animal = prompt("what is your favorite animal?");
    if (fav_animal == "raccoon"){
      alert(alert1);
    }
    else{
      alert(alert2);
    }
    
  }


}//end mouse pressed