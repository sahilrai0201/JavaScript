// =====================================
// Dates in JavaScript
// =====================================

// Creates a Date object containing the current
// date and time according to your system.

let myDate = new Date()


// Prints the complete Date object.
// Output (depends on current date and time):
// 2026-07-06T18:30:45.123Z

// console.log(myDate)


// -------------------------------------
// toString()
// -------------------------------------
// Converts the Date object into a readable string.

// Example:
// Mon Jul 06 2026 23:59:45 GMT+0530 (India Standard Time)

// console.log(myDate.toString())



// -------------------------------------
// toDateString()
// -------------------------------------
// Displays only the date part.

// Example:
// Mon Jul 06 2026

// console.log(myDate.toDateString())



// -------------------------------------
// toLocaleString()
// -------------------------------------
// Displays date and time according to the user's locale.

// Example (India):
// 6/7/2026, 11:59:45 pm

// console.log(myDate.toLocaleString())



// -------------------------------------
// typeof
// -------------------------------------
// Although Date is an object,
// typeof returns "object".

// console.log(typeof myDate)



// =====================================
// Creating Custom Dates
// =====================================

// Months in JavaScript start from 0.
//
// January = 0
// February = 1
// March = 2
// ...
// December = 11

// Creates:
// 23 January 2023

// let myCreatedDate = new Date(2023, 0, 23)



// Creates:
// 23 January 2023, 5:03 AM

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)



// Creating a date using ISO format.
//
// YYYY-MM-DD
//
// This format is recommended because
// it avoids confusion between different locales.

// let myCreatedDate = new Date("2023-01-14")



// Creating a date using US format.
//
// MM-DD-YYYY

let myCreatedDate = new Date("01-14-2023")



// Displays the created date according to locale.

// Example:
// 14/1/2023, 12:00:00 am

console.log(myCreatedDate.toLocaleString())



// =====================================
// TimeStamp
// =====================================

// Date.now() returns the current timestamp
// in milliseconds since
// January 1, 1970 (Unix Epoch).

let myTimeStamp = Date.now()

// Example:
// 1783369200000

// console.log(myTimeStamp)



// getTime() also returns the timestamp
// of a specific Date object.

// console.log(myCreatedDate.getTime())



// Convert milliseconds to seconds.

// Date.now()
//      ↓
// milliseconds
//
// Divide by 1000
//
// Math.floor() removes decimal values.

// console.log(Math.floor(Date.now() / 1000))



// =====================================
// Getting Individual Parts of Date
// =====================================

let newDate = new Date()

// Prints current date and time.

console.log(newDate)



// -------------------------------------
// getMonth()
// -------------------------------------
// Returns the month.
//
// IMPORTANT:
// Months start from 0.
//
// January = 0
// February = 1
// ...
// December = 11
//
// That's why we add +1.

console.log(newDate.getMonth() + 1)



// -------------------------------------
// getDay()
// -------------------------------------
// Returns the day of the week.
//
// Sunday = 0
// Monday = 1
// Tuesday = 2
// Wednesday = 3
// Thursday = 4
// Friday = 5
// Saturday = 6

console.log(newDate.getDay())



// =====================================
// Template Literals
// =====================================

// You can combine date values inside strings.

// Example:
//
// `${newDate.getDay()} and the time`
//
// Output:
// "1 and the time"



// =====================================
// Formatting Date using toLocaleString()
// =====================================

// You can customize the appearance of the date.
//
// Here,
// weekday: "long"
// displays the full weekday name.
//
// Possible values:
// "long"   -> Monday
// "short"  -> Mon
// "narrow" -> M

newDate.toLocaleString('default', {
    weekday: "long"
})

// Since nothing is being printed,
// this line produces no visible output.
//
// To see the result, use:

// console.log(
//     newDate.toLocaleString('default', {
//         weekday: "long"
//     })
// )

// Output:
// Monday