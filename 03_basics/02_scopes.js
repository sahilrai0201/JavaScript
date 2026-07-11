// **************** Variable Declaration ****************

// let and const are block scoped
// var is function scoped (or globally scoped if declared outside a function)

// let a = 10
// const b = 20
// var c = 30

// Accessible because they are declared in the global scope
// console.log(a)
// console.log(b)
// console.log(c)



// **************** Block Scope ****************

if(true){
    let a = 10       // Exists only inside this block
    const b = 20     // Exists only inside this block
    var c = 30       // NOT block scoped, accessible outside the block
}

// var ignores block scope
// console.log(c)     // Output: 30



// **************** Shadowing ****************

let a = 300

if(true){
    let a = 10       // This is a new variable, not the outer one
    const b = 20

    // Refers to the inner variable
    // console.log("Inner :", a)     // Output: 10
}

// Refers to the outer variable
// console.log("Outer :", a)         // Output: 300



// **************** Lexical Scope ****************

// Inner functions can access variables of outer functions
// Outer functions cannot access variables of inner functions

function one(){
    const username = "Sahil"

    function two(){
        const website = "youtube"

        // Can access username because it belongs to the parent function
        console.log(username)
    }

    // Cannot access website because it belongs to the child function
    // console.log(website)
    // ReferenceError: website is not defined

    two()
}

// one()



// **************** Nested Block Scope ****************

if(true){
    const username = "Sahil"

    if(username === "Sahil"){
        const website = " Youtube"

        // Inner block can access variables of outer block
        // console.log(username + website)
    }

    // website exists only inside the inner if block
    // console.log(website)
    // ReferenceError: website is not defined
}

// username exists only inside the outer if block
// console.log(username)
// ReferenceError: username is not defined




// **************** Hoisting ****************

// Function declarations are completely hoisted.
// They can be called before they are defined.

console.log(addOne(5))      // Output: 6

function addOne(num){
    return num + 1
}



// Function expressions are NOT fully hoisted.

// Only the variable 'addTwo' is hoisted,
// but its value is undefined until this line executes.

// console.log(addTwo(5))
// ReferenceError: Cannot access 'addTwo' before initialization
// (because addTwo is declared using const)

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))      // Output: 7