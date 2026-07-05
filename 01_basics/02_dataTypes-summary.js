// ======================
// JavaScript is Dynamically Typed
// ======================

// JavaScript is a dynamically typed language.
// This means you don't need to declare the data type of a variable.
// A variable can store different types of values during program execution.


// ======================
// Primitive Data Types
// ======================

// Primitive values are immutable (cannot be changed directly).
// When assigned to another variable, a COPY of the value is made.

// 7 Primitive Types:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. BigInt
// 7. Symbol


// Number
const score = 100            // Integer
const scoreValue = 100.3      // Decimal (still a Number)


// Boolean
const isLoggedIn = false      // true or false


// Null
const outsideTemp = null
// null means an intentional absence of value.


// Undefined
let userEmail
// Variable is declared but not assigned any value.
// Default value is undefined.


// Symbol
// Symbol creates a unique value.
// Even if two Symbols have the same description,
// they are always different.

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)    // false


// BigInt
// Used for numbers larger than the safe integer limit.
// Add 'n' at the end to create a BigInt.

const bigNumber = 235273483648962n


// ======================
// Non-Primitive (Reference) Types
// ======================

// These include:
// 1. Array
// 2. Object
// 3. Function

// They are called reference types because variables
// store a reference to the object in memory.


// Array
// Used to store multiple values in a single variable.

const heros = ["Shaktiman", "Naagraj", "Doga"]


// Object
// Stores data in key-value pairs.

let myObject = {
    name: "Sahil",
    age: 22
}


// Function
// A block of reusable code.

const myFunction = function () {
    console.log("Hello World")
}


// ======================
// typeof Operator
// ======================

// typeof tells us the data type of a value.

console.log(typeof scoreValue)   // number
console.log(typeof heros)        // object

// More examples:
// console.log(typeof score)         // number
// console.log(typeof isLoggedIn)    // boolean
// console.log(typeof outsideTemp)   // object (JavaScript bug)
// console.log(typeof userEmail)     // undefined
// console.log(typeof id)            // symbol
// console.log(typeof bigNumber)     // bigint
// console.log(typeof myObject)      // object
// console.log(typeof myFunction)    // function