// ==========================================================
// WHILE LOOP
// ==========================================================

// Syntax:
// initialization
// while(condition){
//      // Code to execute
//      increment/decrement
// }

// The condition is checked BEFORE each iteration.
// If the condition is false initially, the loop will NOT execute.

// ----------------------------------------------------------
// Example 1: Print even numbers from 0 to 10
// ----------------------------------------------------------

// Initialize variable
let index = 0;

// Loop runs while condition is true
while (index <= 10) {

    // Print current value
    // console.log(`Value of index is ${index}`);

    // Increase index by 2
    // Output: 0, 2, 4, 6, 8, 10
    index = index + 2;
}



// ==========================================================
// WHILE LOOP WITH ARRAY
// ==========================================================

// Array containing superhero names
let myArray = ["flash", "batman", "superman"];

// Start from first index
let arr = 0;

// Continue until last index
while (arr < myArray.length) {

    // Access array element using index
    // console.log(`Value is ${myArray[arr]}`);

    // Move to next index
    arr = arr + 1;
}



// ==========================================================
// DO...WHILE LOOP
// ==========================================================

// Syntax:
//
// initialization
// do{
//      // Code
//      increment/decrement
// }
// while(condition);
//
// Difference:
// - The code inside do block executes FIRST.
// - Then the condition is checked.
// - Therefore, a do...while loop always runs AT LEAST ONCE.


// ----------------------------------------------------------
// Example 1
// ----------------------------------------------------------

// let score = 1;

// do {

//     // Print current score
//     console.log(`Value is : ${score}`);

//     // Increase score by 2
//     score = score + 2;

// }
// while (score <= 10);

// Output:
// 1
// 3
// 5
// 7
// 9



// ==========================================================
// Example 2
// ==========================================================

// Notice that score starts from 11,
// but condition is score <= 10.

let score = 11;

do {

    // This statement executes ONCE
    // before checking the condition.
    console.log(`Value is : ${score}`);

    // Increase score
    score = score + 2;

}
while (score <= 10);

// Output:
// Value is : 11

// Even though the condition (11 <= 10) is false,
// the loop executes once because
// do...while checks the condition AFTER execution.



/*
==========================================================
Difference Between while and do...while
==========================================================

while
------

Syntax:

while(condition){
    // code
}

✔ Condition is checked FIRST.
✔ May execute zero times.

Example:

let x = 11;

while(x <= 10){
    console.log(x);
}

Output:
(No output)



----------------------------------------------------------

do...while
----------

Syntax:

do{
    // code
}
while(condition);

✔ Code executes FIRST.
✔ Condition checked AFTER execution.
✔ Executes at least once.

Example:

let x = 11;

do{
    console.log(x);
}
while(x <= 10);

Output:
11



==========================================================
When to Use Which?
==========================================================

for loop
---------
Use when you know the number of iterations.

Example:
Print numbers from 1 to 100.


while loop
----------
Use when the number of iterations is unknown.

Example:
Keep taking user input until they enter "exit".


do...while loop
---------------
Use when the code must run at least once.

Example:
Display a menu first, then ask the user
whether they want to continue.


==========================================================
Quick Revision
==========================================================

for
✔ Best when iteration count is known.

while
✔ Condition checked before execution.
✔ May run zero times.

do...while
✔ Condition checked after execution.
✔ Always runs at least once.
*/