// ============================================================================
// PROMISE 1
// ============================================================================

// Creating a Promise
const promiseOne = new Promise(function(resolve, reject) {

    // This is where we perform an asynchronous task.
    // Examples:
    // - Database calls
    // - Cryptography
    // - Network/API calls
    // - File operations

    setTimeout(function() {

        // This function executes after 1 second.

        // Calling resolve() means:
        // "The asynchronous operation was successful."
        resolve();

    }, 1000);

});


// .then() is executed when the Promise is successfully resolved.
promiseOne.then(function() {

    console.log("Promise Consumed");

});


// ============================================================================
// PROMISE 2
// ============================================================================

// We don't always have to store a Promise inside a variable.
// We can directly create a Promise and consume it using .then().

new Promise(function(resolve, reject) {

    setTimeout(function() {

        console.log("Async task 2!");

        // Mark the Promise as successfully completed.
        resolve();

    }, 1000);

})
.then(function() {

    // This runs after resolve() is called.
    console.log("Async 2 resolved");

});


// ============================================================================
// PROMISE 3
// ============================================================================

const promiseThree = new Promise(function(resolve, reject) {

    setTimeout(function() {

        // resolve() can also send data to the .then() handler.

        resolve({
            username: "sahilrai",
            email: "sahil@yt.com"
        });

    }, 1000);

});


// The object passed to resolve()
// becomes the argument of the .then() callback.

promiseThree.then(function(user) {

    console.log(user);

    // Output:
    // {
    //     username: "sahilrai",
    //     email: "sahil@yt.com"
    // }

});


// ============================================================================
// PROMISE 4
// ============================================================================

const promiseFour = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let error = true;

        // If there is NO error:
        if (!error) {

            // Promise is resolved successfully.
            resolve({
                username: "sahilrai",
                password: "123"
            });

        }

        // If there IS an error:
        else {

            // Promise is rejected.
            reject("ERROR : Something went wrong");

        }

    }, 1000);

});


// -------------------------
// Promise chaining
// -------------------------

promiseFour

    // .then() executes if the Promise is resolved.
    .then((user) => {

        console.log(user);

        // We return username from this .then().
        //
        // The returned value is passed to the
        // next .then() in the chain.

        return user.username;

    })

    // Receives the value returned by the previous .then().
    .then((username) => {

        console.log(username);

    })

    // .catch() executes if any Promise in the chain
    // is rejected or an error occurs.
    .catch(function(error) {

        console.log(error);

    })

    // .finally() executes regardless of whether
    // the Promise is resolved or rejected.
    //
    // .finally(() => {
    //     console.log("The promise is either resolved or rejected");
    // });


// ============================================================================
// PROMISE 5
// ASYNC / AWAIT
// ============================================================================

const promiseFive = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let error = true;

        if (!error) {

            // Successfully resolve the Promise.
            resolve({
                username: "javascript",
                password: "123"
            });

        }
        else {

            // Reject the Promise because an error occurred.
            reject("ERROR : Something went wrong");

        }

    }, 1000);

});


// ============================================================================
// Consuming Promise using async/await
// ============================================================================

async function consumePromiseFive() {

    try {

        // await pauses this async function until
        // promiseFive is either resolved or rejected.

        const response = await promiseFive;

        // If the Promise is resolved,
        // response contains the value passed to resolve().

        console.log(response);

    }

    catch(error) {

        // If the Promise is rejected,
        // the error is caught here.

        console.log(error);

    }

}


// Calling the async function.
consumePromiseFive();


// ============================================================================
// FETCH API WITH ASYNC/AWAIT
// ============================================================================

// Another way of writing the same concept:
//
// async function getAllUsers() {
//
//     try {
//
//         // fetch() sends an HTTP request to the API.
//         //
//         // fetch() itself returns a Promise.
//
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );
//
//
//         // response.json() also returns a Promise.
//
//         // await waits until the JSON data is extracted.
//
//         const data = await response.json();
//
//
//         console.log(data);
//
//     }
//
//     catch(error) {
//
//         console.log("E : ", error);
//
//     }
//
// }
//
//
// // Calling the function
// getAllUsers();


// ============================================================================
// FETCH API WITH .then() / .catch()
// ============================================================================

// fetch() returns a Promise.
//
// First .then():
// Receives the HTTP response.
//
// response.json() returns another Promise.
//
// Second .then():
// Receives the actual JavaScript data.
//
// .catch():
// Handles errors.

fetch("https://jsonplaceholder.typicode.com/users")

    .then((response) => {

        // response contains the HTTP response.

        // We need to convert the response body
        // into JSON.

        // response.json() returns a Promise,
        // so we return it to the next .then().

        return response.json();

    })

    .then((data) => {

        // data contains the actual array of users.

        console.log(data);

    })

    .catch((error) => {

        // Handles errors that occur in the Promise chain.

        console.log(error);

    });