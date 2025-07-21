// Array Specific Loop :

const codding = ["javascript", "python", "java", "typescript", "ruby", "swift"];

console.log("codding :", codding);
console.log("\n");

console.log("For each Loop : (on coding Array)");
const values =codding.forEach((item) => {
    console.log(item);
    return item;
} );
console.log("values of Coding  :", values)
console.log("\n");

// Note: For each mothod does not return any value.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myValues = [];
console.log("Filter using For each Loop : (on coding Array) : using condition");
myNumbers.forEach((item) => {
    if (item > 4) {
        myValues.push(item);
    }
} );
console.log("filter values of Numbers  :", myValues)
console.log("\n");

// Filter function / method () :

// filter method also a higher order function (take callback as input)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("myNums :", myNums);
console.log("\n");

console.log("filter () method  : 1 - on Array (num > 4) : without {}");
const filterNums = myNums.filter((num) => num > 4);
console.log("myNums :", myNums);
console.log("filterNums :", filterNums);
console.log("\n");

console.log("filter () method  : 2 - on Array (num > 6) : with {} ");
const filter2Nums = myNums.filter((num) => {
    num > 6
});
console.log("myNums :", myNums);
console.log("filter2Nums :", filter2Nums);
console.log("\n");

// Note : we use curely breasess that we have to use explicte return.

console.log("filter () method  : 3 - on Array (num > 6) : with {} + explicte retrun ");
const filter3Nums = myNums.filter((num) => {
    return num > 6
});
console.log("myNums :", myNums);
console.log("filter3Nums :", filter3Nums);
console.log("\n");


const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: 1960,
    edition: "1st"
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish: 1949,
    edition: "1st"
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    publish: 1925,
    edition: "3rd"
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: "1st"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "Non-fiction",
    publish: 2011,
    edition: "1st"
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: 1813,
    edition: "2nd"
  },
  {
    title: "The Catcher in the Rye",
    genre: "Literary Fiction",
    publish: 1951,
    edition: "1st"
  },
  {
    title: "Atomic Habits",
    genre: "Self-help",
    publish: 2018,
    edition: "1st"
  },
  {
    title: "Dune",
    genre: "Science Fiction",
    publish: 1965,
    edition: "1st"
  },
  {
    title: "The Alchemist",
    genre: "Adventure",
    publish: 1988,
    edition: "1st"
  }
];


// const userBooks = books.filter( (bk) => bk.genre === "Adventure");

// const userBooks = books.filter( (bk) => bk.publish >= 2000);

const userBooks = books.filter( (bk) => {
    return bk.publish >= 1955 && bk.genre === 'Fiction'
});

console.log("userBooks : ", userBooks)