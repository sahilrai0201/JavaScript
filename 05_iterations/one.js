// ==========================================================
// FOR LOOP IN JAVASCRIPT
// ==========================================================

// Syntax:
// for(initialization; condition; increment/decrement){
//      // Code to execute repeatedly
// }

// initialization -> Runs only once before the loop starts.
// condition      -> Checked before every iteration.
// increment      -> Runs after each iteration.

// ----------------------------------------------------------
// Example 1: Print numbers from 1 to 10
// ----------------------------------------------------------

for (let i = 1; i <= 10; i++) {

    // Store current value of i
    const element = i;

    // Check if current number is 5
    if (element == 5) {
        // console.log("5 is best number");
    }

    // Print current number
    // console.log(element);
}



// ==========================================================
// NESTED FOR LOOP
// ==========================================================

// A loop inside another loop is called a Nested Loop.
//
// Outer loop executes first.
// For every single iteration of outer loop,
// the inner loop executes completely.

for (let i = 1; i <= 10; i++) {

    // console.log(`Outer loop value : ${i}`);

    for (let j = 1; j <= 10; j++) {

        // Current value of inner loop
        // console.log(`Inner loop value : ${j} and outer loop value : ${i}`);

        // Print multiplication table
        // Example:
        // 2 * 3 = 6
        // console.log(i + '*' + j + '=' + i * j);
    }
}



// ==========================================================
// LOOP THROUGH AN ARRAY
// ==========================================================

// Arrays store multiple values.
let myArray = ["flash", "batman", "superman"];

// Total number of elements
// console.log(myArray.length);

// Loop through every element of the array
for (let index = 0; index < myArray.length; index++) {

    // Access element using its index
    const element = myArray[index];

    // Print current element
    // console.log(element);
}



// ==========================================================
// BREAK STATEMENT
// ==========================================================

// break immediately terminates the loop.
// Control comes out of the loop completely.

for (let i = 1; i <= 20; i++) {

    // Stop loop when i becomes 5
    if (i == 5) {

        // console.log("5 detected");

        // Exit the loop completely
        break;
    }

    // Prints only 1,2,3,4
    // console.log(`Value of i is : ${i}`);
}



// ==========================================================
// CONTINUE STATEMENT
// ==========================================================

// continue skips ONLY the current iteration.
// The loop continues with the next iteration.

for (let i = 1; i <= 20; i++) {

    // Skip printing number 5
    if (i == 5) {

        console.log("5 detected");

        // Skip remaining code of this iteration
        continue;
    }

    // Prints every number except 5
    console.log(`Value of i is : ${i}`);
}



/*
==========================================================
Difference Between break and continue
==========================================================

break
------
- Stops the entire loop.
- Control comes out of the loop.
- Remaining iterations are NOT executed.

Example:
1
2
3
4
5 detected

Loop ends here.

----------------------------------------------------------

continue
---------
- Skips only the current iteration.
- Loop continues with the next iteration.
- Remaining iterations still execute.

Example:
1
2
3
4
5 detected
6
7
8
...
20

==========================================================
Remember
==========================================================

for loop
---------
Used when you know how many times the loop should run.

Nested loop
-----------
Used for tables, matrices, patterns, etc.

break
-----
Exit the loop immediately.

continue
--------
Skip current iteration and move to the next one.

Array Loop
----------
Use:
for(let i = 0; i < array.length; i++)

to access every element of an array.
*/