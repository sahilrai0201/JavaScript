// **************** "this" Keyword ****************

// Object created
const user = {
    username : "Sahil",
    price : 999,

    // Regular function inside an object
    // Here, 'this' refers to the current object (user)
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)

        // Prints the complete user object
        // console.log(this)
    }
}

// Calling the object method
// user.welcomeMessage()

// Changing the object's property
// Since 'this' refers to the object, the updated value is used.
// user.username = "Sam"
// user.welcomeMessage()      // Output: Sam, welcome to website

// In Node.js:
// console.log(this) -> {}
// In Browser:
// console.log(this) -> Window object

// console.log(this)





// **************** "this" inside a Regular Function ****************

// function chai(){
//     let username = "Sahil"

//     // In Node.js, 'this' refers to the global object.
//     // In browsers, it refers to the Window object.
//     console.log(this)

//     // 'this' does NOT refer to local variables.
//     // username is not a property of 'this'.
//     console.log(this.username)    // undefined
// }

// chai()





// **************** Function Expression ****************

// const chai = function(){
//     let username = "Sahil"

//     // Same behavior as a normal function
//     // 'this' does not point to local variables.
//     console.log(this.username)    // undefined
// }

// chai()





// **************** Arrow Function ****************

// Arrow functions DO NOT have their own 'this'.
// They inherit 'this' from their surrounding (lexical) scope.

const chai = () => {
    let username = "Sahil"

    // In Node.js module -> {}
    // In Browser -> Window (depending on where defined)
    console.log(this)

    // Arrow functions don't create their own 'this'
    console.log(this.username)      // undefined
}

chai()





// **************** Arrow Functions ****************

// Explicit Return
// Curly braces require the return keyword.

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))





// **************** Implicit Return ****************

// When there are no curly braces,
// JavaScript automatically returns the expression.

// const addTwo = (num1, num2) => num1 + num2

// OR

// Parentheses also allow implicit return.
// const addTwo = (num1, num2) => (num1 + num2)





// **************** Returning an Object ****************

// To return an object using implicit return,
// wrap the object inside parentheses.
// Otherwise, JavaScript thinks {} is the function body.

const addTwo = (num1, num2) => ({ username : "Sahil" })

console.log(addTwo(3, 4))
// Output:
// { username: 'Sahil' }