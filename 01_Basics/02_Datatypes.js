// "use strict"; // treat all JS code as newer version of Javascript (ECMAscript).

const nam = "sudarshan shelke";

// alert(name); // not allowed in node js but allowed in browser {ReferenceError: alert is not defined}

console.log(nam);

// console.log(3 + 3) console.log(name) // not allowed to write two console log statement on same line without semicollen (;) {SyntaxError: Unexpected identifier 'console'}
// let num1 = 2 var num2 = 4 // not allowed to write two keywords or two statement on same line without semicollen (;) {SyntaxError: Unexpected token 'var'}

console.log(3 
    + 3);  // code readability should be high do not use extra space or extra indentation

console.log(nam);


let name = "sudarshan shelke"; // String                    
let age = 25;                  // Number => 2 to power 53
let isLoggedIn = false         // Boolean
let bigNumber = 455566555455555555555555555555555555555555555555555555555; // Bigint
let profile = null;            // null => standalone value 
let marks;                     // undefined
let symbal = "sdghldlsmlmf";                    // symbol => unique
const subjects = {1: "math",   // object
    2: "science", 3:"english"}

console.table([name, age, isLoggedIn, bigNumber, profile, marks, symbal, subjects]);
console.table([typeof(name), typeof(age), typeof(isLoggedIn), typeof(bigNumber), typeof(profile), typeof(marks), typeof(symbal), typeof(subjects)]);


