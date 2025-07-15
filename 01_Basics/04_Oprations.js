let value = 33;
let value1 = undefined;
let value2 = "";

// console.log(value);
// console.log(typeof value);

// let negValue = +value;

// console.log(negValue);
// console.log(typeof negValue);

console.log(value1, typeof value1);

console.log(value2, typeof value2);

let result = value1 * value2;

console.log(result, typeof result);


// Opration on Numaber, Strings and others :

// 33 : Number => - : Negative => -33 : Number
// 33 : Number => + : Positve => 33 : Number

// 2 : Number + 4 : Number => 6 : Number
// 2 : Number + "4" : String => "24" : String
// "2" : Number String + 4 : Number => "24" : String
// "abcd" : Non Number String + 4 : Number => "abcd4" : String
// "" : Empty String + 4 : Number => "4" : String
// "" : Empty String - 4 : Number => -4 : Number
// "" : Empty String * 4 : Number => 0 : Number
// "" : Empty String / 4 : Number => 0 : Number
// "" : Empty String % 4 : Number => 0 : Number
// "" : Empty String + NaN : Number => "NaN" : String
// "" : Empty String -*/% (other than addition opration) NaN : Number => NaN : Number

// NaN : Number +-*/% (any opration) 4 : Number => NaN : Number
// null : Object + 4 : Number => 4 : Number
// 4 : Number - null : Object => 4 : Number
// null : Object - 4 : Number => -4 : Number
// null : Object * 4 : Number => 0 : Number
// undefined : undefined + 4 : Number => NaN : Number
// true : Boolean + 4 : Number => 5 : Number
// false : Boolean + 4 : Number => 4 : Number

// undefined : undefined +-*/% (any opration) NaN : Number => NaN : Number
// undefined : undefined + "" : Empty String => "undefined" : String
// undefined : undefined +-*/% (other than addition opration) "" : Empty String => NaN : Number

