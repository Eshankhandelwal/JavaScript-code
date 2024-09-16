// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const string = "swagat" //String
const num = 123 //Number
const bool = true //Boolean
const outsideTemp = null //null, type of will show it as object 
let usermiddlename; // undefined
const id = Symbol("123") // Symbol
const anotherId = Symbol("123") // we will learn use of Symbols in react mainly
console.log(id===anotherId); // A property of Symbol is that 2 Symbols can't be same i.e. id is not equal to anotherid therfore False
const bigNumber = 3456789876543212345678n //BigInt



// Referance (Non Premitive)

// Arrays, Objects, Functions

const heros = ["shakitman", "doga", "nagraj"] // Arrays, typeof will show object

let myobj = { name: "swagat", age: 22, marride: false, ID: 4534n } // Objects, type shows object
// objects can have anything inside them primitives, as well as Arrays, Functions and objects too

//Functions can be declared in multiple ways here we will see variable method of devlaring fun
const myFunction = function(){
    console.log("hello world");
} // typeof will show function 



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Object  =>  object
//        Function  =>  function

//********************************MEMORY**************************************************

//Stack(Primitve) Heap(Non-Primitive)

let myYoutubeName = "EKGaming"

let anotherName = myYoutubeName
anotherName = "VKRoyle"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email:"abc@gmail.com",
    upi: "user@ylb"
}

let userTwo = userOne

userTwo.email = "eshan@gmail.com"

console.log(userOne.email); //eshan@gmail.com
console.log(userTwo.email); //eshan@gmail.com




