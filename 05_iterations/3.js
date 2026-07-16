// ==========================
// for...of Loop in JavaScript
// ==========================

// The for...of loop is used to iterate over ITERABLE objects.
// Iterable means an object that can be looped through one value at a time.

// Examples of iterable objects:
// Arrays
// Strings
// Maps
// Sets

// Examples of NON-iterable objects:
// Plain Objects ({})
// (Need Object.keys(), Object.values(), or Object.entries())



// -------------------------
// Looping through an Array
// -------------------------

const arr = [1, 2, 3, 4, 5]

// "num" stores each element of the array one by one.
for (const num of arr) {
    // console.log(num)

    // Output:
    // 1
    // 2
    // 3
    // 4
    // 5
}



// -------------------------
// Looping through a String
// -------------------------

const greetings = "Hello World!"

// A string is iterable.
// Each iteration returns one character.
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)

    // Output:
    // H
    // e
    // l
    // l
    // o
    // ...
}



// ==========================
// Map in JavaScript
// ==========================

// Map stores key-value pairs.
// Unlike objects:
// ✔ Maintains insertion order
// ✔ Keys can be of ANY datatype
// ✔ Duplicate keys are NOT allowed

const map = new Map()

map.set('IN', "India")
map.set('US', "America")
map.set('FR', "France")

// Duplicate key
// Since 'IN' already exists, this line simply updates it.
// No new entry is created.
map.set('IN', "India")

// console.log(map)


// -------------------------
// Iterating over a Map
// -------------------------

// Every iteration returns an ARRAY containing [key, value]
for (const key of map) {
    // console.log(key)

    // Output:
    // ['IN', 'India']
    // ['US', 'America']
    // ['FR', 'France']
}



// -------------------------
// Destructuring Map entries
// -------------------------

// Here we directly unpack each [key, value] pair.
for (const [key, value] of map) {
    // console.log(key, ":", value)

    // Output:
    // IN : India
    // US : America
    // FR : France
}



// ==========================
// Objects
// ==========================

// Plain JavaScript objects are NOT iterable.

const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
}


// ❌ This gives an error because objects are not iterable.
for (const [key, value] of myObj) {
    // console.log(key, ":", value)

    // TypeError:
    // myObj is not iterable
}



// ==========================
// Correct Ways to Iterate
// ==========================


// 1. Object.keys()
// Returns an array of keys.

for (const key of Object.keys(myObj)) {
    // console.log(key)

    // Output:
    // game1
    // game2
}



// 2. Object.values()
// Returns an array of values.

for (const value of Object.values(myObj)) {
    // console.log(value)

    // Output:
    // NFS
    // Spiderman
}



// 3. Object.entries()
// Returns an array of [key, value] pairs.

for (const [key, value] of Object.entries(myObj)) {
    // console.log(key, ":", value)

    // Output:
    // game1 : NFS
    // game2 : Spiderman
}