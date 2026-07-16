// ==========================
// forEach() in JavaScript
// ==========================

// forEach() is an Array method.
// It executes a callback function ONCE for each array element.

// Syntax:
// array.forEach(function(currentValue, index, array) {
//      // code
// })



const coding = ["js", "ruby", "java", "python", "cpp"];



// ==========================================
// 1. forEach using Anonymous Function
// ==========================================

// The callback function runs once for every element.

coding.forEach(function (val) {

    // "val" contains the current element.

    // console.log(val);

    // Output:
    // js
    // ruby
    // java
    // python
    // cpp
});




// ==========================================
// 2. forEach using Arrow Function
// ==========================================

// Arrow functions are shorter and commonly used.

coding.forEach((item) => {

    // "item" stores each array element.

    // console.log(item);
});




// ==========================================
// 3. Passing a Function Reference
// ==========================================

// Instead of writing the function directly,
// we can define it separately.

function printMe(item) {

    // console.log(item);
}

// Notice:
// We pass ONLY the function name.
// Don't write printMe() because that would
// call the function immediately.

coding.forEach(printMe);




// ==========================================
// 4. Accessing all Callback Parameters
// ==========================================

// The callback receives THREE arguments automatically.

coding.forEach((item, index, arr) => {

    // item  -> current value
    // index -> current index
    // arr   -> original array

    // console.log(item, index, arr);

    /*
    Output:

    js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    ruby 1 [ ... ]
    java 2 [ ... ]
    python 3 [ ... ]
    cpp 4 [ ... ]
    */
});




// ==========================================
// Array of Objects
// ==========================================

const myCoding = [

    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }

];



// Loop over every object

myCoding.forEach((item) => {

    // item represents one object.

    // Access properties using dot notation.

    console.log(item.languageName);

    /*
    Output:

    javascript
    java
    python
    */
});