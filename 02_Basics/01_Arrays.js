// Arrays :

// Create an Array Using Square Brckets :
const myArray = [1, 3, 4, 5, 6];

const marvelHeros = ["Ironman", "Spiderman", "Antman", "Thor", "Hulk", "Captain America"];

const dcHeros = ["Superman", "Batman", "Flash", "Aquaman", "Supergirl","Wanderwomen"];

console.log("myArray :", myArray, typeof myArray, myArray.length);
console.log("marvelHeros :", marvelHeros, typeof marvelHeros, marvelHeros.length);
console.log("dcHeros :", dcHeros, typeof dcHeros, dcHeros.length);
console.log("\n");

// Create an Array Using Array () Object :

const myArray1 = new Array(1, 3, 4, 5, 6);

const marvelHeros1 = new Array("Ironman", "Spiderman", "Antman", "Thor", "Hulk", "Captain America");

const dcHeros1 = new Array("Superman", "Batman", "Flash", "Aquaman", "Supergirl","Wanderwomen");

console.log("myArray1 :", myArray1, typeof myArray1, myArray1.length);
console.log("marvelHeros1 :", marvelHeros, typeof marvelHeros, marvelHeros.length);
console.log("dcHeros1 :", dcHeros1, typeof dcHeros1, dcHeros1.length);
console.log("\n");

// Array should written within square brackets [].
// Array is collection of same or different types of data.
// Array elements will be same or different data types. Primative or Non Primative or combination of both.
// Array in Javascript are resizable. 
// Array in Javascript are zero base indexing. 
// Array in Javascript create shallow copies while coppying an array.

// Array Methods :

myArray.push(7);
myArray.push(8); // Add value to array at last
console.log("myArray Push :", myArray, typeof myArray, myArray.length);
myArray.pop(); // Remove value form last of array
console.log("myArray Pop :", myArray, typeof myArray, myArray.length);
console.log("\n");

myArray.unshift(0); // Add value to array at start
console.log("myArray shift :", myArray, typeof myArray, myArray.length);
myArray.shift(); // Remove value form start of array
console.log("myArray unshift :", myArray, typeof myArray, myArray.length);
console.log("\n");

console.log("myArray includes(9) :", myArray, myArray.includes(9), typeof myArray.includes(9), myArray.includes(9).length);
console.log("myArray includes(5) :", myArray, myArray.includes(5), typeof myArray.includes(5), myArray.includes(5).length);
console.log("\n");

console.log("myArray indexOf(9) :", myArray, myArray.indexOf(9), typeof myArray.indexOf(9), myArray.indexOf(9).length);
console.log("myArray indexOf(5) :", myArray, myArray.indexOf(5), typeof myArray.indexOf(5), myArray.indexOf(5).length);
console.log("\n");

const newArray = myArray.join();
console.log("myArray before join :", myArray, typeof myArray, myArray.length);
console.log("myArray after join :", newArray, typeof newArray, newArray.length);
console.log("\n");

const sliceArray = myArray.slice(1, 3); // last index not inclueded. 
// nothing change in orignal Array. (Orignal Array remain as it is)
console.log("myArray before slice :", myArray, typeof myArray, myArray.length);
console.log("sliceArray :", sliceArray, typeof sliceArray, sliceArray.length);
console.log("myArray after slice :", myArray, typeof myArray, myArray.length);
console.log("\n");

const spliceArray = myArray.splice(1, 3); // last index inclueded
// Reflect changes in orignal Array. (remove splice portion form orignal Array)
console.log("myArray before splice :", myArray, typeof myArray, myArray.length);
console.log("spliceArray :", spliceArray, typeof spliceArray, spliceArray.length);
console.log("myArray after splice :", myArray, typeof myArray, myArray.length);
console.log("\n"); 