function setup() {
  createCanvas(400, 400);
  
  //var a = prompt("number 1");
  //var b = prompt("number 2");
  var x = multiply(2,2)
  console.log(x)
  
  var x2 = add(2,3)
  console.log(x)
  
  var x3 = squareOrCube("square",3);
  console.log(x3);
  
  var x4 = percentOff(100,25)
  console.log(x4);
  
  var x5 = adultAge(16)
  console.log(x5);
  
  var x6 = evenOrOdd(12)
  console.log(x6);
  
  var x7 = fizzBuzz(5)
  console.log(x7);
  
  var x8 = isItADecimal(3.8)
  console.log(x8)
  
  var x9 = isItSquare(25)
  console.log(x9)
}




function draw() {
  background(220);
}



