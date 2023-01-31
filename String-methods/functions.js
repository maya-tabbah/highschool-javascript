//You may need to use the STRING METHODS from Google Classroom to help with these.

//MILD CHALLENGES
function helloWorld() {
  //create a function that takes in NO VALUES
  //returns "hello world"
  return "hello world"
}

function greetUser() {
  //create a function that takes a users name
  var name = prompt("What's your name?")
  //returns "Your Majesty" if the name is Beyonce
  if (name == "Beyonce") {
    return "Your Majesty"
  } else {
    return "Hello"
  }
  //returns "Hello" for any other name
}

function endsWithVowel() {
  //create a function that takes in a word
  var word = prompt("Enter a word:");

  //returns TRUE if it ends in a vowel
  if (word.endsWith("a")) {
    return "True"
  } else if (word.endsWith("e")) {
    return "True"
  } else if (word.endsWith("i")) {
    return "True"
  } else if (word.endsWith("o")) {
    return "True"
  } else if (word.endsWith("u")) {
    return "True"
  }
  //returns FALSE if it does not
  else {
    return "False"
  }
}

function changeVolume(word, noiseLevel) {
  //create a function that takes in a string and the option SHOUT or WHISPER as strings.
  
  //if the option is shout, return the word in all uppercase
  if (noiseLevel == "shout") {
    return word.toUpperCase()
  }
  //if the option is whisper, return the word in all lowercase
  else if (noiseLevel == "whisper") {
    return word.toLowerCase
  }
}

function teacherAndSubject() {
  //create a function that takes in a teacher name and subject as strings
  teachername = prompt("Provide a teacher name:")
  subject = prompt("Provide a subject")
  //returns a statement like "Ms. Morgan teaches computer science"
  return teachername + " teaches " + subject
}

//MEDIUM CHALLENGES
function catToDog() {
  //create a function that takes in a word
  var word2 = prompt("Provide a word:")
  //if the word includes CAT, replace CAT with DOG.
  if (word2.includes("cat")) {
    return word2.replace("cat", "dog")
  }
  //EX: concatenate would become condogenate
}

function addArticle() {
  //create a function that takes in a word
  var article = prompt("Provide a word")
  //if the word starts with a vowel, return "a WORD"
  if (article.startsWith("a")) {
    return "a " + article
  } else if (article.startsWith("e")) {
    return "a " + article
  } else if (article.startsWith("i")) {
    return "a " + article
  } else if (article.startsWith("o")) {
    return "a " + article
  } else if (article.startsWith("u")) {
    return "a " + article
  }
  //if the word starts with a consonant, return "an WORD"
  else {
    return "an " + article
  }
}

function whichIsLonger() {
  //create a function that takes in two words
  wordOne = prompt("Provide one word:");
  wordTwo = prompt("Provide another word");
  //if word one is longer than word two, return word one
  if (wordOne.length > wordTwo.length) {
    return wordOne
  }
  //otherwise return word two
  else {
    return wordTwo
  }
}


//SPICY CHALLENGES
function containsForbiddenWord() {
  //create a function that takes in a string
  var string = prompt("Write something you want to say:")
  //return true if it contains a forbidden word
  if (string.includes("ugly")) {
    return "True"
  } else if (string.includes("stupid")) {
    return "True"
  } else if (string.includes("dumb")) {
    return "True"
  }

  //return false if it does not
  else {
    return "False"
  }

  //FYI: this is essentially how e-mail filters that catch curse words work, but feel free to use any words you dislike (you don’t have to use curses).  Some websites also won’t let your password match your username - this is how they do it!
}


function makeWordPlural() {
  //create a function that takes in a word
  var plural = prompt("Provide a singular word:")
  //return the plural version
  //most words become plural by adding an s
  //words that end in CH or SH should end in 'es' to become plural
  //words that end in Y should end in 'ies' to become plural. (EX: 'butterfly' becomes 'butterflies')
  if (plural.endsWith("ch")) {
    return plural + "es"
  } else if (plural.endsWith("sh")) {
    return plural + "es"
  } else if (plural.endsWith("y")) {
    return plural.replace("y", "ies")
  } else {
    return plural + "s"
  }
}

function conjugateSpanishVerb() {
  //  Create a function that will take in a pronoun and the infinitive form of a verb and return the correct conjugation.
  var pronoun = prompt("Provide a spanish pronoun:")
  var verb = prompt("Provide an infinitive form of a verb:")

  if (pronoun == "yo") {
    if (verb.endsWith("er")) {
      return verb.replace("er", "o")
    } else if (verb.endsWith("ar")) {
      return verb.replace("ar", "o")
    } else if (verb.endsWith("ir")) {
      return verb.replace("ir", "o")
    }
  } else if (pronoun == "tu") {
    if (verb.endsWith("er")) {
      return verb.replace("er", "as")
    } else if (verb.endsWith("ar")) {
      return verb.replace("ar", "as")
    } else if (verb.endsWith("ir")) {
      return verb.replace("ir", "as")
    }
  } else if (pronoun == "el" || pronoun == "ella" || pronoun == "usted") {
    if (verb.endsWith("er")) {
      return verb.replace("er", "a")
    } else if (verb.endsWith("ar")) {
      return verb.replace("ar", "a")
    } else if (verb.endsWith("ir")) {
      return verb.replace("ir", "a")
    }
  } else if (pronoun == "nosotros" || pronoun == "nosotras") {
    if (verb.endsWith("er")) {
      return verb.replace("r", "mos")
    } else if (verb.endsWith("ar")) {
      return verb.replace("r", "mos")
    } else if (verb.endsWith("ir")) {
      return verb.replace("r", "mos")
    }
  } else if (pronoun == "ellos" || pronoun == "ellas" || pronoun == "ustedes") {
    if (verb.endsWith("er")) {
      return verb.replace("er", "an")
    } else if (verb.endsWith("ar")) {
      return verb.replace("ar", "an")
    } else if (verb.endsWith("ir")) {
      return verb.replace("ir", "an")
    }
  }
  // EX: If it takes in nosotros and comer, it will return comemos. Or if it takes in yo and tocar, it will return toco.

  // Have a friend check if your grammar and spelling is working on this one - 
}