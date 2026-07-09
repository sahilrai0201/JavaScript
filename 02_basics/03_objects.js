// ===============================
// OBJECTS IN JAVASCRIPT
// ===============================

// Singleton Object
// Created using Object.create()

// Example
// const obj = Object.create({})

// Object Literal
// Most common way to create an object.
// Objects store data in key-value pairs.


// ===============================
// CREATING A SYMBOL
// ===============================

// Symbol creates a unique value.
const mySym = Symbol("key1");


// ===============================
// CREATING AN OBJECT
// ===============================

const JsUser = {

    // Normal key-value pair
    name: "Sahil",

    // Keys having spaces must be written inside quotes
    // They can only be accessed using bracket notation.
    "full name": "Sahil Rai",

    // Symbol used as an object key
    // [] tells JavaScript to use the Symbol itself.
    [mySym]: "mykey1",

    age: 22,
    location: "Noida",
    email: "sahil@google.com",
    isLoggedIn: false,

    // Objects can also store arrays.
    lastLoginDays: ["Monday", "Saturday"]
};


// ===============================
// ACCESSING OBJECT VALUES
// ===============================

// Dot Notation
// Used for normal property names.

console.log(JsUser.email);

// Output
// sahil@google.com


// Bracket Notation
// Used when:
// 1. Property contains spaces
// 2. Property name is stored inside a variable
// 3. Property is a Symbol

console.log(JsUser["email"]);

// Output
// sahil@google.com


// Accessing property having spaces

console.log(JsUser["full name"]);

// Output
// Sahil Rai


// Accessing Symbol property

console.log(JsUser[mySym]);

// Output
// mykey1


// Checking datatype

console.log(typeof JsUser[mySym]);

// Output
// string


// ===============================
// UPDATING OBJECT PROPERTIES
// ===============================

// Changing the value of email

JsUser.email = "sahil@microsoft.com";

console.log(JsUser.email);

// Output
// sahil@microsoft.com


// ===============================
// FREEZING AN OBJECT
// ===============================

// Object.freeze()
// Prevents:
// ✔ Adding properties
// ✔ Updating properties
// ✔ Deleting properties

// Uncomment to test

// Object.freeze(JsUser);


// This update will work only if the object is NOT frozen.

JsUser.email = "sahil@chatgpt.com";

console.log(JsUser.email);

// Output
// sahil@chatgpt.com


// Printing the complete object

console.log(JsUser);

/*
Output

{
  name: 'Sahil',
  'full name': 'Sahil Rai',
  age: 22,
  location: 'Noida',
  email: 'sahil@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/


// ===============================
// ADDING METHODS TO AN OBJECT
// ===============================

// Functions stored inside an object
// are called Methods.


// Method 1

JsUser.greeting = function () {
    console.log("Hello JS User");
};


// Method 2

// 'this' refers to the current object.
// this.name = JsUser.name

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
};


// ===============================
// CALLING METHODS
// ===============================

// Without ()
// Prints the function definition only.

console.log(JsUser.greeting);

/*
Output

[Function (anonymous)]
*/


// With ()
// Executes the function.

console.log(JsUser.greeting());

/*
Output

Hello JS User
undefined
*/


// Calling second method

console.log(JsUser.greetingTwo());

/*
Output

Hello JS User, Sahil
undefined
*/


// ===============================
// WHY IS "undefined" PRINTED?
// ===============================

/*

console.log(JsUser.greeting());

Step 1
JsUser.greeting() executes.

↓

Hello JS User


Step 2

The function does not return anything.

↓

return undefined


Step 3

console.log() prints the returned value.

↓

undefined

*/


// ===============================
// SUMMARY
// ===============================

/*

1. Object.create()  -> Creates a Singleton Object.

2. {}               -> Creates an Object Literal.

3. Dot Notation     -> obj.name

4. Bracket Notation -> obj["full name"]

5. Symbol           -> Creates a unique property key.

6. Object.freeze()  -> Makes an object immutable.

7. Methods          -> Functions inside objects.

8. this             -> Refers to the current object.

9. obj.method       -> Prints function definition.

10. obj.method()    -> Executes the function.

11. Functions without a return statement
    automatically return undefined.

*/