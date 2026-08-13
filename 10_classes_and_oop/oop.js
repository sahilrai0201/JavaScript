const user = { 
    username: "sahil", 
    loginCount: 8, 
    signedIn: true, 
 
    // Method inside the user object
    getUserDetails: function() { 
        // console.log("Got user details from database!")

        // "this" refers to the current object (user)
        // console.log(`Username : ${this.username}`)

        // Prints the entire current object
        // console.log(this)
    } 
} 
 
// Accessing the username property of the user object
// console.log(user.username)

// Calling the getUserDetails method
// console.log(user.getUserDetails())

// In the global scope, "this" refers to the global object
// In a browser, it generally refers to the Window object
// console.log(this)


// ------------------------------------------------------------------------------->


// Constructor Function
// Used to create multiple objects with the same structure
function User(username, loginCount, isLoggedIn) { 

    // "this" refers to the NEW object being created
    this.username = username 
    this.loginCount = loginCount 
    this.isLoggedIn = isLoggedIn 
 
    // Adding a method to every User object
    this.greeting = function() { 
        console.log(`Welcome ${this.username}`) 
    } 
 
    // "return this" is automatically done when using "new"
    // return this 
} 


// "new" creates a new empty object
// and assigns that object to "this" inside User()
const userOne = new User("Sahil", 8, true) 

// Creates another completely separate User object
const userTwo = new User("Virat", 18, false) 


// Every object created using a constructor function
// has a "constructor" property pointing back to the
// function that created it.
//
// Therefore, userOne.constructor === User
console.log(userOne.constructor); 


// Displays the complete userTwo object
// console.log(userTwo);


// You can also call the greeting method
// userOne.greeting()   // Welcome Sahil
// userTwo.greeting()   // Welcome Virat