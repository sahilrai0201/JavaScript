// =====================================
// Numbers in JavaScript
// =====================================

// Primitive number
const score = 400

// Prints 400
// console.log(score)


// -------------------------------------
// Number Object
// -------------------------------------
// Creates a Number object.
// Normally we use primitive numbers, but Number() is useful
// while learning number methods.

const balance = new Number(100)

// console.log(balance)


// -------------------------------------
// toString()
// -------------------------------------
// Converts the number into a string.
// Once converted, string properties and methods can be used.


// "100" -> length = 3
// console.log(balance.toString().length)


// -------------------------------------
// toFixed()
// -------------------------------------
// Fixes the number of digits after the decimal point.
// Mainly used when displaying prices or percentages.


// Output: "100.00"
// Returns a STRING, not a number.
 // console.log(balance.toFixed(2))



// =====================================
// toPrecision()
// =====================================

const otherNumber = 123.8966

// toPrecision() returns the number with the specified
// total number of significant digits.
//
// Here 4 significant digits are kept.
//
// Output:
// "123.9"

// console.log(otherNumber.toPrecision(4))



// =====================================
// toLocaleString()
// =====================================

const hundreds = 1000000

// Converts number into a locale-specific format.
//
// Default (US):
// 1,000,000
//
// Indian format:
// 10,00,000

// console.log(hundreds.toLocaleString('en-IN'))



// =====================================
// Math Object
// =====================================

// Math is a built-in JavaScript object.
// It provides mathematical functions and constants.

// console.log(Math)



// -------------------------------------
// Math.abs()
// -------------------------------------
// Returns the absolute (positive) value.

// Output: 4
// console.log(Math.abs(-4))



// -------------------------------------
// Math.round()
// -------------------------------------
// Rounds to the nearest integer.
//
// Decimal >= 0.5 -> rounds UP
// Decimal < 0.5 -> rounds DOWN

// Output: 6
// console.log(Math.round(5.8))



// -------------------------------------
// Math.ceil()
// -------------------------------------
// Always rounds UP to the nearest integer.

// Output: 6
// console.log(Math.ceil(5.2))



// -------------------------------------
// Math.floor()
// -------------------------------------
// Always rounds DOWN to the nearest integer.

// Output: 5
// console.log(Math.floor(5.8))



// -------------------------------------
// Math.min()
// -------------------------------------
// Returns the smallest number.

// Output: 3
// console.log(Math.min(5, 4, 3, 6, 8))



// -------------------------------------
// Math.max()
// -------------------------------------
// Returns the largest number.

// Output: 8
// console.log(Math.max(5, 4, 3, 6, 8))



// =====================================
// Math.random()
// =====================================

// Generates a random decimal number
// between 0 (inclusive) and 1 (exclusive).

// Example outputs:
// 0.123456
// 0.987654

// console.log(Math.random())



// -------------------------------------
// Random number between 1 and 10 (decimal)
// -------------------------------------

// Multiplies the random number by 10
// and shifts it by 1.

// console.log(Math.random() * 10 + 1)



// Same logic with brackets for better readability.

// console.log((Math.random() * 10) + 1)



// -------------------------------------
// Random integer between 1 and 10
// -------------------------------------

// Math.floor() removes the decimal part.

// Example outputs:
// 1
// 4
// 8
// 10

// console.log(Math.floor(Math.random() * 10) + 1)



// =====================================
// Random Number in a Given Range
// =====================================

const min = 10
const max = 20

// Formula:
//
// Math.floor(Math.random() * (max - min + 1)) + min
//
// Explanation:
//
// Step 1:
// Math.random()
// Generates a number between 0 and 1.
//
// Step 2:
// (max - min + 1)
// Calculates the total number of possible values.
//
// Here:
// (20 - 10 + 1)
// = 11 possible numbers (10 to 20)
//
// Step 3:
// Multiply random number by 11.
//
// Range becomes:
// 0 to 10.999...
//
// Step 4:
// Math.floor()
// Converts it into an integer.
//
// Possible values:
// 0 to 10
//
// Step 5:
// Add min (10)
//
// Final range:
// 10 to 20 (inclusive)

console.log(Math.floor(Math.random() * (max - min + 1)) + min)