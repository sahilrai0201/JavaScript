// ======================
// Type Conversion
// ======================

// let score = 33
// console.log(typeof score)      // "number"
// console.log(typeof(score))     // Another valid syntax

let score = "33"                 // String containing a number
// console.log(typeof(score))       // Output: "string"


// Convert the string into a number
let valueInNumber = Number(score)

// console.log(typeof(valueInNumber))   // Output: "number"


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
// console.log(Number("33"))       // 33
// console.log(Number("33abc"))    // NaN
// console.log(Number(true))       // 1
// console.log(Number(false))      // 0


// ======================
// Boolean Conversion
// ======================

let isLoggedIn = 1

// Convert number into boolean
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)      // true


// Boolean Conversion Rules

// 1         -> true
// 0         -> false
// ""        -> false (empty string)
// "Sahil"   -> true (non-empty string)
// null      -> false
// undefined -> false
// NaN       -> false


// Example:
// console.log(Boolean(0))         // false
// console.log(Boolean(1))         // true
// console.log(Boolean(""))        // false
// console.log(Boolean("Hello"))   // true


// ======================
// String Conversion
// ======================

let someNumber = 33

// Convert number into string
let stringNumber = String(someNumber)

// console.log(stringNumber)           // "33"
// console.log(typeof stringNumber)    // "string"


// More Examples
// console.log(String(true))       // "true"
// console.log(String(false))      // "false"
// console.log(String(null))       // "null"
// console.log(String(undefined))  // "undefined"



// *********************** Operations ***************************

// ======================
// Arithmetic Operators
// ======================

let value = 3

// Unary minus (-) changes a positive number into a negative number
let negValue = -value

// console.log(negValue)      // Output: -3


// Basic Arithmetic Operators

// console.log(2 + 2)   // Addition       -> 4
// console.log(2 - 2)   // Subtraction    -> 0
// console.log(2 * 2)   // Multiplication -> 4
// console.log(2 / 3)   // Division       -> 0.6666666666666666
// console.log(2 % 3)   // Modulus (Remainder) -> 2


// ======================
// String Concatenation
// ======================

let str1 = "Hello"
let str2 = " Sahil"

// '+' joins (concatenates) two strings
let str3 = str1 + str2

// console.log(str3)    // Output: Hello Sahil


// ======================
// Type Coercion with '+'
// ======================

// If one operand is a string, '+' performs string concatenation.

// console.log("1" + 2)      // "12"
// String + Number = String

// console.log(1 + "2")      // "12"
// Number + String = String

// console.log("1" + 2 + 2)  // "122"
// Left to Right Evaluation:
// "1" + 2 = "12"
// "12" + 2 = "122"

// console.log(1 + 2 + "2")  // "32"
// 1 + 2 = 3
// 3 + "2" = "32"


// ======================
// Order of Operations
// ======================

// Parentheses have the highest priority.

// console.log((3 + 4) * 5 % 3)

// Step 1: (3 + 4) = 7
// Step 2: 7 * 5 = 35
// Step 3: 35 % 3 = 2


// ======================
// Unary Plus (+)
// ======================

// Unary '+' converts a value into a number.

// console.log(+true)     // 1
// true converts to 1

// console.log(+"")       // 0
// Empty string converts to 0


// ======================
// Multiple Variable Assignment
// ======================

let num1, num2, num3

// Assignment happens from right to left.
// First, 2 + 2 = 4
// Then all variables get the value 4.

num1 = num2 = num3 = 2 + 2

// num1 = 4
// num2 = 4
// num3 = 4


// ======================
// Increment Operator (++)
// ======================

let gameCounter = 100

// Post-increment operator
// Increases the value by 1.

gameCounter++

console.log(gameCounter)      // Output: 101


// Pre-increment vs Post-increment

// let x = 5;

// console.log(++x);   // 6
// First increments, then prints.

// console.log(x++);   // 5
// First prints, then increments.

// console.log(x);     // 6