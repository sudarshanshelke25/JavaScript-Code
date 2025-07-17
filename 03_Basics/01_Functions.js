// Functions :

// console.log("S");
// console.log("U");
// console.log("D");
// console.log("A");
// console.log("R");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("N");

// Function Defination :
function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}
// console.log("\n");

// Function Reference :
sayMyName

// Function Execution :
// sayMyName();
// console.log("\n");


// Add Two Number
function addTwoNumber1(number1, number2) {
    console.log(number1 + number2);
}


console.log("Function without Arguments :   ");
addTwoNumber1();

console.log("Function with Arguments : 4, 5");
addTwoNumber1(4, 5);

console.log("Function with less Arguments : 4 ");
addTwoNumber1(4);

console.log("Function with more Arguments : 4, 5, 6");
addTwoNumber1(4, 5, 6);

function addTwoNumber2(number1, number2) {
    let result = number1 + number2;
    return result;
}

const result2 = addTwoNumber2(6, 7);

console.log("Addition 6, 7 :")
console.log("Result2 :", result2);


function addTwoNumber3(number1, number2) {
    return number1 + number2;
}


const result3 = addTwoNumber2(7, 8);

console.log("Addition 7, 8 :")
console.log("Result3 :", result3);
console.log("\n");

// Values that takes as input during function defination are called as parameters.
// Values that passes into function while call a function are called as arguments.
// statement after return statement in function are never executed.


function loginMessage1(username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return;
    }
    return `"${username}" logged In sucessfully!`;
}


console.log("Print Function loginMessage1 :")
console.log(loginMessage1("Sudarshan Shelke"));
console.log(loginMessage1(""));
console.log(loginMessage1());
console.log("\n");

function loginMessage2(username) {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `"${username}" logged In sucessfully!`;
}

console.log("Print Function loginMessage2 :")
console.log(loginMessage2("Sudarshan Shelke"));
console.log(loginMessage2(""));
console.log(loginMessage2());
console.log("\n");

function loginMessage3(username = "Monika Shelke") {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `"${username}" logged In sucessfully!`;
}

console.log("Print Function loginMessage3 :")
console.log(loginMessage3("Sudarshan Shelke"));
console.log(loginMessage3(""));
console.log(loginMessage3());
console.log("\n");
// Memory Management :