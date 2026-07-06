// ===============================
// Strings in JavaScript
// ===============================

// Primitive string
const name = "Sahil Rai"

// Number variable
const repoCount = 20


// -------------------------------
// Old way of concatenating strings
// -------------------------------
// Adds strings together using the + operator.
// Works fine but becomes difficult to read with many variables.

// console.log(name + repoCount + " Value")


// -------------------------------
// Modern way - Template Literals
// -------------------------------
// Uses backticks (` `) instead of quotes.
// ${} allows variables or expressions to be inserted directly.

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


// -------------------------------
// String Object
// -------------------------------
// Creates a String object instead of a primitive string.
// Usually, primitive strings are preferred.
// We are using String() here only to learn string methods.

const gameName = new String("Sahil-Rai")


// Accessing characters using index
// Index starts from 0.

// console.log(gameName[0])      // S


// Every JavaScript object has a prototype.
// Most string methods come from String.prototype.

// console.log(gameName.__proto__)


// Returns total number of characters.

// console.log(gameName.length)


// Converts all letters to uppercase.
// Does NOT change the original string because strings are immutable.

// console.log(gameName.toUpperCase())


// Returns the character at the given index.

// console.log(gameName.charAt(2))   // h


// Returns the index of the first occurrence of the character.
// If not found, returns -1.

// console.log(gameName.indexOf('l'))



// ===============================
// substring()
// ===============================

// Extracts characters from index 0 to index 4.
// Ending index is NOT included.

const newString = gameName.substring(0, 5)

// Output: Sahil
// console.log(newString)



// ===============================
// slice()
// ===============================

// slice() also extracts part of a string.
// Unlike substring(), slice() supports negative indexes.
//
// Negative indexes count from the end.
// Here:
// -8 means start from the 8th character from the end.
// End index is 5.

const anotherString = gameName.slice(-8, 5)

// Output: ahi
// console.log(anotherString)



// ===============================
// trim()
// ===============================

// String with extra spaces before and after.

const newStringOne = "    Sahil    "

// Prints the original string with spaces.
// console.log(newStringOne)


// Removes whitespace from both the beginning and end.
// Original string remains unchanged.

// console.log(newStringOne.trim())



// ===============================
// replace()
// ===============================

// URL containing "%20" (URL encoding for space)

const url = "https://sahil.com/sahil%20rai"


// Replaces only the FIRST occurrence of "%20" with "-"

console.log(url.replace('%20', '-'))

// Output:
// https://sahil.com/sahil-rai



// ===============================
// includes()
// ===============================

// Checks whether the string contains "jethalal".
// Returns true or false.

console.log(url.includes('jethalal'))

// Output:
// false



// ===============================
// split()
// ===============================

// Splits the string wherever "-" appears.
// Returns an array of strings.

console.log(gameName.split('-'))

// Output:
// ["Sahil", "Rai"]