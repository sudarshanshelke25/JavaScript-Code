const myArray = [1, 3, 4, 5, 6];

const marvelHeros = ["Ironman", "Spiderman", "Antman", "Thor", "Hulk", "Captain America"];

const dcHeros = ["Superman", "Batman", "Flash", "Aquaman", "Supergirl","Wanderwomen"];

console.log("myArray :", myArray, typeof myArray, myArray.length);
console.log("marvelHeros :", marvelHeros, typeof marvelHeros, marvelHeros.length);
console.log("dcHeros :", dcHeros, typeof dcHeros, dcHeros.length);
console.log("\n");

const newMarvel = ["Ironman", "Spiderman", "Antman", "Thor", "Hulk", "Captain America"];

newMarvel.push(dcHeros); // bad method : array inserted inside array

console.log("Push Method :")
console.log("newMarvel :", newMarvel, typeof newMarvel, newMarvel.length);
console.log("dcHeros :", dcHeros, typeof dcHeros, dcHeros.length);
console.log("\n");

const allHeros = marvelHeros.concat(dcHeros); 
console.log("Concat Method :")
console.log("marvelHeros :", marvelHeros, typeof marvelHeros, marvelHeros.length);
console.log("dcHeros :", dcHeros, typeof dcHeros, dcHeros.length);
console.log("allHeros :", allHeros, typeof allHeros, allHeros.length);
console.log("\n");

const heros = [...marvelHeros, ...dcHeros];

console.log("Sprad Oprator Method :");
console.log("marvelHeros :", marvelHeros, typeof marvelHeros, marvelHeros.length);
console.log("dcHeros :", dcHeros, typeof dcHeros, dcHeros.length);
console.log("allHeros :", allHeros, typeof allHeros, allHeros.length);
console.log("\n");

const flatHeros = newMarvel.flat(1); // give depth to flat() method

console.log("Flat Method :");
console.log("newMarvel :", newMarvel, typeof newMarvel, newMarvel.length);
console.log("flatHeros :", flatHeros, typeof flatHeros, flatHeros.length);
console.log("\n");

console.log("Array.isArray Method :");
console.log("flatHeros :", flatHeros, typeof flatHeros, flatHeros.length);
console.log("isArray :", Array.isArray(flatHeros), typeof Array.isArray(flatHeros), Array.isArray(flatHeros).length);
console.log("\n");

console.log("Array.from Method :");
console.log("flatHeros :", flatHeros, typeof flatHeros, flatHeros.length);
console.log("isArray :", Array.from(flatHeros), typeof Array.from(flatHeros), Array.from(flatHeros).length);
console.log("\n");

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

let scoreArray = Array.of(score1, score2, score3, score4);

console.log("of Method :");
console.log("score1 :", score1, typeof score1, score1.length);
console.log("score2 :", score2, typeof score2, score2.length);
console.log("score3 :", score3, typeof score3, score3.length);
console.log("scoreArray :", scoreArray, typeof scoreArray, scoreArray.length);
console.log("\n");
