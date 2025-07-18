// If Statements :

// if (condition) {
    
// }

// If-else Statements :

// if (condition) {
    
// } else {
    
// }

// Normal If Statement :

if (true) {
    console.log("True Statement"); // code execute
}
console.log("Statement"); // code execute
console.log("\n");


if (false) {
    console.log("False Statement"); // code does not execute
}
console.log("Statement"); // code execute
console.log("\n");

const isLoggedIn = true;

if (isLoggedIn) {
    console.log("User is Logged In");
}
console.log("User is not Logged In");
console.log("\n");


// Conditional Oprators :

// < : less than
// > : grater than
// <= : less than equal to
// >= : grater than equal to
// == : equal to
// != : not equal to
// === : triple equal to (strict equal to)
// !== : triple not equal to (strict not equal to)

console.log("If Statements :")
const temperature1 = 41;

if (temperature1 < 50) {
    console.log("temperature less than 50");
}
console.log("temperature is 41");
console.log("\n");

console.log("If-Else Statements :")
const temperature2 = 56;
if (temperature2 < 50) {
    console.log("temperature less than 50");
} else {
    console.log("temperature grater than 50");
}
console.log("temperature is 56");
console.log("\n");


const score = 200;

console.log("If Statements : const (block scope)");
if (score > 100) {
    const power1 = "fly"; // block scope
    console.log(`User Power: ${power1}`)
}
// console.log(`User Power: ${power1}`) // not allowed { ReferenceError: power1 is not defined }
console.log("\n");

console.log("If Statements : let (block scope)");
if (score > 100) {
    let power2 = "Dance"; // block scope
    console.log(`User Power: ${power2}`)
}
// console.log(`User Power: ${power2}`) // not allowed { ReferenceError: power2 is not defined }
console.log("\n");

console.log("If Statements : var (global scope)");
if (score > 100) {
    var power3 = "Invisible"; // global scope
    console.log(`User Power: ${power3}`)
}
console.log(`User Power: ${power3}`) // allowed 
console.log("\n");

const balance = 200;

// Shorthand If Statement :
if (balance < 500) console.log("test1"), console.log("test2");


// Nested If-else Statements :
if (balance < 500) {
    console.log("balance less than 500");
} else if (balance < 700) {
    console.log("balance less than 700");
} else if (balance < 900) {
    console.log("balance less than 900");
} else {
    console.log("balance less than 1200");
}
console.log("\n");


// Real life examples :

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course.");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In done.");
}

console.log("\n");
