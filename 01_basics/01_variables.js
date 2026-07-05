// const is used to declare a constant variable.
// Its value cannot be changed (reassigned) after initialization.
const accountId = 144523

// let is used to declare variables whose values can change.
// It is block-scoped, making it the preferred way to declare variables.
let accountEmail = "sahil@google.com"

// var is the old way of declaring variables.
// It is function-scoped and can cause unexpected behavior,
// so it is generally avoided in modern JavaScript.
var accountPassword = "123456"

// If you don't use const, let, or var, JavaScript creates a global variable.
// This is considered bad practice because it can lead to bugs.
accountCity = "Noida"

// A variable declared with let but not initialized.
// Its default value is 'undefined'.
let accountState;


// ---------------------- Reassignment ----------------------

// ❌ Not allowed.
// Variables declared with const cannot be reassigned.
// Uncommenting the next line will throw a TypeError.

// accountId = 2


// Variables declared with let can be reassigned.
accountEmail = "hc@hc.com"

// Variables declared with var can also be reassigned.
accountPassword = "212121"

// Global variable can also be reassigned.
accountCity = "Delhi"


// Prints a single value to the console.
console.log(accountId);


// ----------------------------------------------------------
// Why should you avoid 'var'?
//
// var is function-scoped, not block-scoped.
// This can lead to unexpected bugs because variables declared
// inside blocks (if, for, while, etc.) are still accessible outside.
//
// Modern JavaScript recommends using:
//   const -> when the value should not change.
//   let   -> when the value needs to change.
// ----------------------------------------------------------


// console.table() displays data in a table format,
// making it easier to read multiple values.
console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
]);