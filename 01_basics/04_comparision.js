// ======================
// Comparison Operators
// ======================

// Comparison operators always return a Boolean value:
// true or false

// console.log(2 > 1)    // true  -> 2 is greater than 1
// console.log(2 >= 1)   // true  -> 2 is greater than or equal to 1
// console.log(2 < 1)    // false -> 2 is not less than 1
// console.log(2 == 1)   // false -> 2 is not equal to 1
// console.log(2 != 1)   // true  -> 2 is not equal to 1


// ======================
// Comparison with Strings
// ======================

// JavaScript automatically converts strings to numbers
// when using comparison operators (<, >, <=, >=).

// console.log("2" > 1)    // true
// "2" is converted to number 2
// 2 > 1 -> true

// console.log("02" > 1)   // true
// "02" becomes number 2
// 2 > 1 -> true


// ======================
// Comparison with null
// ======================

// ⚠️ null behaves differently in comparisons.

// console.log(null > 0)
// false
// null is converted to 0
// 0 > 0 -> false

// console.log(null == 0)
// false
// Equality (==) does NOT convert null to 0.
// null is only loosely equal to undefined.

// console.log(null >= 0)
// true
// For >=, null is converted to 0.
// 0 >= 0 -> true

console.log(null > 0)     // false
console.log(null == 0)    // false
console.log(null >= 0)    // true


// ======================
// Comparison with undefined
// ======================

// undefined becomes NaN in numeric comparisons.
// Any comparison with NaN returns false.

console.log(undefined == 0)   // false
console.log(undefined > 0)    // false
console.log(undefined < 0)    // false


// ======================
// Strict Equality (===)
// ======================

// ==  -> compares only values (after type conversion)
// === -> compares both value AND data type

// "2" == 2
// true because string "2" is converted to number 2

// "2" === 2
// false because:
// Value: 2 == 2 ✔
// Type : string != number ✖

console.log("2" === 2)    // false