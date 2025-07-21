// Array Specific Loop :

// Highier order function : 

// Higher-order functions in JavaScript are functions that either:
// Take one or more functions as arguments.
// These are often referred to as "callback functions" when passed as arguments.
// Return a function as their result.
// This allows for creating functions dynamically or creating function factories.

// For each Loop : 

// array.forEach(element => {
    
// });

// For each is highter order function.
// Callback function does not have name.

const codding = ["javascript", "python", "java", "typescript", "ruby", "swift"];
console.log("codding :", codding);
console.log("\n");

// Using Normal Function :
console.log("For each Loop : 1 - ( on Arrays using Normal Function )");
codding.forEach( function (lang) {
    console.log(lang);
} );
console.log("\n");

// Using Arrow Function :
console.log("For each Loop : 2 - ( on Arrays using Arrow Function )");
codding.forEach((lang) => {
    console.log(lang);
} );
console.log("\n");

function printMe(value) {
    console.log(value);
}

// Using pass on Function as varible:
console.log("For each Loop : 3 - ( on Arrays using pass on Function as varible)");
codding.forEach(printMe);
console.log("\n");

// Note: pass reference of function in the for each method not call a function or execute a function in for each method.

console.log("For each Loop : 4 - ( Describe for each function )");
codding.forEach((item, index, arr) => {
    console.log(item);
    console.log(index);
    console.log(arr);
});
console.log("\n");

// Note: For each () function not only has one parameter access.
// For each () function has (item, index and arr) parameter access.
// but other two parameter are optional.

// Array of Objects :
const myCoding = [
    {
        langName: "Javascript",
        langExtension: "js",
        languagesFileName: "Javascript.js"
    },
    {
        langName: "Java",
        langExtension: "java",
        languagesFileName: "Java.java",
    },
    {
        langName: "Python",
        langExtension: "py",
        languagesFileName: "Python.py",
    },
    {
        langName: "Ruby",
        langExtension: "rb",
        languagesFileName: "Ruby.rb",
    }
];

console.log("myCoding :", myCoding);
console.log("\n");

console.log("For each Loop : 5 - ( on Array of Object )");
myCoding.forEach((lang) => {
    console.log(lang.langName, ":", lang.langExtension);
    // console.log(`${lang.langName}.${lang.langExtension}`);
    console.log(lang.languagesFileName);
});
console.log("\n");


