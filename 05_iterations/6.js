// ==========================================
// forEach() vs filter()
// ==========================================

const coding = ["js", "ruby", "java", "python", "cpp"];



// ==========================================
// forEach() does NOT return anything
// ==========================================

// Even though we return "item",
// forEach() ignores it.

const values = coding.forEach((item) => {

    // console.log(item);

    return item;
});

// console.log(values);

// Output:
//
// js
// ruby
// java
// python
// cpp
//
// undefined

// Why?
// Because forEach() always returns undefined.
// It is used only for performing an action
// (printing, updating, API calls, etc.)



// ==========================================
// filter()
// ==========================================

// filter() creates and returns a NEW ARRAY
// containing only the elements that satisfy
// the given condition.

const myNums = [1,2,3,4,5,6,7,8,9,10];



// ------------------------------------------
// Arrow function WITHOUT curly braces
// ------------------------------------------

// When there are NO curly braces,
// the expression is returned automatically.

// const newNums = myNums.filter((num) => num > 4);

// Output:
// [5,6,7,8,9,10]




// ------------------------------------------
// Arrow function WITH curly braces
// ------------------------------------------

// When using {}, you MUST write return.

// const newNums = myNums.filter((num) => {
//     return num > 4;
// });

// Same Output:
// [5,6,7,8,9,10]

// console.log(newNums);




// ==========================================
// Doing the same thing using forEach()
// ==========================================

// Since forEach() doesn't return an array,
// we manually create one.

const newNums = [];

myNums.forEach((num) => {

    if(num > 4){

        // Push matching values manually.
        newNums.push(num);

    }

});

// console.log(newNums);

// Output:
// [5,6,7,8,9,10]



// ==========================================
// Array of Objects
// ==========================================

const books = [

    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },

    {
        title: 'Book Two',
        genre: 'Non-Fiction',
        publish: 1992,
        edition: 2008
    },

    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },

    {
        title: 'Book Four',
        genre: 'Non-Fiction',
        publish: 1989,
        edition: 2010
    },

    {
        title: 'Book Five',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },

    {
        title: 'Book Six',
        genre: 'Fiction',
        publish: 1987,
        edition: 2010
    },

    {
        title: 'Book Seven',
        genre: 'History',
        publish: 1986,
        edition: 1996
    },

    {
        title: 'Book Eight',
        genre: 'Science',
        publish: 2011,
        edition: 2016
    },

    {
        title: 'Book Nine',
        genre: 'Non-Fiction',
        publish: 1981,
        edition: 1989
    }

];



// ==========================================
// Filter by Genre
// ==========================================

// No curly braces.
// Return is automatic.

let userBooks = books.filter(
    (bk) => bk.genre === "History"
);

// Output:
// Book Three
// Book Seven




// ==========================================
// Multiple Conditions
// ==========================================

// Since we use {}, we MUST write return.

userBooks = books.filter((bk) => {

    return bk.publish >= 1995 &&
           bk.genre === "History";

});

console.log(userBooks);

// Output:
//
// [
//   {
//      title: 'Book Three',
//      genre: 'History',
//      publish: 1999,
//      edition: 2007
//   }
// ]