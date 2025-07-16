// Stack Memory : call by value
// Primative Data Type : Uses Stack Memory

let myName = "Sudarshan Shelke";

let copyName = myName;

copyName = "Monika Shelke";

console.log(myName);
console.log(copyName);
console.log("\n");

// whenever you store the data in stack memory then it passes actual copy of data to another varibale. if we make changes in new variable then it only chages the copy data not the original one.

// You are create variable or Store Primative Data in Stack Memory, if you make another variable using Original value then data store in stack memory create seprate copy of that actual or original data and asign to another variable.

// If make any changes in copy variable  then it only chages the value of copy variable not the actual or orignal variable.


// Heap Memory : call by reference
// Non Primative Data Type : Uses Heap Memory

let myUser = {
    email: "sudarshanshelke25@gmail.com",
    upi: "7098765423@ybl",
};

let copyUser = myUser;

copyUser.email = "shelkesudarshan25@gmail.com";

console.log(myUser.email);
console.log(copyUser.email);
console.log("\n");

// You are create object or non Primative Data in Heap Memory, if you make another object using orignal value then data store in heap memory create anther reference of that actual or original data and asign to another object.

// if you make any changes in copy object then it reflect to  both of the data copy Object as well as original object because it only reference of original data.