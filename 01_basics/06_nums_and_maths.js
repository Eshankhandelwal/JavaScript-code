const score  = 400 
// console.log(score); //400

const balance = new Number(100) //[Number: 100] specifically told that it is a number
// console.log(balance);

// console.log(balance.toString().length)  //3
// console.log(balance.toFixed(2));    //100.00

// const otherNumber = 23.8966 //23.9
// const otherNumber = 123.8966 //124
// const otherNumber = 1123.8966   //1.12e+3
// console.log(otherNumber.toPrecision(3));

// const Hundreds = 10000000
// console.log(Hundreds .toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++MATH++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


