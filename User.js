class User{
    constructor(email, fName, lName, school, userID){
        this.email = email; 
        this.fName = fName;
        this.lName = lName; 
        this.school = school; 
        this.userID = userID; 
    }

     getName(){
        return `Hello ${this.fName} ${this.lName}`; 
    }
}