// let score = 33; // Number
// let score = "33"; // String => Number
// let score = "33abcs"; // String => NaN (Number)
// let score = ""; // string =>  0 (Number)
// let score = null; // null => 0 : zero (Number)
// let score = undefined; // undefined =>  NaN (Number)
// let score = NaN; // undefined =>  NaN (Number)
// let score = true; // Boolean =>  1 (Number)
let score = false; // Boolean =>  0 (Number)



console.log(score);
console.log(typeof score);
console.log(typeof(score));

// let valueInNumber = Number(score); //NaN
// let valueInNumber = Boolean(score); //NaN
let valueInNumber = String(score); //NaN

console.log(valueInNumber);
console.log(typeof valueInNumber);
console.log(typeof(valueInNumber));

// Number Conversion Using Number() :

// "33" : Number string => 33 : Number
// "33abc" : Not Number String => NaN : Number
// "" : Empty String => 0 : Number
// null : Object => 0 : Number
// undefined : Undefined => NaN : Number
// true : Boolean => 1 : Number
// false : Boolean => 0 : Number

// Boolean Conversion Using Boolean() :

// "33" : Number => true : Boolean
// "33" : Number string => true : Boolean
// "33abc" : Not Number String => true : Boolean
// "" : Empty String => false : Boolean
// null : Object => false : Boolean
// undefined : Undefined => false : Boolean
// 1 : Number => true : Boolean 
// 0 : Number => false : Boolean 

// String Conversion Using String() :

// 33 : Number => "33" : Number string 
// null : Object => "null" : string 
// undefined : Undefined => "undefined" : string
// NaN : Number => "NaN" : string 
// true : Boolean => "true" : string
// false : Boolean => "false" : string
