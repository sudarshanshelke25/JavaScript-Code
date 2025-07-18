// Arrow Function : () => {}

const user = {
    username: "sudarshan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`);
    }

}
console.log(user);
console.log("\n");

console.log(user.welcomeMessage);
console.log(user.welcomeMessage());
console.log("\n");


// whenever we want to refer current context, we use "this" keyword in front of proprties or methods. 
// eg. this.username

user.welcomeMessage();
user.username = "Monika"
user.welcomeMessage();
console.log("\n");

const user2 = {
    username: "sudarshan",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }

}
console.log("This Context within Object : for sudarshan");
user2.welcomeMessage();
user2.username = "Rahul"
console.log("This Context within Object : for rahul");
user2.welcomeMessage();
console.log("This Context within Global :");
console.log(this);
console.log("\n");

// global context (this) within node environment refer to empty object.
// global context (this) within Browser refer to a window object.

// top most global object within browser is window object. 
// eg. window()
// top most global object within standalone js engine is empty object
// eg. {}

// Nornal Function :
function myFunction() {
    let username = "shelke";
    console.log(this.username); // not allowed { undefined }
    console.log(this);

}

console.log("This Context within Normal Function : myFunction");
myFunction();
console.log("\n");

// Function Expression :
const youFunction = function () {
    let username = "shelke";
    console.log(this.username); // not allowed { undefined }
    console.log(this);
}

console.log("This Context within Function Expression : yourFunction");
youFunction();
console.log("\n");

// Arrow Function :
const weFunction = () => {
    let username = "shelke";
    console.log(this.username); 
    console.log(this);
}

console.log("This Context within Arrow Function : weFunction");
weFunction();
console.log("\n");

// Explicit Return Arrow Function :


const addtwo = (num1, num2) => {
    return num1 + num2;
}

console.log("Arrow Function : Explicit Return Function")
console.log("addtwo(3, 5) :", addtwo(3, 5));
console.log("\n");

// Implicit Return Arrow Function :
// const addThree = (num1, num2, num3) => num1 + num2 + num3 ; 
const addThree = (num1, num2, num3) => ( num1 + num2 + num3 ) ;
// not allowed { SyntaxError: Unexpected token 'return' }

console.log("Arrow Function : Implicit Return Function");
console.log("addThree(3, 5, 6) :", addThree(3, 5, 6));
console.log("\n");

// Return Object throw Implicit Return Function :
console.log("Return Object throw Implicit Return Function :");

const sayName1 = () => {firstname: "Sudarshan"};
console.log("sayName1 :", sayName1() , "- without parentheses ()");

const sayName2 = () => ({firstname: "Sudarshan"});
console.log("sayName2 :", sayName2(), "- with parentheses ()");
