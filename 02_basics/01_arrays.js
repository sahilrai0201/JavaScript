// =======================
// Arrays in JavaScript
// =======================

// Different ways to create arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

// Accessing array elements using index (starts from 0)
// console.log(myArr[0])      // Output: 0


// =======================
// Array Methods
// =======================

// push() -> Adds element(s) at the END of the array
myArr.push(6)
myArr.push(7)
// myArr = [0,1,2,3,4,5,6,7]

// console.log(myArr)


// pop() -> Removes the LAST element
myArr.pop()
// Removes 7

// console.log(myArr)


// unshift() -> Adds element(s) at the BEGINNING
myArr.unshift(9)
// myArr = [9,0,1,2,3,4,5,6]

// console.log(myArr)


// shift() -> Removes the FIRST element
myArr.shift()
// Removes 9

// console.log(myArr)


// includes() -> Checks whether an element exists
// Returns true or false

// console.log(myArr.includes(9))   // false
// console.log(myArr.includes(3))   // true


// indexOf() -> Returns index of an element
// If element doesn't exist, returns -1

// console.log(myArr.indexOf(9))    // -1
// console.log(myArr.indexOf(3))    // 3


// join() -> Converts array into a string
// Default separator is comma (,)

const newArr = myArr.join()

// console.log(myArr)      // Original array remains unchanged
// console.log(newArr)     // "0,1,2,3,4,5,6"

// join() always returns a STRING
// console.log(typeof newArr)   // string



// =======================
// slice() vs splice()
// =======================

console.log("A ", myArr)
// Output:
// A  [0,1,2,3,4,5,6]


// slice(start, end)
// - Extracts a portion of the array
// - End index is NOT included
// - Does NOT modify the original array

const myn1 = myArr.slice(1, 3)

console.log(myn1)
// Output:
// [1,2]

console.log("B ", myArr)
// Original array is still unchanged
// B [0,1,2,3,4,5,6]


// splice(start, deleteCount)
// - Removes elements from the original array
// - Modifies the original array
// - Returns the removed elements

const myn2 = myArr.splice(1, 3)
// Starts at index 1
// Removes 3 elements -> [1,2,3]

console.log("C ", myArr)
// Remaining array:
// [0,4,5,6]

console.log(myn2)
// Removed elements:
// [1,2,3]



/*
========================================
Difference: slice() vs splice()
========================================

slice()
-------
✔ Doesn't modify original array
✔ Used to copy/extract elements
✔ Ending index is excluded

Example:
let arr = [10,20,30,40]
arr.slice(1,3)

Returns:
[20,30]

Original:
[10,20,30,40]


splice()
--------
✔ Modifies original array
✔ Used to remove/add/replace elements
✔ Second parameter is deleteCount

Example:
let arr = [10,20,30,40]
arr.splice(1,2)

Returns:
[20,30]

Original becomes:
[10,40]

========================================
Memory Trick
========================================

slice = "Copy ✂️"
→ Original array stays safe.

splice = "Cut ✂️"
→ Original array changes.
*/