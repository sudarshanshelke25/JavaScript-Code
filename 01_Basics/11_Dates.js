let myDate = new Date();

console.log("myDate :", myDate, typeof myDate);
console.log("\n");

console.log("Date in Strings Using Method:");
console.log("toString :", myDate.toString() , typeof myDate.toString());
console.log("toISOString :", myDate.toISOString() , typeof myDate.toISOString());
console.log("toUTCString :", myDate.toUTCString() , typeof myDate.toUTCString());
console.log("toLocaleString :", myDate.toLocaleString() , typeof myDate.toLocaleString());
console.log("toDateString :", myDate.toDateString() , typeof myDate.toDateString());
console.log("toLocaleDateString :", myDate.toLocaleDateString() , typeof myDate.toLocaleDateString());
console.log("toTimeString :", myDate.toTimeString() , typeof myDate.toTimeString());
console.log("toLocaleTimeString :", myDate.toLocaleTimeString() , typeof myDate.toLocaleTimeString());
console.log("toJSON :", myDate.toJSON() , typeof myDate.toJSON());
console.log("\n");

// Methods to Create New Date :
// let newDate = new Date(2023, 9, 24);
// let newDate = new Date(2023, 9, 25, 5, 3);
// let newDate = new Date("2023-10-25"); // YYYY_MM_DD
let newDate = new Date("10-25-2023"); // MM_DD_YYYY
// let newDate = new Date("25-10-2023"); // DD_MM_YYYY Invalid Formate
console.log("newDate :", newDate.toLocaleString(), typeof newDate);
console.log("newDate timestamp (ms):", newDate.getTime(), typeof newDate.getTime());


let timestamp = Date.now();
console.log("Date conversion :");
console.log("timestamp (ms):", timestamp, typeof timestamp);
console.log("timestamp (s):", Math.round(timestamp/1000), typeof timestamp);
console.log("timestamp (min):", Math.round(timestamp/(1000*60)), typeof timestamp);
console.log("timestamp (hr):", Math.round(timestamp/(1000*60*60)), typeof timestamp);
console.log("\n");

console.log("Date Specific Data :")
console.log("myDate :", myDate.toString(), typeof myDate);
console.log("myDate Time :", myDate.getTime(), typeof myDate.getTime());
console.log("myDate Day :", myDate.getDay(), typeof myDate.getDay());
console.log("myDate Date :", myDate.getDate(), typeof myDate.getDate());
console.log("myDate Month :", myDate.getMonth() + 1, typeof myDate.getMonth());
console.log("myDate Year :", myDate.getFullYear(), typeof myDate.getFullYear());
console.log(`myDate Formate DD_MM_YYYY : ${myDate.getDate()}-${myDate.getMonth() + 1}-${myDate.getFullYear()}`);
console.log("\n");

let localeDate = newDate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit",
    month:"2-digit",
    year:"numeric",
});

console.log("localeDate :", localeDate, typeof localeDate);

