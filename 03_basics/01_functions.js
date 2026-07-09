function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("H")
    console.log("I")
    console.log("L")
}
// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 6)
// addTwoNumbers(3, "6")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)


function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3, 6)
// console.log("Result : ", result)


function loginUserMessage(username = "Sam"){
    if(username === undefined){
        console.log("Please enter a username!")
        return
    }
    return `${username} just logged in!`
}
// console.log(loginUserMessage())
// console.log(loginUserMessage("Sahil Rai"))


// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200, 400, 500))

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username : "Sahil",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username : "Sam",
    price : 399
})


const myNewArray = [200, 400, 600, 800]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 1000, 1200]))