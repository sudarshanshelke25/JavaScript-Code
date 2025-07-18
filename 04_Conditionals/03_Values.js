// truthy value or falsy value :

const userEmail = "sudarshanshelke@gmail.com"; // truthy value
// const userEmail = ""; // falsy value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

// falsy values :
false, 0, -0, (BigInt), 0n, "", null, undefined, NaN

// truthy values :
"0", 'false', "false", " ", [], {}, function(){}


// Conditional Check For Array :
const userEmail1 = [];

if (userEmail1.length === 0) {
    console.log("Array is Empty.");
}

// Conditional Check For Array :
const userEmail2 = {};

if (Object.keys(userEmail2).length === 0) {
    console.log("Object is Empty.");
}
console.log("\n");

// false == 0 : true
// false =='' : true
// 0 == ''    : true

// Logical Oprator :

// Logical AND Oprator (&&)

// Logical OR Oprator (||)

// Nullish Coalesing Operator (??) : used as fall back 

let val1 = 5 ?? 10;
let val2 = null ?? 10;
let val3 = undefined ?? 10;
let val4 = null ?? 10 ?? 12;
let val5 = null ?? undefined ?? 12;


console.log("val1 :", val1);
console.log("val2 :", val2);
console.log("val3 :", val3);
console.log("val4 :", val4);
console.log("val5 :", val5);
console.log("\n");

// Terniry Oprator : ( ? : ) 

// conditon ? true : false 

const price = 100;

price <= 80 ? console.log("Price less than 80") : console.log("Price grater than 80");
