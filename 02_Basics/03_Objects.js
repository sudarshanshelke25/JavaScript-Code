// Objects :

// Create Object using Sting literals : { } Curly Bracess :

const mySymbol = Symbol("key");

const myObjects1 = {
    name:"Sudarshan Shelke", 
    "my role":"Full Stack Developer", 
    age: 25, 
    [mySymbol]: "myKey1",
    branch: "Computer Science",
    location: "Nashik",
    isloggedIn: false,
};

// In javascript Function treats as variables.

console.log("myObjects1 :", myObjects1, typeof myObjects1);
console.log("\n");

console.log("Access Value using . oprator :");
console.table([
    {key: "name", value: myObjects1.name, type: typeof myObjects1.name},
    {key: "role", value: myObjects1.myrole, type: typeof myObjects1.myrole},
    {key: "age", value: myObjects1.age, type: typeof myObjects1.age},
    {key: "mySymbol", value: myObjects1.mySymbol, type: typeof myObjects1.mySymbol},
    {key: "branch", value: myObjects1.branch, type: typeof myObjects1.branch},
    {key: "location", value: myObjects1.location, type: typeof myObjects1.location},
    {key: "isloggedIn", value: myObjects1.isloggedIn, type: typeof myObjects1.isloggedIn},
]);
console.log("\n");


// When we create object "key with space" or "key as a Symbol" we can not access using traditional . oprator so in that case we need [] oprator. 
// eg. "my role", [mySymbol], etc.

console.log("Access Value using [] oprator :");
console.table([
    {key: "name", value: myObjects1["name"], type: typeof myObjects1["name"]},
    {key: "role", value: myObjects1["my role"], type: typeof myObjects1["my role"]},
    {key: "age", value: myObjects1["age"], type: typeof myObjects1["age"]},
    {key: "mySymbol", value: myObjects1[mySymbol], type: typeof myObjects1[mySymbol]},
    {key: "branch", value: myObjects1["branch"], type: typeof myObjects1["branch"]},
    {key: "location", value: myObjects1["location"], type: typeof myObjects1["location"]},
    {key: "isloggedIn", value: myObjects1["isloggedIn"], type: typeof myObjects1["isloggedIn"]},
]);
console.log("\n");


myObjects1.name = "Navnath Shelke";

console.log("myObject1 After change Name :");
console.table([
    {key: "name", value: myObjects1["name"], type: typeof myObjects1["name"]},
    {key: "role", value: myObjects1["my role"], type: typeof myObjects1["my role"]},
    {key: "age", value: myObjects1["age"], type: typeof myObjects1["age"]},
    {key: "mySymbol", value: myObjects1[mySymbol], type: typeof myObjects1[mySymbol]},
    {key: "branch", value: myObjects1["branch"], type: typeof myObjects1["branch"]},
    {key: "location", value: myObjects1["location"], type: typeof myObjects1["location"]},
    {key: "isloggedIn", value: myObjects1["isloggedIn"], type: typeof myObjects1["isloggedIn"]},
]);
console.log("\n");


// Object.freeze(myObjects1); // after object freeze we can not change objects keys values.
myObjects1.name = "Sudarshan Shelke";

console.log("myObject1 After Freeze :");
console.log("myObject1 After change Name :");
console.table([
    {key: "name", value: myObjects1["name"], type: typeof myObjects1["name"]},
    {key: "role", value: myObjects1["my role"], type: typeof myObjects1["my role"]},
    {key: "age", value: myObjects1["age"], type: typeof myObjects1["age"]},
    {key: "mySymbol", value: myObjects1[mySymbol], type: typeof myObjects1[mySymbol]},
    {key: "branch", value: myObjects1["branch"], type: typeof myObjects1["branch"]},
    {key: "location", value: myObjects1["location"], type: typeof myObjects1["location"]},
    {key: "isloggedIn", value: myObjects1["isloggedIn"], type: typeof myObjects1["isloggedIn"]},
]);
console.log("\n");


// Adding Function to Object :
myObjects1.greeting = function() {
    console.log("Hello User, Happy Coding.");
}

console.log("myObject1 After Adding Function greeting:");
console.table([
    {key: "greeting", value: myObjects1.greeting, type: typeof myObjects1.greeting},
    {key: "greeting()", value: myObjects1.greeting(), type: typeof myObjects1.greeting()},
    {key: "greeting", value: myObjects1["greeting"], type: typeof myObjects1["greeting"]},
    {key: "greeting()", value: myObjects1["greeting()"], type: typeof myObjects1["greeting()"]},
]);

console.log(myObjects1.greeting); // function Reference
console.log(myObjects1.greeting()); // function execution
console.log("\n");

myObjects1.greeting2 = function() {
    console.log(`Hello ${this.name}, Happy Coding.`);
    return null;
}

console.log("myObject1 After Adding Function greeting2:");
console.table([
    {key: "greeting2", value: myObjects1.greeting2, type: typeof myObjects1.greeting2},
    {key: "greeting2()", value: myObjects1.greeting2(), type: typeof myObjects1.greeting2()},
    {key: "greeting2", value: myObjects1["greeting2"], type: typeof myObjects1["greeting2"]},
    {key: "greeting2()", value: myObjects1["greeting2()"], type: typeof myObjects1["greeting2()"]},
]);

console.log(myObjects1.greeting2); // function Reference
console.log(myObjects1.greeting2()); // function execution
console.log("\n");




