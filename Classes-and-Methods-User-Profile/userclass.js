class User{
 constructor(name, email, password, age = 0){
   this.name = name;
   this.email = email;
   this.password = password;
   this.age = age; 
   this.mood = "neutral"; 
   //each user needs a name, an email, a password, and an age that they give you when they sign up to start - we might add other properties later.
 }
  
  statusUpdate(){
    return "I'm feeling " + this.mood

  }
  
  changePassword(oldPass, newPass){
    if(this.password == oldPass){
      this.password = newPass
      return "Your password has been changed." 
    }else{
    
      return "Error"
    }
  
  
  }
  
}