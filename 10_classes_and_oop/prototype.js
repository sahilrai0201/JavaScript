// let myName = "Sahil      "

// console.log(myName.truelength);    // undefined
// console.log(myName.trim().length);




let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sahil = function(){
    console.log(`sahil is present in all objects`);
}

Array.prototype.heySahil = function(){
    console.log(`Sahil says hello`)
}

// heroPower.sahil()
// myHeros.sahil()

myHeros.heySahil()
// heroPower.heySahil()




// INHERITENCE ---------------------->

const user = {
    name : "Justin",
    email : "baby@bieber.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.getPrototypeOf(TeachingSupport, Teacher)





let anotherUsername = "Rishabh     "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True Length is : ${this.trim().length}`)
}
anotherUsername.trueLength()
"iceTea".trueLength()