// ===============================
// OBJECT CREATION
// ===============================

// Creates an empty object using constructor
// const tinderUser = new Object()

// Creates an empty object using object literal
// (Most commonly used)
const tinderUser = {};

// Adding properties dynamically
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// Prints the complete object
// console.log(tinderUser);

/*
Output:
{
    id: '123abc',
    name: 'Sam',
    isLoggedIn: false
}
*/


// ===============================
// NESTED OBJECTS
// ===============================

// Objects can contain other objects.

const regularUser = {
    email: "some@gmail.com",

    fullname: {
        userfullname: {
            firstname: "Sahil",
            lastname: "Rai"
        }
    }
};

// Accessing nested object values
// Object -> Object -> Object -> Property

// console.log(regularUser.fullname.userfullname.firstname);

/*
Output:
Sahil
*/


// ===============================
// MERGING OBJECTS
// ===============================

const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "a",
    4: "b"
};

// Wrong way
// Creates an object containing two objects
// const obj3 = { obj1, obj2 };

/*
Output:

{
    obj1: {1:'a',2:'b'},
    obj2: {3:'a',4:'b'}
}
*/


// Object.assign()
// Syntax:
// Object.assign(target, source1, source2,...)

// {} is the target object
// Copies properties from obj1 and obj2 into {}
// const obj3 = Object.assign({}, obj1, obj2);


// Spread Operator (...)
// Modern and most commonly used method
const obj3 = {
    ...obj1,
    ...obj2
};

// console.log(obj3);

/*
Output:

{
    '1':'a',
    '2':'b',
    '3':'a',
    '4':'b'
}
*/


// ===============================
// ARRAY OF OBJECTS
// ===============================

// Very common in APIs and databases.

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "g@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    }
];

// Accessing second object's email
// console.log(users[1].email);

/*
Explanation

users[1]
↓

{
    id:2,
    email:"g@gmail.com"
}

users[1].email
↓

g@gmail.com
*/


// ===============================
// OBJECT METHODS
// ===============================

// console.log(tinderUser);

/*
Output

{
    id:'123abc',
    name:'Sam',
    isLoggedIn:false
}
*/


// Object.keys()
// Returns an array containing all keys.
// console.log(Object.keys(tinderUser));

/*
Output

[
    'id',
    'name',
    'isLoggedIn'
]
*/


// Object.values()
// Returns an array containing all values.
// console.log(Object.values(tinderUser));

/*
Output

[
    '123abc',
    'Sam',
    false
]
*/


// Object.entries()
// Converts each key-value pair into an array.

// console.log(Object.entries(tinderUser));

/*
Output

[
    ['id','123abc'],
    ['name','Sam'],
    ['isLoggedIn',false]
]

Useful for looping.
*/


// hasOwnProperty()
// Checks whether the object contains a particular property.

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

/*
Output

true

Returns:
true  -> property exists
false -> property doesn't exist
*/


// Example

// console.log(tinderUser.hasOwnProperty("age"));

/*
Output

false
*/


// ===============================
// SUMMARY
// ===============================

/*

1. {}                 -> Creates an empty object.

2. new Object()       -> Creates a singleton object.

3. Nested objects     -> Access using multiple dots.

4. Object.assign()    -> Merge objects.

5. Spread Operator    -> Modern way to merge objects.

6. Object.keys()      -> Returns all keys.

7. Object.values()    -> Returns all values.

8. Object.entries()   -> Returns key-value pairs as arrays.

9. hasOwnProperty()   -> Checks if a property exists.

10. Arrays can contain objects, and objects can contain arrays.

*/

// ***********************************************************************
// ***********************************************************************
// ***********************************************************************

// ===============================
// OBJECT DESTRUCTURING
// ===============================

// Creating an object

const course = {
    coursename: "JS Tutorials",
    price: "999",
    courseInstructor: "Hitesh"
};


// ===============================
// ACCESSING OBJECT PROPERTIES
// ===============================

// Traditional way

// console.log(course.courseInstructor);

/*
Output

Hitesh
*/


// ===============================
// OBJECT DESTRUCTURING
// ===============================

// Destructuring means extracting properties
// from an object and storing them into variables.

// Syntax

// const {propertyName} = objectName;

const { courseInstructor } = course;

console.log(courseInstructor);

/*
Output

Hitesh
*/


// ===============================
// DESTRUCTURING WITH RENAMING
// ===============================

// We can also rename the variable while destructuring.

// Syntax

// const {propertyName : newVariableName} = objectName;

const { courseInstructor: instructor } = course;

// courseInstructor is renamed to instructor

console.log(instructor);

/*
Output

Hitesh
*/


// ===============================
// WHY USE DESTRUCTURING?
// ===============================

/*

Instead of writing

course.courseInstructor
course.price
course.coursename

again and again,

we can write

const { courseInstructor, price, coursename } = course;

Now we can directly use

courseInstructor
price
coursename

This makes the code cleaner and easier to read.

*/


// ===============================
// DESTRUCTURING MULTIPLE VALUES
// ===============================

const { coursename, price } = course;

console.log(coursename);
console.log(price);

/*
Output

JS Tutorials
999
*/


// ===============================
// JSON (JavaScript Object Notation)
// ===============================

// JSON is a lightweight format used
// to exchange data between a server and a client.

// JSON looks similar to JavaScript objects,
// but there are some important differences.


// JavaScript Object

const student = {
    name: "Sahil",
    age: 22,
    city: "Noida"
};


// JSON

/*
{
    "name": "Sahil",
    "age": 22,
    "city": "Noida"
}
*/


// ===============================
// DIFFERENCE BETWEEN OBJECT & JSON
// ===============================

/*

JavaScript Object

{
    name: "Sahil"
}

✔ Keys may or may not have quotes.
✔ Can contain functions.
✔ Used inside JavaScript.


JSON

{
    "name": "Sahil"
}

✔ Keys MUST be inside double quotes.
✔ Cannot contain functions.
✔ Used for sending and receiving data.

*/


// ===============================
// WHAT IS AN API?
// ===============================

/*

API = Application Programming Interface

Think of an API as a waiter in a restaurant.

You (Client)
      │
      ▼
    API (Waiter)
      │
      ▼
Server / Database

You ask for data.
The API requests it from the server.
The server sends the data back through the API.

*/