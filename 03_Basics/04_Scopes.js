// Scopes in Javascript :

// Nested Scope :

console.log("Nested Scope In Functions :");
function one() {
    const username = "sudarshan";

    function two() {
        const website = "youtube";
        console.log(username);
    }

    // console.log(website); // not allowed { ReferenceError: website is not defined }
    two(); // execute two() function
}

one(); // execute one() function

console.log("Nested Scope In Conditionals :");
if (true) {
    const username = "Shelke";
    if (username === "Shelke") {
        const website = "youtube";
        console.log(username + website);
    }
    // console.log(website); // not allowed { ReferenceError: website is not defined }
}
// console.log(username); // not allowed { ReferenceError: username is not defined }
console.log("\n");

// Notes : In genral,
// We can access entity that define inside global scope into block scope or functional scope.
// But We can not entity that define inside block scope or functional scope into global scope.

// Normal Function : Defination
function addOne(num) {
    return num + 1;
}
// Normal Function : Execution 
console.log("Normal Function : (call after defination)");
console.log("addOne(5) :", addOne(5));


// Function Expression : Defination
const addTwo = function(num) {
    return num + 2;
}

// Function Expression : Execution 
console.log("Function Expression : (call after defination)");
console.log("addTwo(5) :", addTwo(5));
console.log("\n");


// Normal Function : Execution 
console.log("Normal Function : (call before defination)");
console.log("addThree(5) :", addThree(5)); // allowed { not give error because of function  hoisting. }

// Normal Function : Defination
function addThree(num) {
    return num + 3;
}

// We can access or call normal function before its initialization or defination.
// due to function hoisting move all the function defination to top of block of function.


// Function Expression : Execution 
console.log("Function Expression : (call before defination)");
console.log("addFour(5) :", addFour(5)); // not allowed { ReferenceError: Cannot access 'addFour' before initialization }

// Function Expression : Defination
const addFour = function(num) {
    return num + 4;
}

console.log("\n");

// We can not access or call function expression before its initialization or defination.
// hoisting in function expression work different form normal function