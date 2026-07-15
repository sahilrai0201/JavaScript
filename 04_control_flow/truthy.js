// ======================================================
// Truthy and Falsy Values
// ======================================================

// const userEmail = "y@sahil.ai";   // Truthy
// const userEmail = [];             // Truthy (empty array is truthy)
const userEmail = "";                // Falsy (empty string)


// JavaScript automatically converts values to true or false
// when they are used inside conditions.

if (userEmail) {
    // Executes only if userEmail is truthy.
    // console.log("Got user email!");
} else {
    // Executes because "" is a falsy value.
    // console.log("Don't have user email!");
}


// ======================================================
// Falsy Values
// ======================================================

// JavaScript has only a few falsy values:

// false
// 0
// -0
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN


// ======================================================
// Truthy Values
// ======================================================

// Everything else is truthy.

// true
// "0"          -> String containing 0
// "false"      -> String, NOT boolean false
// " "          -> String with a space
// []           -> Empty array
// {}           -> Empty object
// function(){} -> Function


// ======================================================
// Checking an Empty Array
// ======================================================

// Arrays are truthy, even if they are empty.

if (userEmail.length === 0) {
    // If userEmail is an empty array OR empty string,
    // length will be 0.

    // console.log("Array is empty");
}

// Example:
const arr = [];

if (arr.length === 0) {
    console.log("Array is empty");
}


// ======================================================
// Checking an Empty Object
// ======================================================

const emptyObj = {};

// Object.keys() returns an array containing
// all the object's keys.

// {}  --> []

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Example:

const person = {
    name: "Sahil",
    age: 23
};

// Object.keys(person)
// ["name", "age"]


// ======================================================
// Nullish Coalescing Operator (??)
// ======================================================

// Syntax:
// value1 ?? value2

// It returns the FIRST value that is NOT
// null or undefined.

let val1;

// val1 = 5 ?? 10;
// Output: 5
// Since 5 is neither null nor undefined.

// val1 = null ?? 10;
// Output: 10
// Because first value is null.

// val1 = undefined ?? 15;
// Output: 15
// Because first value is undefined.

val1 = null ?? 5 ?? 10;

// Step 1:
// null ?? 5
// → 5

// Step 2:
// 5 ?? 10
// → 5

// Final Output:
// 5

// console.log(val1);


// ======================================================
// Difference Between || and ??
// ======================================================

// || returns the first TRUTHY value.

console.log(0 || 10);
// Output: 10
// Because 0 is falsy.


// ?? returns the first value that is NOT
// null or undefined.

console.log(0 ?? 10);
// Output: 0
// Because 0 is neither null nor undefined.


// Another example:

console.log("" || "Hello");
// Output: "Hello"

console.log("" ?? "Hello");
// Output: ""
// Empty string is not null or undefined.


// ======================================================
// Ternary Operator
// ======================================================

// Syntax:
//
// condition ? value_if_true : value_if_false

const iceTeaPrice = 100;

iceTeaPrice <= 80
    ? console.log("Less than 80")
    : console.log("More than 80");


// Since 100 <= 80 is false,
// Output:
//
// More than 80


// Equivalent if...else

if (iceTeaPrice <= 80) {
    console.log("Less than 80");
} else {
    console.log("More than 80");
}