// ======================
// Type Conversion
// ======================

// let score = 33
// console.log(typeof score)      // "number"
// console.log(typeof(score))     // Another valid syntax

let score = "33"                 // String containing a number
console.log(typeof(score))       // Output: "string"


// Convert the string into a number
let valueInNumber = Number(score)

console.log(typeof(valueInNumber))   // Output: "number"


// ======================
// Number Conversion Examples
// ======================

// "33"      -> 33
// "33abc"   -> NaN (Not a Number)
// true      -> 1
// false     -> 0
// null      -> 0
// undefined -> NaN
// ""        -> 0


// Example:
console.log(Number("33"))       // 33
console.log(Number("33abc"))    // NaN
console.log(Number(true))       // 1
console.log(Number(false))      // 0


// ======================
// Boolean Conversion
// ======================

let isLoggedIn = 1

// Convert number into boolean
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)      // true


// Boolean Conversion Rules

// 1         -> true
// 0         -> false
// ""        -> false (empty string)
// "Sahil"   -> true (non-empty string)
// null      -> false
// undefined -> false
// NaN       -> false


// Example:
console.log(Boolean(0))         // false
console.log(Boolean(1))         // true
console.log(Boolean(""))        // false
console.log(Boolean("Hello"))   // true


// ======================
// String Conversion
// ======================

let someNumber = 33

// Convert number into string
let stringNumber = String(someNumber)

console.log(stringNumber)           // "33"
console.log(typeof stringNumber)    // "string"


// More Examples
console.log(String(true))       // "true"
console.log(String(false))      // "false"
console.log(String(null))       // "null"
console.log(String(undefined))  // "undefined"