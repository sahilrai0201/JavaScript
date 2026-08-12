// Creating a Promise
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});



// Consuming a Promise
// Use .then() for success and .catch() for errors.
promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });



// Example with setTimeout
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 2000);
});

fetchData.then(data => {
  console.log(data);
});  



// Handling Errors
const login = new Promise((resolve, reject) => {
  const passwordCorrect = false;

  if (passwordCorrect) {
    resolve("Login successful");
  } else {
    reject("Invalid password");
  }
});

login
  .then(message => console.log(message))
  .catch(error => console.log(error));



// Chaining Promises
// You can chain multiple asynchronous operations.  
Promise.resolve(5)
  .then(num => num * 2)
  .then(num => num + 10)
  .then(result => console.log(result));




// finally()
// finally() runs whether the promise is fulfilled or rejected.  
fetchData
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => {
    console.log("Operation completed");
  });