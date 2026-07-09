// ===============================
// FUNCTIONS IN JAVASCRIPT
// ===============================

// Function Declaration
// A function is a block of reusable code.
// It executes only when it is called.

function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}

// Function Call (Invocation)
// sayMyName();

/*
Output

S
A
H
I
L
*/


// ===============================
// FUNCTION PARAMETERS & ARGUMENTS
// ===============================

// Parameters
// Variables written while defining a function.

// Arguments
// Actual values passed while calling the function.

// Example

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,6)

// number1 and number2 → Parameters
// 3 and 6 → Arguments


// JavaScript automatically performs type coercion.

// addTwoNumbers(3, 6)
// Output
// 9

// addTwoNumbers(3, "6")
// Output
// 36

// addTwoNumbers(3, "a")
// Output
// 3a

// addTwoNumbers(3, null)
// Output
// 3


// ===============================
// RETURN STATEMENT
// ===============================

// return sends a value back to the function call.
// Code after return never executes.

function addTwoNumbers(number1, number2) {

    let result = number1 + number2;

    return result;
}

const result = addTwoNumbers(3, 6);

// console.log("Result :", result);

/*
Output

Result : 9
*/


// ===============================
// DEFAULT PARAMETERS
// ===============================

// If no argument is passed,
// the default value is used.

function loginUserMessage(username = "Sam") {

    // This condition will never run
    // when a default value is provided.

    if (username === undefined) {
        console.log("Please enter a username!");
        return;
    }

    return `${username} just logged in!`;
}

// console.log(loginUserMessage());

/*
Output

Sam just logged in!
*/


// console.log(loginUserMessage("Sahil Rai"));

/*
Output

Sahil Rai just logged in!
*/


// If there is NO default value

/*
function loginUserMessage(username){

    if(!username){
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}
*/


// ===============================
// REST OPERATOR (...)
// ===============================

// Rest Operator collects multiple values
// into a single array.

// function calculateCartPrice(num1){
//     return num1;
// }

// console.log(calculateCartPrice(200));
// Output
// 200

// console.log(calculateCartPrice(200,400,500));
// Output
// 200

// Only the first argument is received.


// Using Rest Operator

// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200,400,500));

/*
Output

[200,400,500]
*/


// Mixing normal parameters and Rest Operator

function calculateCartPrice(val1, val2, ...num1) {

    return num1;
}

// console.log(calculateCartPrice(200,400,500,2000));

/*
Explanation

val1 = 200

val2 = 400

num1 = [500,2000]

Output

[500,2000]
*/


// ===============================
// PASSING OBJECTS TO FUNCTIONS
// ===============================

// Creating an object

const user = {
    username: "Sahil",
    price: 199
};


// Function receiving an object

function handleObject(anyobject) {

    console.log(
        `Username is ${anyobject.username} and price is ${anyobject.price}`
    );
}


// Passing an existing object

// handleObject(user);


// Passing an object directly

handleObject({
    username: "Sam",
    price: 399
});

/*
Output

Username is Sam and price is 399
*/


// ===============================
// PASSING ARRAYS TO FUNCTIONS
// ===============================

// Creating an array

const myNewArray = [200, 400, 600, 800];


// Function receiving an array

function returnSecondValue(getArray) {

    return getArray[1];
}


// Passing an existing array

// console.log(returnSecondValue(myNewArray));

/*
Output

400
*/


// Passing an array directly

console.log(returnSecondValue([200, 400, 1000, 1200]));

/*
Output

400
*/


// ===============================
// SUMMARY
// ===============================

/*

1. Function
   -> Reusable block of code.

2. Function Call
   -> Executes the function.

3. Parameters
   -> Variables in function definition.

4. Arguments
   -> Actual values passed during function call.

5. return
   -> Sends a value back to the caller.

6. Default Parameter
   -> Used when no argument is passed.

7. Rest Operator (...)
   -> Collects multiple arguments into an array.

8. Objects can be passed directly to functions.

9. Arrays can also be passed directly to functions.

10. JavaScript allows functions to accept
    numbers, strings, objects, arrays,
    functions, and even other functions.

*/