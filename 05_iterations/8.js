// ==========================================
// reduce() in JavaScript
// ==========================================

// reduce() is used to reduce an entire array
// into a SINGLE VALUE.
//
// That single value can be:
// ✔ Sum
// ✔ Product
// ✔ Average
// ✔ Maximum
// ✔ Object
// ✔ Array
// ✔ String
//
// Syntax:
//
// array.reduce((accumulator, currentValue) => {
//      return updatedAccumulator;
// }, initialValue);



const myNums = [1, 2, 3];



// ==========================================
// Using Normal Function
// ==========================================

// "acc" = Accumulator
// "currVal" = Current Element
//
// Initial value of accumulator = 0

// const myTotal = myNums.reduce(function (acc, currVal) {

//     console.log(
//         `Accumulator : ${acc} and Current Value : ${currVal}`
//     );

//     // Return the updated accumulator.
//     return acc + currVal;

// }, 0);



// ==========================================
// Using Arrow Function
// ==========================================

// Same logic written in one line.

const myTotal = myNums.reduce(
    (acc, currVal) => acc + currVal,
    0
);

// console.log(myTotal);

// Output:
// 6




// ==========================================
// Real-Life Example
// Shopping Cart
// ==========================================

const shoppingCart = [

    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "py course",
        price: 999
    },

    {
        itemName: "mobile dev course",
        price: 5999
    },

    {
        itemName: "data science course",
        price: 12999
    }

];



// We want the TOTAL PRICE of all courses.

const priceToPay = shoppingCart.reduce(

    (acc, item) => {

        // Add current item's price
        // to the accumulator.

        return acc + item.price;

    },

    // Initial total
    0

);

console.log(priceToPay);

// Output:
// 22996