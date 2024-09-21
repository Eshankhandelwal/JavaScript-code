const myArr = [0,1,2,3,4,5]
const myHeros = ["IronMan","Steve Rogers"]

const myArr2 = new Array(1,2,3,4)   // creation of array using constructor

// console.log(myArr[0]);

// Array Methods

myArr.push(6)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

myArr.unshift(9)    // inserts this 9 at the starting of the array because of this each element shifts by 1 index
// console.log(myArr);

myArr.shift()       // removes the first element from the array
// console.log(myArr);

// console.log(myArr.includes(9));           //used to investigate in the array 
// console.log( typeof myArr.includes())   // and its return type is boolean

// console.log(myArr.indexOf(5));  // Tells the index of the element

const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);   //convets the array into string

//Slice and Splice
//splice removes the elements from the original array

console.log("A ", myArr);  // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log("B ", myn1);    // B  [ 1, 2 ]

const myn2 = myArr.splice(1,3)
console.log("C ", myn2);    // C  [ 1, 2, 3 ]
console.log(myArr);         // [ 0, 4, 5 ]







