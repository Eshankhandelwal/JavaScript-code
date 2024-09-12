// console.log("2" > 1)    //true
// console.log("02" > 1)   //true

// console.log(null > 0)   //false
// console.log(null == 0)  //false
// console.log(null >= 0)  //true

//the reason is that equality checks and comparisons(<,>,<=,>=) work diffrently
//comparsions convert null to a number,treating it as zero(0)
//thats why (null>=0)true and (null>0)false

// console.log(undefined > 0)   //false
// console.log(undefined == 0)  //false
// console.log(undefined >= 0)  //false

//strict equality which checks the value as well as the datatype

console.log("2" == 2);  //true
console.log("2" === 2); //false
