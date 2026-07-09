// ===============================
// OBJECTS IN JAVASCRIPT
// ===============================

// Singleton Object
// Created using Object.create()
// Example:
// const obj = Object.create({})

// Object Literal (Most Common Way)
// Objects store data in key-value pairs.

// Creating a Symbol
// Symbol creates a unique value.
const mySym = Symbol("key1");

// Creating an object using object literal
const JsUser = {
    // Normal key-value pair
    name: "Sahil",

    // Key with space must always be accessed using []
    "full name": "Sahil Rai",

    // Using Symbol as a key
    // Without [] it would become a normal string key.
    [mySym]: "mykey1",

    age: 22,
    location: "Noida",
    email: "sahil@google.com",
    isLoggedIn: false,

    // Arrays can also be stored inside objects
    lastLoginDays: ["Monday", "Saturday"]
};

// ===============================
// ACCESSING OBJECT VALUES
// ===============================

// Dot notation
// Used when key has no spaces or special characters.
console.log(JsUser.email);

// Bracket notation
// Useful when:
// 1. Key contains spaces
// 2. Key is stored in a variable
// 3. Key is a Symbol

console.log(JsUser["email"]);

// Accessing key with spaces
console.log(JsUser["full name"]);

// Accessing Symbol key
console.log(JsUser[mySym]);

// Checking data type
console.log(typeof JsUser[mySym]);

// ===============================
// UPDATING OBJECT VALUES
// ===============================

// Changing email
JsUser.email = "sahil@microsoft.com";

console.log(JsUser.email);

// ===============================
// FREEZING AN OBJECT
// ===============================

// Prevents any modifications to the object
// Uncomment to test

// Object.freeze(JsUser);

// This change will work only if object is NOT frozen
JsUser.email = "sahil@chatgpt.com";

console.log(JsUser.email);

// Print complete object
console.log(JsUser);

// ===============================
// ADDING METHODS (FUNCTIONS)
// ===============================

// Functions stored inside objects are called Methods.

// Method 1
JsUser.greeting = function () {
    console.log("Hello JS User");
};

// Method 2
// 'this' refers to the current object.
JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
};

// ===============================
// CALLING METHODS
// ===============================

// Prints the function definition only
// (because () is not used)
console.log(JsUser.greeting);

// Calls the function
// Function prints "Hello JS User"
// After execution it returns undefined
console.log(JsUser.greeting());

// Calls second function
// this.name => "Sahil"
console.log(JsUser.greetingTwo());

/*
OUTPUT

[Function (anonymous)]

Hello JS User
undefined

Hello JS User, Sahil
undefined

Why undefined?

Because console.log() is printing the return value of the function.
Your functions don't return anything, so JavaScript automatically returns undefined.
*/