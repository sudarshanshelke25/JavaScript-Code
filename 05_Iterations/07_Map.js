// Map Function / method () :

// map () function is callback function or higher order function.
// map () automatically return value by its self.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("myNums :", myNums);
console.log("\n");

console.log("Map () method  : 1 - on Array (add 10) : without {}");
const multiNums = myNums.map((num) => num + 10);
console.log("myNums :", myNums);
console.log("multiNums :", multiNums);
console.log("\n");

console.log("Map () method  : 2 - on Array (add 10) : with {}");
const multi2Nums = myNums.map((num) => {
    num + 10;
});
console.log("myNums :", myNums);
console.log("multi2Nums :", multi2Nums);
console.log("\n");

console.log("Map () method  : 3 - on Array (add 10) : with {} + explicit return");
const multi3Nums = myNums.map((num) => {
    return num + 10;
});
console.log("myNums :", myNums);
console.log("multi3Nums :", multi3Nums);
console.log("\n");

// Map Chaning

// const newNums = myNums.map().map()

// const newNums = myNums.map().filter()

console.log("Map () method  : 4 ( using Chaining )");
const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);
console.log("myNums :", myNums);
console.log("newNums :", newNums);
console.log("\n");

