// Singleton Object : When we create Object using any Constructor then it a singleton Object.
// Singleton means it is only object of its kind.


// Create Object using Constructors : Object() :

const myObjects2 = new Object();

const mySymbol = Symbol("key");

myObjects2.name = "Sudarshan Shelke";
myObjects2["my role"] = "Full Stack Developer";
myObjects2.age = 25;
myObjects2[mySymbol] = "myKey1"
myObjects2.branch = "Computer Science";
myObjects2.location = "Nashik";
myObjects2.isloggedIn = false;

console.log("myObjects2 :", myObjects2, typeof myObjects2);
console.log("\n");

console.log("Access Value using . oprator :");
console.table([
    {key: "name", value: myObjects2.name, type: typeof myObjects2.name},
    {key: "role", value: myObjects2.myrole, type: typeof myObjects2.myrole},
    {key: "age", value: myObjects2.age, type: typeof myObjects2.age},
    {key: "mySymbol", value: myObjects2.mySymbol, type: typeof myObjects2.mySymbol},
    {key: "branch", value: myObjects2.branch, type: typeof myObjects2.branch},
    {key: "location", value: myObjects2.location, type: typeof myObjects2.location},
    {key: "isloggedIn", value: myObjects2.isloggedIn, type: typeof myObjects2.isloggedIn},
]);
console.log("\n");

console.log("Access Value using [] oprator :");
console.table([
    {key: "name", value: myObjects2["name"], type: typeof myObjects2["name"]},
    {key: "role", value: myObjects2["my role"], type: typeof myObjects2["my role"]},
    {key: "age", value: myObjects2["age"], type: typeof myObjects2["age"]},
    {key: "mySymbol", value: myObjects2[mySymbol], type: typeof myObjects2[mySymbol]},
    {key: "branch", value: myObjects2["branch"], type: typeof myObjects2["branch"]},
    {key: "location", value: myObjects2["location"], type: typeof myObjects2["location"]},
    {key: "isloggedIn", value: myObjects2["isloggedIn"], type: typeof myObjects2["isloggedIn"]},
]);
console.log("\n");

const myUser = {
    email : "suadrshanshelke123@gmail.com",
    fullname : {
        user : {
            firstname: "sudarshan",
            lastname: "shelke",
        },
        admin : {
            firstname: "Monika",
            lastname: "shelke",
        }
    }
};

console.log("myUser :", myUser, typeof myUser);
console.log("myUser.fullname :", myUser?.fullname,  "-", typeof myUser.fullname);
console.log("myUser.fullname.user :", myUser?.fullname.user,  "-", typeof myUser.fullname.user);
console.log("myUser.fullname.user :", myUser?.fullname.user.firstname,  "-", typeof myUser.fullname.firstname);
console.log("myUser.fullname.user :", myUser?.fullname.user.lastname,  "-", typeof myUser.fullname.user.lastname);
console.log("myUser.fullname.admin :", myUser?.fullname.admin,  "-", typeof myUser.fullname.admin);
console.log("myUser.fullname.admin :", myUser?.fullname.admin.firstname,  "-", typeof myUser.fullname.admin.firstname);
console.log("myUser.fullname.admin :", myUser?.fullname.admin.lastname,  "-", typeof myUser.fullname.admin.lastname);
console.log("\n");


// Objects Methods :

const object1 = {1: "a", 2: "b", 3: "c"};

const object2 = {4: "d", 5: "e", 6: "f"};

const object11 = {7: "g", 8: "h", 9: "i"};

const object22 = {7: "j", 8: "k", 9: "l"};

// combine two object 
const object3 = {object1, object2}; // not allowed two object inserted in object so create (Objects within object)

console.log("object3 = {object1, object2} :");
console.log("object1 :", object1, "-", typeof object1);
console.log("object2 :", object2, "-", typeof object2);
console.log("object3 :", object3, "-", typeof object3);
console.log("\n");

// combine two object using Object.assign() Method
const object4 = Object.assign({}, object1, object2); 

console.log("Object Assign Method :");
console.log("object4 = Object.assign({}, object1, object2) :");
console.log("object1 :", object1, "-", typeof object1);
console.log("object2 :", object2, "-", typeof object2);
console.log("object4 :", object4, "-", typeof object4);
console.log("\n");

// combine two object using spread Oprator (...) :
const object5 = {...object1, ...object2};

console.log("Spread Oprator :");
console.log("object5 = {...object1, ...object2} :");
console.log("object1 :", object1, "-", typeof object1);
console.log("object2 :", object2, "-", typeof object2);
console.log("object5 :", object5, "-", typeof object5);
console.log("\n");

console.log("myObjects2 :", myObjects2, typeof myObjects2);
console.log("\n");

console.log("Method to access keys and Values :");
console.log("myObjects2 Keys :", Object.keys(myObjects2), typeof Object.keys(myObjects2));
console.log("myObjects2 Values :", Object.values(myObjects2), typeof Object.values(myObjects2));
console.log("myObjects2 Array :", Object.entries(myObjects2), typeof Object.entries(myObjects2));
console.log("\n");

console.log("Method to access Values :");
console.log("myObjects2 hasOwnProperty name :", myObjects2.hasOwnProperty("name"), typeof myObjects2.hasOwnProperty("name"));
console.log("myObjects2 hasOwnProperty email :", myObjects2.hasOwnProperty("email"), typeof myObjects2.hasOwnProperty("email"));

