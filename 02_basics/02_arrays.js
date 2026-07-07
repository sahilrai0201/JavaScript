// =======================
// Combining Arrays
// =======================

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// =======================
// push()
// =======================

// push() adds the entire dc_heros array as a SINGLE element
// It does NOT merge the arrays

// marvel_heros.push(dc_heros)

// Result:
// [
//   "thor",
//   "ironman",
//   "spiderman",
//   ["superman", "flash", "batman"]
// ]

// console.log(marvel_heros)


// Accessing nested array elements
// marvel_heros[3] -> ["superman", "flash", "batman"]
// marvel_heros[3][1] -> "flash"

// console.log(marvel_heros[3][1])



// =======================
// concat()
// =======================

// concat() combines two arrays into a NEW array
// Original arrays remain unchanged

const allHeros = marvel_heros.concat(dc_heros)

// Output:
// [
//   "thor",
//   "ironman",
//   "spiderman",
//   "superman",
//   "flash",
//   "batman"
// ]

// console.log(allHeros)



// =======================
// Spread Operator (...)
// =======================

// Spread operator expands each array into individual elements
// It is the modern and most commonly used way to merge arrays

const all_new_heros = [...marvel_heros, ...dc_heros]

// Output:
// [
//   "thor",
//   "ironman",
//   "spiderman",
//   "superman",
//   "flash",
//   "batman"
// ]

// console.log(all_new_heros)



// =======================
// flat()
// =======================

// Nested array (array inside array)

const another_array = [
    1,
    2,
    3,
    [4, 5, 6],
    7,
    [6, 7, [4, 5]]
]

// flat(depth)
// Flattens nested arrays

// Infinity means:
// "Keep flattening until no nested array remains."

const real_another_array = another_array.flat(Infinity)

// Output:
// [1,2,3,4,5,6,7,6,7,4,5]

// console.log(real_another_array)



// =======================
// Array.isArray()
// =======================

// Checks whether the given value is an array
// Returns true or false

// console.log(Array.isArray("Hitesh"))
// false

// console.log(Array.isArray([1,2,3]))
// true



// =======================
// Array.from()
// =======================

// Converts iterable objects (like strings) into arrays

// console.log(Array.from("Hitesh"))

// Output:
// ['H','i','t','e','s','h']


// Objects are NOT iterable by default

// console.log(Array.from({ name: "Hitesh" }))

// Output:
// []

// Why?
// Because JavaScript doesn't know whether to convert
// object keys or object values into an array.

// To convert object keys:
// Object.keys(obj)

// To convert object values:
// Object.values(obj)



// =======================
// Array.of()
// =======================

// Creates a new array from individual values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

// Output:
// [100, 200, 300]


