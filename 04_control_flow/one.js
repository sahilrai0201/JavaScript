// ======================================================
// if Statement in JavaScript
// ======================================================

// The if statement executes a block of code only if
// the given condition evaluates to true.

const isUserLoggedIn = true;

// Since the condition is true, the code inside the block executes.
if (isUserLoggedIn) {
    // console.log(5 + 5);
}

// ======================================================
// Comparison Operators
// ======================================================

// <   -> Less than
// >   -> Greater than
// <=  -> Less than or equal to
// >=  -> Greater than or equal to
// ==  -> Checks only value (loose equality)
// === -> Checks both value and data type (strict equality)
// !=  -> Not equal (loose)
// !== -> Not equal (strict)


// ======================================================
// Variable Scope
// ======================================================

const score = 200;

if (score > 100) {
    // 'power' is declared using let.
    // Variables declared with let are BLOCK SCOPED,
    // meaning they can only be accessed inside this block.
    let power = "fly";

    // console.log(`User power: ${power}`);
}

// This will throw an error because 'power'
// exists only inside the if block.
// console.log(power);


// ======================================================
// Single Line if Statement
// ======================================================

const balance = 1000;

// JavaScript allows writing if statements in one line
// when there is only one statement to execute.

// Example:
// if (balance > 500) console.log("test");

// Multiple statements can also be written using commas,
// but this is considered BAD PRACTICE because
// it reduces readability.

// if(balance > 500) console.log("test"), console.log("test2");


// ======================================================
// if...else if...else Ladder
// ======================================================

// JavaScript checks conditions from top to bottom.

// As soon as one condition becomes true,
// the remaining conditions are skipped.

// if(balance < 500){
//     console.log("Less than 500");
// }
// else if(balance < 750){
//     console.log("Less than 750");
// }
// else if(balance < 900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Less than 1200");
// }


// Since balance = 1000:
//
// balance < 500   -> false
// balance < 750   -> false
// balance < 900   -> false
//
// So the else block executes.


// ======================================================
// Logical Operators
// ======================================================

// && (Logical AND)
// Returns true only if BOTH conditions are true.

// || (Logical OR)
// Returns true if AT LEAST ONE condition is true.

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


// ======================================================
// AND Operator (&&)
// ======================================================

// Both conditions must be true.

if (userLoggedIn && debitCard) {
    // User is logged in AND has a debit card.
    // Therefore, allow the purchase.

    // console.log("Allow to buy course!");
}


// Truth Table for &&
//
// true  && true  -> true
// true  && false -> false
// false && true  -> false
// false && false -> false



// ======================================================
// OR Operator (||)
// ======================================================

// At least one condition should be true.

if (loggedInFromGoogle || loggedInFromEmail) {
    // User has logged in using either Google
    // OR Email, so login is successful.

    // console.log("User logged in");
}


// Truth Table for ||
//
// true  || true  -> true
// true  || false -> true
// false || true  -> true
// false || false -> false


// ======================================================
// Quick Revision
// ======================================================

// if
// Executes only when condition is true.

// if...else
// Executes one block if true, another if false.

// else if
// Used to check multiple conditions.

// let
// Block scoped (accessible only inside {}).

// const
// Cannot be reassigned.

// &&
// All conditions must be true.

// ||
// At least one condition must be true.

// ===
// Checks both value and datatype.
// Preferred over == in most cases.