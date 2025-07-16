const num1 = -45678.56890;
const num2 = 34366.76890;
const num3 = 45367.43790;

console.log("num1 :", num1 , typeof num1);
console.log("num2 :", num1 , typeof num2);
console.log("num3 :", num1 , typeof num3);
console.log("\n");

console.log("Absulate");
console.log("num1 :", Math.abs(num1) , typeof num1);
console.log("num2 :", Math.abs(num2) , typeof num2);
console.log("num3 :", Math.abs(num3) , typeof num3);
console.log("\n");

console.log("Round");
console.log("num1 :", Math.round(num1) , typeof num1);
console.log("num2 :", Math.round(num2) , typeof num2);
console.log("num3 :", Math.round(num3) , typeof num3);
console.log("\n");

console.log("ceil");
console.log("num1 :", Math.ceil(num1) , typeof num1);
console.log("num2 :", Math.ceil(num2) , typeof num2);
console.log("num3 :", Math.ceil(num3) , typeof num3);
console.log("\n");

console.log("floor");
console.log("num1 :", Math.floor(num1) , typeof num1);
console.log("num2 :", Math.floor(num2) , typeof num2);
console.log("num3 :", Math.floor(num3) , typeof num3);
console.log("\n");

console.log("Math Values :");
console.log("PI Value :", Math.PI , typeof Math.PI);
console.log("Euler's number :", Math.E , typeof Math.E);

console.log("Math.LN2:", Math.LN2 , typeof Math.LN2);
console.log("Math.LN10:", Math.LN10 , typeof Math.LN10);
console.log("Math.LOG2E :", Math.LOG2E , typeof Math.LOG2E);
console.log("Math.LOG10E :", Math.LOG10E , typeof Math.LOG10E);

console.log("Math.SQRT1_2 :", Math.SQRT1_2 , typeof Math.SQRT1_2);
console.log("Math.SQRT2 :", Math.SQRT2 , typeof Math.SQRT2);
console.log("\n");

console.log("Square Root:");
console.log("num1 :", Math.sqrt(num1) , typeof num1);
console.log("num2 :", Math.sqrt(num2) , typeof num2);
console.log("num3 :", Math.sqrt(num3) , typeof num3);
console.log("\n");

console.log("Cubic Root:");
console.log("num1 :", Math.cbrt(num1) , typeof num1);
console.log("num2 :", Math.cbrt(num2) , typeof num2);
console.log("num3 :", Math.cbrt(num3) , typeof num3);
console.log("\n");

console.log("Power:");
console.log("num1 pow-2:", Math.pow(num1, 2) , typeof num1);
console.log("num2 pow-3:", Math.pow(num2, 3) , typeof num2);
console.log("num3 pow-4:", Math.pow(num3, 4) , typeof num3);
console.log("\n");

console.log("Randum Number:");
console.log("num1 :", Math.random()*100 , typeof num1);
console.log("num2 :", Math.random()*10 , typeof num2);
console.log("num3 :", Math.random() , typeof num3);
console.log("\n");

console.log("Randum Number:");
console.log("num1 :", (Math.random()*100)+1 , typeof num1);
console.log("num2 :", (Math.random()*10)+1 , typeof num2);
console.log("num3 :", (Math.random()) , typeof num3);
console.log("\n");

console.log("Random Number Formula :");
const min = 10;
const max = 20;

const randomNumber = (Math.random() * (max - min + 1)) + min ;
const randomInt = Math.floor((Math.random() * (max - min + 1)) + min);

console.log("Float Random num :", randomNumber, typeof randomNumber);
console.log("Integer Random num :", randomInt, typeof randomInt);





