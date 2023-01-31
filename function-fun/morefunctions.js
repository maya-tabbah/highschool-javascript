//together
function multiply(a, b = 1) {
  return a * b
}

//MILD CHALLENGES
function add(a, b = 0) {
  //create a function that will add two values
  //give the second value an optional value of 0
  //return the sum of the two values
  return a + b
}

function squareOrCube(word, value) {
  //create a function that takes the word SQUARE or CUBE and a value
  //if SQUARE is entered, return the value squared
  if (word.toUpperCase() == "SQUARE") {
    return value * value
  }
  //if CUBE is entered, return the value cubed.
  if (word.toUpperCase() == "CUBE") {
    return value * value * value
  } else {
    return "Please type either SQUARE or CUBE"
  }
}

function percentOff(total, percent) {
  //create a function that takes in two values, one that represents a total and one that represents a percent
  //return the total after taking x percent of total off
  return total - percent / 100 * total
}



//MEDIUM CHALLENGES
function adultAge(age) {
  //Create a function that takes in a value
  //return ‘too young!’ if you are under 18, ‘too old!’ if you are over 50, and ‘just right!’ if you are any other age. 
  if (age < 18) {
    return "too young!"
  }

  if (age > 18 && age < 50) {
    return "just right!"
  }

  if (age > 50) {
    return "too old!"
  }
}

function evenOrOdd(num) {
  //create a function that takes in a value
  //return EVEN if the number is even
  //otherwise return ODD
  if (num % 2 == 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

function fizzBuzz(val) {
  //create a function that takes in a value
  //return FIZZ if the number is divisible by 3
  //return BUZZ if the number is divisible by 5
  //return FIZZBUZZ if the number is divisible by 3 AND 5
  //return the number itself if it is divisible by neither

  if (val % 3 == 0) {
    return "Fizz"
  }

  if (val % 5 == 0) {
    return "Buzz"
  }

  if (val % 3 == 0 && val % 5 == 0) {
    return "Fizzbuzz"
  } else {
    return val
  }
}

function isItADecimal(dec) {
  //Create a function that takes in a number
  //return true if the number is a decimal and false if the number is not a decimal.

  //HINT: Test what happens when you mod a decimal by 1 - how could those results and a conditional help you with this function?
  
  if ( dec % 1 == 0){
    return false
  }else{
    return true
  
  }
}


//SPICY CHALLENGES
function isItSquare(inp) {
  //create a function that takes in a value
  //return TRUE if the number is a perfect square
  //return FALSE if it isnt
  
  if (inp == Math.sqrt(inp)){
    return true
  } else {
    return false
  
  }
  
  
  
  

  //you'll need to think about creative ways to determine if numbers are perfect squares or not! You can use Math.sqrt(); to find the square root of a number, but you’ll need some logic beyond that to get the answer.
}

function isPasswordSecure() {
  //   Create a function that takes in a string and returns true if:
  // If it is at least 8 characters long
  // It contains at least 1 number and at least 1 letter
  // It contains at least 1 of these characters: % ! &
  // It contains at least one capital letter (remember - case-sensitive means yourString might be different than yourString.toLowerCase( )

}