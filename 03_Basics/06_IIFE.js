// Immediately Invoked Function Expression (IIFE) : ()()

// Invoked or called function immediately after writen down function or function defination. are called as "IIFE".

// Need of IIFE :
// Some time we need to execute our function or file as soon as our appliction run or execute.
// Some time some variable declared in the scope, we do not want that global variable to cause any problem inside that function or we do not need to pollution from the global scope.


// Normal Function :
function dbFunction1() {
    console.log("DB1 Connected !");
}
dbFunction1();

// function dbFunction2() {
//     console.log("DB Connected !");
// }(); // not allowed { SyntaxError: Unexpected token ')' }

// IIFE Function : Normal Function ( Named IIFE )
(function dbFunction2() {
    console.log("DB3 Connected !");
})(); 

// IIFE Function : Arrow Function
(() => {
    console.log("DB4 Connected !");
})(); 

// Some time IIFE has been invoked immediately after function defination but it does not know where to actually stop the function, in this situation inside JS, we ahve to end that line , a semicolon is required.

// IIFE Function : Normal Function with variable ( Named IIFE ) 
(function dbFunction2(db) {
    console.log(`DB5 ${db} Connected !`);
})("MongoDB"); 

// IIFE Function : Arrow Function with variable
((db) => {
    console.log(`DB6 ${db} Connected !`);
})("MySQL"); 