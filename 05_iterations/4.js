// ==========================
// for...in Loop in JavaScript
// ==========================

// The for...in loop is mainly used to iterate over
// the enumerable PROPERTY KEYS of an object.

// It returns:
// ✔ Object -> Keys
// ✔ Array -> Indexes (not values)
// ❌ Map -> Doesn't work



// -------------------------
// Object Example
// -------------------------

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// "key" stores each property name.
for (const key in myObject) {

    // console.log(key)

    // Output:
    // js
    // cpp
    // rb
    // swift


    // Access value using bracket notation.
    // key is a variable, so use myObject[key]
    // NOT myObject.key
    // console.log(myObject[key])

    // Output:
    // javascript
    // c++
    // ruby
    // swift by apple


    // Template Literal
    // console.log(`${key} is shortcut for ${myObject[key]}`)

    // Output:
    // js is shortcut for javascript
    // cpp is shortcut for c++
    // rb is shortcut for ruby
    // swift is shortcut for swift by apple
}



// -------------------------
// Array Example
// -------------------------

const programming = ["js", "rb", "py", "java", "cpp"]

// for...in returns INDEXES of an array.
for (const key in programming) {

    // console.log(key)

    // Output:
    // 0
    // 1
    // 2
    // 3
    // 4


    // Use the index to access the value.
    // console.log(programming[key])

    // Output:
    // js
    // rb
    // py
    // java
    // cpp
}



// ==========================
// Map Example
// ==========================

// Maps are iterable, but they do NOT have enumerable properties.
// Therefore for...in cannot iterate over a Map.

const map = new Map()

map.set('IN', "India")
map.set('US', "America")
map.set('FR', "France")
map.set('IN', "India") // Duplicate key updates the value.

for (const key in map) {
    console.log(key)
}

// Output:
// Nothing
//
// No error.
// No output.
//
// Why?
// Because Map doesn't expose enumerable properties for for...in.



// Correct way to iterate over a Map:

for (const [key, value] of map) {
    // console.log(key, value)

    // Output:
    // IN India
    // US America
    // FR France
}