//In the userclass.js file, you'll code out your user class. (NOTE: it's linked via index.html already!)
//Here, you can write tests to see if your user class is functioning correctly.


//1. If the line below runs without error, you're able to make an instance of a user class.
//As you can see, this user has a name, an email, a password, and an age.
//Uncomment this initializer and see if it runs without error

let cmorgantywls = new User("Courtney", "cmorgan@tywlsbronx.org", "password1", 30)

console.log(cmorgantywls);

//2. If your first user was created successfully, the one below probably won't be.

//What would you need to change for Sarah to have an account?
let sarah773 = new User("Sarah", "sarah.owen14@gmail.com", "mangotrain", 20 )

console.log(sarah773);

//3. Next, lets set a user's mood by updating the attribute. (You'll need to add this to the constructor - have everyone's mood start as "Neutral" for a default.)
cmorgantywls.mood = "Happy"

//4. Now let's write a method called statusUpdate that prints an update about a user's mood.
//For example, if we called this method on cmorgantywls, it should return "I'm feeling Happy today."


console.log(cmorgantywls.statusUpdate())





//5. let's finally write a method to try to change a user's password. It will take two arguments - the old password, and the new one.
//If the old password matches, it should change the password and return a success message.

console.log(cmorgantywls.changePassword("password1", "moosedogredpine"))

//6. If the old password doesn't match, it should return an error message.
console.log(sarah773.changePassword("mango", "mygreatnewpassword"))