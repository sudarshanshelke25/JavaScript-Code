// Javascript Execution Context :

// you give any Code to Javascript.

// Global Exection Context (GCE) created.

// Whaterver Global Exection Context (GCE) it is referred to this variable

// Every Javascript Run Environment have different Global Exection Context (GCE)

// Function Exection Context (FCE) created.


// Types of Exection Context : Notes

// Global Exection Context (GCE) 
// Function Exection Context (FCE) 
// Eval Exection Context (ECE) 

// Javascript Program Run into Two Phases :

// Creation Phase : (also called Memory Phase or Memory Creation Phase)
// In Creation phase only allocation of memory for the varibale that are created within the code or program. 
// code or program are not executed in Creation Phase.

// Execution Phase :
// In Execution Phase execute our code or program, perform various opration to execute code.

{
    let val1 = 10;
    let val2 = 5;

    function addNum(num1, num2){
        let total = num1 + num2;
        return total;
    };
    let result1 =addNum(val1, val2);
    let result2 =addNum(10, 2);
}


// G: Create Global Execution Context:

// G:1. Creation Phase :
// val1 = undefined
// val 2 = undefined
// addNum = function addNum(num1, num2){
//              let total = num1 + num2;
//              return total;
//          };
// result1 = undefined
// result2 = undefined

// G:2. Execution Phase :
// val1 = 10
// val2 = 5
// addNum(val1, val2); 
// L: Go to Local Execution Context:


// // L : Create Local execution context :
// // for addNum(val1, val2))

// // L:1. Creation Phase :
// // num1 = undefined
// // num2 = undefined
// // total = undefined

// // L:2. Execution Phase :
// // num1 = 10
// // num2 = 5
// // total = 15 (num1 + num2)
// // return "total" to Global execution context 


// G: Back to Global Execution Context:
// result1 = 15
// addNum(10, 2); 
// L: Go to Local Execution Context:


// // L : Create Local execution context :
// // for addNum(10, 2))

// // L:1. Creation Phase :
// // num1 = undefined
// // num2 = undefined
// // total = undefined

// // L:2. Execution Phase :
// // num1 = 10
// // num2 = 2
// // total = 12 (num1 + num2)
// // return "total" to Global execution context 


// G: Back to Global Execution Context:
// result2 = 12








