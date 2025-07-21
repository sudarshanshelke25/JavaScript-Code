// Reduce Function / method () :

// Reduce () function is callback function or higher order function.
// Reduce () automatically return value by its self.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("myNums :", myNums);
console.log("\n");

// Normal Function :
console.log("Reduce () method  : 1 - on Array (calcualate total)) : Normal Function");
const myTotal = myNums.reduce(function (acc, curr){
    console.log(`acc:${acc} & curr:${curr}`);
    return acc + curr
}, 0);
console.log("myNums :", myNums);
console.log("my Total :", myTotal);
console.log("\n");

// Arrow Function :
console.log("Reduce () method  : 2 - on Array (calcualate total)) : Arrow Function");
const myTotal2 = myNums.reduce((acc, curr) => {
    console.log(`acc:${acc} & curr:${curr}`);
    return acc + curr
}, 3);
console.log("myNums :", myNums);
console.log("my Total2 :", myTotal2);
console.log("\n");

console.log("Reduce () method  : 3 - on Array (calcualate total)) : without {}");
const myTotal3 = myNums.reduce((acc, curr) => acc+curr, 0);
console.log("myNums :", myNums);
console.log("my Total3 :", myTotal3);
console.log("\n");

console.log("Reduce () method  : 4 - on Array (calcualate total)) : with {}");
const myTotal4 = myNums.reduce((acc, curr) => {acc+curr},0);
console.log("myNums :", myNums);
console.log("my Total4 :", myTotal4);
console.log("\n");

console.log("Reduce () method  : 5 - on Array (calcualate total)) : with {} + explicit return");
const myTotal5 = myNums.reduce((acc, curr) => {
    return acc+curr
},);
console.log("myNums :", myNums);
console.log("my Total5 :", myTotal5);
console.log("\n");

// Shopping cart example : 

const shoppingCart = [
  {
    itemName: "Wireless Mouse",
    price: 799,
    discount: "10%"
  },
  {
    itemName: "Bluetooth Headphones",
    price: 1999,
    discount: "15%"
  },
  {
    itemName: "USB-C Charger",
    price: 499,
    discount: "5%"
  },
  {
    itemName: "Laptop Stand",
    price: 1299,
    discount: "20%"
  },
  {
    itemName: "Notebook",
    price: 199,
    discount: "0%"
  },
  {
    itemName: "Pen Pack (10 pcs)",
    price: 99,
    discount: "10%"
  },
  {
    itemName: "Desk Organizer",
    price: 699,
    discount: "12%"
  },
  {
    itemName: "Smartphone Case",
    price: 349,
    discount: "8%"
  },
  {
    itemName: "LED Desk Lamp",
    price: 999,
    discount: "18%"
  },
  {
    itemName: "Backpack",
    price: 1499,
    discount: "25%"
  }
];

console.log("shoppingCart :", shoppingCart);
console.log("\n");

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log("total Price :", totalPrice);
console.log("\n");