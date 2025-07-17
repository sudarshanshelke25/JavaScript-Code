// Destructuring of Objects 

const course = {
    courseName: "Javascript",
    coursePrice: "1999",
    courseInstructor: "Sudarshan Shelke",
};

console.log("course Object :", course, "-", typeof course);
console.log("\n");

const {courseName, coursePrice, courseInstructor} = course;

console.log("Object Destructuring :")
console.log("courseName :", courseName, "-", typeof courseName);
console.log("coursePrice :", coursePrice, "-", typeof coursePrice);
console.log("courseInstructor :", courseInstructor, "-", typeof courseInstructor);
console.log("\n");

// We can change name of field of the objects
const {courseName : name, coursePrice: price, courseInstructor : instructor} = course;

console.log("Object Destructuring 2 :")
console.log("Name :", name, "-", typeof name);
console.log("Price :", price, "-", typeof price);
console.log("Instructor :", instructor, "-", typeof instructor);
console.log("\n");

// Destructuring in React Component

// without Destructuring
const Navbar1 = (props) => { 
    console.log(props.company);
}

// with Destructuring
const Navbar2 = ({company}) => {  
    console.log(company);
}

Navbar1(company = "sudarshan");
Navbar2(company = "sudarshan");

// API : Application Programming Interface

// Normal Object 
const userObject = {
    name: "Javascript",
    price: "1999",
    instructor: "Sudarshan Shelke",
}

// JSON Object 
const userJSON = {
    "name": "Javascript",
    "price": "1999",
    "instructor": "Sudarshan Shelke",
}