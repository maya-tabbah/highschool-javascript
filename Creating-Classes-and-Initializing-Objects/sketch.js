// Level 1:
// Create a class called Student that has two attributes: a name, and a grade.

class Student {
  constructor(name, grade, savingsAccount){
    this.name = name;
    this.grade = grade; 
    this.savingsAccount = savingsAccount
  }

}



// Now create instances of three different students (student1, student2, and student3).

let student1 = new Student("Sally", 11, 3520);
let student2 = new Student("Majeha", 11, 10000);
let student3 = new Student("Arwa", 11, 400);



//Confirm that the class works by printing out the first student's name.
console.log(student1.name);


// Level 2:
//Create a class called School that has three attributes: a name, a type, and a size.

class School {
  constructor(name, type, size){
    this.name = name;
    this.type = type;
    this.size = size;
  }
}


let school1 = new School("TYWLS", "High School", 300);
let school2 = new School("I.S.17", "Middle School", 200);
let school3 = new School("P.S.234", "Elementary School", 100);

//Confirm that the class works by printing out the name and size of the third school.
console.log(school3.names);
console.log(school3.size);

//Level 3:
//Create a class called House that has four attributes: an address, a size, a price, and a number of bedrooms.
class House{
  constructor(address, size, price, numBed){
    this.address = address
    this.size = size
    this.price = price
    this.numBed = numBed
  }
}

//Create instances of at least three individual houses.
let house1 = new House("2222", "3 story", "300K", "3");
let house2 = new House("3333", "2 story", "200k", "5");
let house3 = new House("4444", "1 story", "100k", "6");

//Confirm that the class works by printing out the address and size of the second house.
console.log(house2.address);
console.log(house2.size);

//Level 4: (Stretch)
//Put your three students in a list called my_students, your houses in a list for houses, and your schools in a list for schools.
let my_students = [student1, student2, student3]
let my_houses = [house1, house2, house3]
let my_schools = [school1, school2, school3]

//Iterate (this means use a forEach or for loop!) over the student list, printing out "_____ is in grade __." For each of the students.
my_students.forEach(student => {
  console.log(student.name + " is in grade " + student.grade + ". This student's savings account is " + student.savingsAccount)
})

//Iterate over the houses list and print out a description for each one. Do the same for your schools lists.
my_houses.forEach(house => {
  console.log("The house address is " + house.address + ". The house is a  " + house.size + " house. The house costs $" + house.price + ". This house has " + house.numBed + " bedrooms.")
})

my_schools.forEach(school => {
  console.log(school.names + " is a " + school.type + " with " + school.size + " students.")
})

//Level 5: (Stretch)
//Modify your student class above to include a savings_account value for each student. Change your initializers so that the code still runs.


//Write some code that compares a student and a house, and determines whether or not the student can afford to buy the house. 


if (Student.savingsAccount > house1.price){
  console.log(student1.name + "can afford the house at" + house1.address)


}


