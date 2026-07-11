// **************** Immediately Invoked Function Expression (IIFE) ****************

// IIFE = Immediately Invoked Function Expression
// It is a function that is executed immediately after it is created.

// Syntax:
// (function(){ 
//     // code
// })();



// **************** Normal Function ****************

// Function declaration
// It needs to be called explicitly.

// function chai(){
//     console.log("DB Connected")
// }

// Function call
// chai()




// **************** Named IIFE ****************

// Here, the function has a name: chai
// The function executes immediately after its definition.

// Wrapping the function inside () turns it into a function expression.
// The final () invokes (calls) it immediately.

(function chai(){
    console.log("DB Connected")
})();     // Semicolon is important to end this IIFE.




// **************** Another Named IIFE ****************

// This is another independent IIFE.

(function code(){
    console.log("DB Connected Two")
})();




// **************** Arrow Function IIFE ****************

// IIFE can also be written using an arrow function.

// Here, we are passing an argument while invoking it.

((name) => {
    console.log(`DB Connected Three, ${name}`)
})("Sahil");




// **************** Why use IIFE? ****************

// 1. Execute code immediately.
// 2. Avoid polluting the global scope.
// 3. Create a private scope for variables.
// 4. Initialization code (database connection, configuration, setup, etc.)




// **************** Example: Variable Privacy ****************

// Global variable
const username = "Global User";

(function(){
    // This variable exists only inside this IIFE.
    const username = "Sahil";

    console.log(username);      // Sahil
})();

console.log(username);          // Global User