// Scopes in Javascript :
console.log("\n");

// let  a1 = 100;
// const b1 = 200;
// var c1 = 300;

console.log("inside of Global scope :");
console.log("outside of Block scope (before variable declaration) :");
// console.log("a1 :", a1); // not allowed { ReferenceError: a1 is not defined } 
// console.log("b1 :", b1); // not allowed { ReferenceError: b1 is not defined } 
console.log("c1 :", c1); // allowed getting value outside of scope { 30 }

// all aboue output due to scope of Condional Statement or Block Scope.

// {} - Scope of programming language

if (true) {
    let  a1 = 10;
    const b1 = 20;
    var c1 = 30;

    console.log("inside of Block scope :");
    console.log("a1 :", a1);
    console.log("b1 :", b1);
    console.log("c1 :", c1);
}

console.log("inside of Global scope :");
console.log("outside of Block scope (after variable declaration) :");
// console.log("a1 :", a1); // not allowed { ReferenceError: a1 is not defined } 
// console.log("b1 :", b1); // not allowed { ReferenceError: b1 is not defined } 
console.log("c1 :", c1); // allowed getting value outside of scope { 30 } 
console.log("\n");


let  a2 = 100;
const b2 = 200;
var c2 = 300;

console.log("inside of Global scope :");
console.log("outside of Block scope (before variable declaration) :");
console.log("a2 :", a2); //  allowed getting value from Global scope { 100 } 
console.log("b2 :", b2); //  allowed getting value from Global scope { 200 } 
console.log("c2 :", c2); //  allowed getting value from Global scope { 300 } 

// {} - Scope of programming language

if (true) {
    let  a2 = 10;
    const b2 = 20;
    var c2 = 30;

    console.log("inside of Block scope :");
    console.log("a2 :", a2);
    console.log("b2 :", b2);
    console.log("c2 :", c2);
}

console.log("inside of Global scope :");
console.log("outside of Block scope (after variable declaration) :");
console.log("a2 :", a2); // allowed getting value from Global scope { 100 } 
console.log("b2 :", b2); //  allowed getting value from Global scope { 200 } 
console.log("c2 :", c2); //  allowed getting value from Block scope { 30 }

// let and const have block scope, global scope and function scope.
// var have global scope and function scope but does not have block scope.