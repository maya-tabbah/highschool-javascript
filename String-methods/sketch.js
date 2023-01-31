function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() {
  createCanvas(400, 400);
  var hello = helloWorld();
  console.log(hello)
  
  var response = greetUser();
  console.log(response);
  
  var vowels = endsWithVowel();
  console.log(vowels)
  
  var volume = changeVolume();
  console.log(volume)
  
  var teacherSubject = teacherAndSubject();
  console.log(teacherSubject)
  
  var catdog = catToDog();
  console.log(catdog)
  
  var article = addArticle();
  console.log(article)
  
  var twoWords = whichIsLonger();
  console.log(twoWords)
  
  var forbidden = containsForbiddenWord();
  console.log(forbidden)
  
  var plural = makeWordPlural();
  console.log(plural)
  
  var spanish = conjugateSpanishVerb()
  console.log(spanish)
}

function draw() {
  background(220);
}