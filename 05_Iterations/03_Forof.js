// Array Specific Loop :

// ["", "", "", ""] : Array of Strings
// [{}, {}, {}, {}] : Array of Objects

// For of Loop : 

// for (const element of object) {
    
// }

// For of Loop apply on any itratable Array or string or any other itratable things.
// For of Loop not used in Javascript Objects {}

const numbers = [1, 2, 3, 4, 5, 6];
console.log("For of Loop : 1");
for (const num of numbers) {
    console.log(num);
}
console.log("\n");

const greetings = "Hello World!";
console.log("For of Loop : 2");
for (const greet of greetings) {
    console.log(greet);
}
console.log("\n");

const heros = ["spider man", "hulk", "iron man", "thor", "loki", "black widow", "caption marvel", "caption america"];
console.log("For of Loop : 3");
for (const hero of heros) {
    console.log(hero);
}
console.log("\n");

const profile = {name: "sudarshan", age: 25, marks: 100, logged: true};
console.log("For of Loop : 4"); // not allowed { TypeError: profile is not iterable }
// for (const field of profile) {
//     console.log(field);
// }
console.log("\n");

const contries = new Map();

contries.set('IN', "India");
contries.set('USA', "United State of America");
contries.set('FR', "France");
contries.set('CA', "Canada");

console.log("Contries Map :")
console.log(contries);
console.log("\n");

console.log("For of Loop : 5");
for (const contry of contries) {
    console.log(contry);
}
console.log("\n");

console.log("For of Loop : 6");
for (const [key, value] of contries) {
    console.log(key, value);
}
console.log("\n");

console.log("For of Loop : 7");
for (const [code, contry] of contries) {
    console.log(code, contry);
}
console.log("\n");

const myObject = {
    'game1': 'NFS',
    'game2': 'COD',
    'game3': 'COC',
}

console.log("For of Loop : 8");
for (const key of Object.keys(myObject)) {
    console.log(key);
}
console.log("\n");

console.log("For of Loop : 9");
for (const value of Object.values(myObject)) {
    console.log(value);
}
console.log("\n");








