"use strict";    // Enables strict mode.
// Strict mode helps catch common coding mistakes and makes JavaScript behave more securely.

// alert(3 + 3)    // This works only in the browser.
// Since we are running this file with Node.js, 'alert()' is not available.
// Use console.log() instead.


// ======================
// Variable Declarations
// ======================

let name = "Sahil Rai"      // String data type (text)
let age = 22                // Number data type
let isLoggedIn = false      // Boolean data type (true/false)
let state;                  // Variable declared but not assigned a value.
// By default, its value is 'undefined'.


// ======================
// Primitive Data Types
// ======================

// Number
// Stores both integers and decimal values.
// Safe integer range: -(2^53 - 1) to (2^53 - 1)

// BigInt
// Used for very large integers.
// Example:
// let bigNumber = 12345678901234567890n;

// String
// Represents text.
// Can be written using "", '', or `` (template literals).

// Boolean
// Has only two values:
// true
// false

// null
// Represents an intentional empty value.
// It means "nothing" or "no value".
// Example:
// let temperature = null;

// undefined
// Means a variable has been declared but not assigned any value.
// Example:
// let city;

// Symbol
// Used to create unique identifiers.
// Mostly used in advanced JavaScript.


// ======================
// Non-Primitive Data Type
// ======================

// Object
// Used to store collections of data in key-value pairs.
// Example:
// let user = {
//     name: "Sahil",
//     age: 22
// };


// ======================
// typeof Operator
// ======================

// 'typeof' tells us the data type of a value.

console.log(typeof null);        // "object"
// This is a well-known bug in JavaScript.
// Although typeof returns "object", null is NOT actually an object.

console.log(typeof undefined);   // "undefined"
// Returns "undefined" because the variable has no assigned value.