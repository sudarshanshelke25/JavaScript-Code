const accountId = 251099;
let accountEmail = "sudarshanshelke25@gmail.com";
var accountPassword = "password123";
accountCity = "Pune";
let accountState;

// accountId = 2 // Not allowed {TypeError: Assignment to constant variable.}
// accountEmail = "newemail@gmail.com" // allowed {we can reassign to the variable create with let keyword.}
// accountPassword = "pass12345" // allowed {we can reassign to the variable create with var keyword.}
// accountCity = "Nashik" // allowed {we can reassign to the variable create without keywords.}

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
// console.log(accountState);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// var have functional scope 
// let have block scope


/*
Prefer to not use var
because of issue in block scope and functional scope.
*/