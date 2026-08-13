# javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase

## why to use OOP


## Parts of OOP
- Object Literal


- Constructor function
- Prototypes
- Classes
- Instances(new, this)
// ============================================================================
// JAVASCRIPT & CLASSES
// ============================================================================


// ============================================================================
// OOP (Object-Oriented Programming)
// ============================================================================

// OOP is a programming approach where we organize code around "objects".
// Objects contain:
// 1. Properties  -> Data / characteristics
// 2. Methods     -> Functions / behavior


// ============================================================================
// OBJECT
// ============================================================================

// An object is a collection of properties and methods.

// Example:
const user = {
    name: "Sahil",          // Property
    age: 23,                // Property

    greet: function() {     // Method
        console.log("Hello!");
    }
};

// Here:
// name and age -> properties
// greet()      -> method


// Example of a built-in object method:
const str = "SAHIL";

// toLowerCase() is a method of the String object.
console.log(str.toLowerCase());

// Output:
// sahil


// ============================================================================
// WHY USE OOP?
// ============================================================================

// OOP helps us:
// 1. Organize large codebases
// 2. Reuse code
// 3. Reduce code duplication
// 4. Make code easier to maintain
// 5. Represent real-world entities as objects
// 6. Implement concepts like inheritance and polymorphism


// ============================================================================
// PARTS OF OOP IN JAVASCRIPT
// ============================================================================


// --------------------------------------------------------------------------
// 1. Object Literal
// --------------------------------------------------------------------------

// The simplest way to create an object directly.

const student = {
    name: "Sahil",
    age: 23,

    study: function() {
        console.log("Studying JavaScript");
    }
};


// --------------------------------------------------------------------------
// 2. Constructor Function
// --------------------------------------------------------------------------

// Constructor functions are used to create multiple objects
// with the same structure.

// Convention:
// Constructor function names usually start with a capital letter.

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

// "new" creates a new object using the constructor function.

const userOne = new User("Sahil", 8, true);
const userTwo = new User("Rahul", 5, false);


// --------------------------------------------------------------------------
// 3. Prototypes
// --------------------------------------------------------------------------

// JavaScript uses prototypes for inheritance and code sharing.

// Methods can be added to the prototype so that they are shared
// by all objects created using the constructor.

User.prototype.greeting = function() {
    console.log(`Hello ${this.username}`);
};

userOne.greeting();
// Hello Sahil


// --------------------------------------------------------------------------
// 4. Classes
// --------------------------------------------------------------------------

// Classes provide a cleaner syntax for creating objects
// and working with inheritance.

// A class can contain:
// - Constructor
// - Properties
// - Methods

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const personOne = new Person("Sahil", 23);

personOne.greet();
// Hello, my name is Sahil


// --------------------------------------------------------------------------
// 5. Instances
// --------------------------------------------------------------------------

// An instance is an object created from a class or constructor function.

// "new" is used to create an instance.

const personTwo = new Person("Rahul", 22);

// personTwo is an instance of the Person class.


// "this" refers to the current object/instance.

// Inside the constructor:
// this.name = name
//
// means:
// current object's name = value passed to constructor


// ============================================================================
// 4 PILLARS OF OOP
// ============================================================================


// --------------------------------------------------------------------------
// 1. ABSTRACTION
// --------------------------------------------------------------------------

// Abstraction means:
// Hiding unnecessary/internal implementation details
// and exposing only what is necessary.

// Example:
// fetch() is used to make an HTTP request.

// We don't need to know all the internal implementation
// of how fetch communicates with the network.

fetch("https://example.com")
    .then(response => response.json())
    .then(data => console.log(data));


// We simply use fetch() without worrying about its internal working.


// --------------------------------------------------------------------------
// 2. ENCAPSULATION
// --------------------------------------------------------------------------

// Encapsulation means:
// Bundling data and the methods that operate on that data
// together inside a single unit/object/class.
//
// It also helps control access to the internal data.

// Example:

class BankAccount {

    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }
}

const account = new BankAccount(1000);

account.deposit(500);

console.log(account.getBalance());
// 1500


// Data (balance) and methods (deposit, getBalance)
// are bundled together inside the BankAccount class.


// --------------------------------------------------------------------------
// 3. INHERITANCE
// --------------------------------------------------------------------------

// Inheritance allows one class to acquire properties and methods
// from another class.

// "extends" is used for inheritance.

class Animal {

    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }
}

const dog = new Dog();

dog.eat();   // Inherited from Animal
dog.bark();  // Dog's own method


// Dog inherits the eat() method from Animal.


// --------------------------------------------------------------------------
// 4. POLYMORPHISM
// --------------------------------------------------------------------------

// Polymorphism means:
// "Many forms"
//
// The same method name can behave differently
// depending on the object/class.

class Animal {

    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {

    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {

    sound() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.sound();
// Dog barks

cat.sound();
// Cat meows


// Same method:
// sound()
//
// But different objects produce different behavior.
//
// This is polymorphism.

## 4 Pillars
- Abstraction : Hiding internal details eg. fetch()
- Encapsulation : 
- Inheritance
- Polymorphism

