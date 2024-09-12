// let score = "33abc"
// let score = null
let score = undefined

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log( valueInNumber)

//"33"->33
//"33abc"->NaN(Not a Number)
//true->1 , false->0

let isLoggedIn = 1
let BooleanisLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanisLoggedIn)

//1->true , 0->false
//""-> false
//"eshan"->true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)   //33
// console.log(typeof stringNumber)    //string

//*****************************Operations***************************************//

// console.log(2 + 3)
// console.log(2 - 3)
// console.log(2 * 3)
// console.log(2 / 3)
// console.log(2 ** 3)
// console.log(2 % 3)

let str1 = "Hello"
let str2 = " Eshan"

let str3 = str1 + str2
// console.log(str3);

//left to right
// console.log("1" + 2);       //12
// console.log(1 + "2");       //12
// console.log("1" + 2 + 2);   //122
// console.log(1 + 2 + "2");   //32

//not a good practice
// console.log(+true);         //1
// console.log(+"");           //0

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);



