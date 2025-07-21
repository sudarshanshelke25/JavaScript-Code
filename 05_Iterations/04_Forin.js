// Array Specific Loop :

// For In Loop :

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// For in Loop not used in Javascript Map {'IN' => 'India',}

const languages = {
    js: "javascript",
    ts: "typeScript",
    cpp: "C++",
    rb: "ruby",
    py: "python",
};
console.log("languages :", languages);
console.log("\n");

console.log("For in Loop : 1 - (key of Objects)");
for (const lang in languages) {
    console.log(lang);
}
console.log("\n");

console.log("For in Loop : 2 - (value of Object by key)");
for (const lang in languages) {
    console.log(languages[lang]);
}
console.log("\n");

console.log("For in Loop : 3 - (key : value of Object)");
for (const lang in languages) {
    console.log(lang, " : ", languages[lang]);
}
console.log("\n");

const programming = ["js", "ts", "rb", "py", "cpp",];
console.log("Programming :", programming);
console.log("\n");

console.log("For in Loop : 4 - (index of Array)");
for (const lang in programming) {
    console.log(lang);
}
console.log("\n");

console.log("For in Loop : 5 - (values of Array by index)");
for (const lang in programming) {
    console.log(programming[lang]);
}
console.log("\n");

const contries = new Map();

contries.set('IN', "India");
contries.set('USA', "United State of America");
contries.set('FR', "France");
contries.set('CA', "Canada");

console.log("Contries Map :")
console.log(contries);
console.log("\n");

console.log("For in Loop : 6 - (maps)");
for (const contry in contries) {
    console.log(contry);
}
console.log("For in Loop not apply on Map")
console.log("\n");



