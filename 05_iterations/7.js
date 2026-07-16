// ==========================================
// map() in JavaScript
// ==========================================

// map() is an Array method.
//
// It creates and returns a NEW array by
// transforming every element of the original array.
//
// Syntax:
// array.map((currentValue, index, array) => {
//      return modifiedValue;
// })



const myNumbers = [1,2,3,4,5,6,7,8,9,10];



// ==========================================
// Example 1
// ==========================================

// Add 10 to every element.

// const newNums = myNumbers.map((num) => num + 10);

// Output:
// [11,12,13,14,15,16,17,18,19,20]




// ==========================================
// Example 2
// ==========================================

// Using curly braces.
// Since {} is used, return is required.

// const newNums = myNumbers.map((num) => {
//     return num + 10;
// });




// ==========================================
// Method Chaining
// ==========================================

// Every map() returns a NEW array.
//
// Because of that,
// another map() can be called immediately.
//
// This is called Method Chaining.

const newNums = myNumbers

    // Step 1
    // Multiply every number by 10.
    .map((num) => num * 10)

    // Step 2
    // Add 1 to every result.
    .map((num) => num + 1)

    // Step 3
    // Keep only numbers >= 40.
    .filter((num) => num >= 40);

console.log(newNums);

// Output:
// [41,51,61,71,81,91,101]