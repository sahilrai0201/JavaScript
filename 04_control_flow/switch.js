// ======================================================
// switch Statement in JavaScript
// ======================================================

// A switch statement is used when you need to compare
// one value against multiple possible cases.

// It is often cleaner and more readable than writing
// many if...else if...else statements.

// Example:
// const month = 3;      // Using numbers
const month = "March";   // Using strings


// JavaScript checks the value of 'month'
// against each case one by one.
//
// As soon as it finds a matching case,
// it starts executing the code from that case.

switch (month) {

    // --------------------------------------------------
    // Case 1
    // --------------------------------------------------
    case "January":
        console.log("January");

        // 'break' stops the switch statement.
        // Without break, execution continues to
        // the next case (called fall-through).
        break;

    // --------------------------------------------------
    // Case 2
    // --------------------------------------------------
    case "February":
        console.log("February");
        break;

    // --------------------------------------------------
    // Case 3
    // --------------------------------------------------
    case "March":
        console.log("March");
        break;

    // --------------------------------------------------
    // Case 4
    // --------------------------------------------------
    case "April":
        console.log("April");
        break;

    // --------------------------------------------------
    // Default Case
    // --------------------------------------------------
    // Executes only if none of the above cases match.
    default:
        console.log("Default case matched");
        break;
}