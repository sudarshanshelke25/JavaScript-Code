// For Loop :

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 5; i++) {
    const element = i;
    console.log(element);
}
console.log("\n");

// console.log(element); // not allowed { ReferenceError: element is not defined }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is Brst Number");
    }
    console.log(element);
}
console.log("\n");

for (let i = 1; i <= 10; i++) {
    console.log(`${i} Table :`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
console.log("\n");


// For loop on Array

let myArray = ["spider man", "hulk", "iron man", "thor", "loki", "black widow", "caption marvel", "caption america"]

for( let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
console.log("\n");

// Break in For Loop :

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected i == ${5}`);
        break;
    }
    console.log(`Value of i is ${i}`);  
}
console.log("\n");

// Continue in For Loop :

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected i == ${5}`);
        continue;
    }
    console.log(`Value of i is ${i}`);  
}
console.log("\n");



