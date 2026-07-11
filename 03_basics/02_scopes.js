// let a = 10
// const b = 20
// var c = 30
// console.log(a)
// console.log(b)
// console.log(c)


if(true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(c)


let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Inner : ", a)
}
console.log("Outer : ", a)