// Primative Data Type Or Call By Value
// Non Primative Data Type Or Call By Refrence


// Primative Data Type :

// 7 Primative Data type 
// Primative Data Type are Call by Value : that means whenever you copy them from one place to another, the orignal data not given to you as a reference in the memory. they are copied and given to you separately. whatever changes you make to them, they are changed in the copy.


// String : group of alphabets or words value 
const score = "abcd";
const string = "123glmlkm";

// Number : Numiracal values    
const percentage = 100;
const values = 100.3;

// Boolean : Yes or No (true, false)  
const isLogin = true;
const isSignup = false;

// null : empty value
const temp = null;
const humadity = null;

// undefined : value not decided yet
const  valued = undefined;
let role ;

// Symbol : it make value unique
const userId = Symbol('#1234');
const taskId = Symbol('TSK001');

// BigInt : big value which is not cover in number or scientific value
const bigNum = BigInt(3455661545985548n);
const bigValue = BigInt(3455661545985548n);

console.table([{ value : score, type : typeof score}, 
    { value :string, type :typeof string}, 
    { value :percentage, type :typeof percentage}, 
    { value :values, type :typeof values}, 
    { value :isLogin, type :typeof isLogin}, 
    { value :isSignup, type :typeof isSignup}, 
    { value :humadity, type :typeof humadity}, 
    { value :temp, type :typeof temp}, 
    { value : valued, type :typeof  valued}, 
    { value :role, type :typeof role}, 
    { value :userId, type :typeof userId}, 
    { value :taskId, type :typeof taskId}, 
    { value :bigNum, type :typeof bigNum}, 
    { value :bigValue, type :typeof bigValue}
]);


// Non Primative Data Type :
// 
// Non Primative Data Type are Call by reference : that why they also called as reference Data Type. all these value are those whose reference can directly allocated to you in the memory.

// Array : Collection of similar or different Data Types
const myHeros = ["ironman", "captainAmerica", "spiderman", "antman", ]

// Objects : Collection data into Key value Pair
let myProfile = {
    name: "sudarshan",
    age: 25,
    interest: "computer"
}

// Functions : block of code that uses again and again
const mySummary = function(myProfile) {
    console.log(myProfile.name);
    console.log(myProfile.age);
    console.log(myProfile.interest);
}

console.table([{ value : myHeros, type : typeof myHeros}, 
    { value :myProfile, type :typeof myProfile}, 
    { value :mySummary, type :typeof mySummary}, 
    { value :typeof(mySummary), type :typeof typeof(mySummary)}, 
]);

// JavaScript is Dynamically Type Language or Statically Type Language ?
// JavaScript is Dyanmically type Language.

// Statically Type Language : you have define the type of variable before declaration. that increases litel bit of safety

// Dynamically Type Language : You does not required to define type of variable while declaration. it automatically define data type or we also can change it by define different values.