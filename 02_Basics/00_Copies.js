// Shallow Copy : 

// Shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// As a result, when you change either the source or the copy, you may also cause the other object to change too.

// In shallow copy when we copy an array and reference it to another array, then change in original array will reflect in copied array.

// Example: 

const arr1 = [1, 2, 3, [4, 5, 6], 7];
const arr2 = arr1;

arr1[3][1] = 10;

console.log("Shallow Copy :")
console.log("Original Array:", arr1);
console.log("Copied Array:", arr2);
console.log("\n");

// Both arrays will show [1, 2, 3, [4, 10, 6], 7]
// Because arr2 points to the same memory location as arr1

// Methods to create Shallow Copy of an array:

// 1. Using spread operator (...)
const shallowCopy1 = [...arr1];

// 2. Using Array.from()
const shallowCopy2 = Array.from(arr1);

// 3. Using slice()
const shallowCopy3 = arr1.slice();

// 4. Using concat()
const shallowCopy4 = [].concat(arr1);

// All these methods create shallow copies
// Changes to nested arrays/objects will still affect both arrays


// Deep Copy :

// Deep Copy of an object is a copy whose properties do not share the same references (point to the same underlying values) (point to the same underlying values) as those of the source object from which the copy was made.

// As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. 

// In deep copy when we copy an array and reference it to another array, then change in original array will not reflect in copied array.
// Example:

const originalArray = [1, 2, 3, [4, 5, 6], 7];
const deepCopyArray = JSON.parse(JSON.stringify(originalArray));

originalArray[3][1] = 10;

console.log("Deep Copy :");
console.log("Original Array:", originalArray);
console.log("Deep Copy Array:", deepCopyArray);
console.log("\n");

// Original array will show [1, 2, 3, [4, 10, 6], 7]
// Deep copy array will show [1, 2, 3, [4, 5, 6], 7]
// Because deepCopyArray is completely independent of originalArray

// Methods to create Deep Copy of an array:

// 1. Using JSON.parse(JSON.stringify())
const deepCopy1 = JSON.parse(JSON.stringify(originalArray));

// 2. Using Array.map() with recursion
const deepCopy2 = (arr) => arr.map(item => Array.isArray(item) ? deepCopy2(item) : item);

// 3. Using structuredClone() (modern browsers)
const deepCopy3 = structuredClone(originalArray);