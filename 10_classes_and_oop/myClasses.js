// ES6 ------------------->

// class user {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai", "chai@google.com", "123")

// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())



// Behind the scene -------------------------------------------->

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toLowerCase()}`
}

const tea = new User("Tea", "tea@fb.com", "456")

console.log(tea.encryptPassword())
console.log(tea.changeUsername());