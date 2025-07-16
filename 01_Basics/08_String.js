// String Data Type:

let firstName = "Sudarshan";
let lastName = "Shelke";

let fullName = firstName + lastName;


console.log(firstName[0]);
console.log(firstName.__proto__);
console.log(firstName.length);

console.table([
    {title:"First Name : ", value: firstName},
    {title:"Last Name  : ", value: lastName},
    {title:"Full Name  : ", value: fullName},
]);

console.log(`My frist name is ${firstName}, last name is ${lastName} and my full name is ${fullName}`);

// Create String using String() object :
const collegeName = new String("D.Y. Patil School of Engineering and Technology");
const copyCollege = new String(collegeName);

console.table([
    {title: "College Name : ", value: collegeName},
    {title: "Copy College : ", value: copyCollege},
]);

// String Methods :

console.log("First Alphabet : ", collegeName[0]);
console.log("Proto Type : ", collegeName.__proto__);
console.log(collegeName.length);
console.log("uppercase : ", collegeName.toUpperCase());
console.log("uppercase : ", collegeName.toLowerCase());
console.log("padEnd : ", collegeName.padEnd(5, "Y"));
console.log("padStart : ", collegeName.padStart(5, "Y"));
console.log("character at : ", collegeName.charAt(2));
console.log("character code at : ", collegeName.charCodeAt(2));
console.log("code point at : ", collegeName.codePointAt(2));
console.log("at : ", collegeName.at(-2)); // allowed negative indexing
console.log("index of : ", collegeName.indexOf("t"));
console.log("\n");

const newCollege = collegeName.substring(0, 10); // last index value not include

const sliceCollege = collegeName.slice(0, 10); // last index value not include

const rsliceCollege = collegeName.slice(-20, 40);

console.log("college Name : ", collegeName, ", length : ", collegeName.length);
console.log("new College : ", newCollege, ", length : ", newCollege.length);
console.log("slice College : ", sliceCollege, ", length : ", sliceCollege.length);
console.log("Revese slice College : ", rsliceCollege, ", length : ", rsliceCollege.length);
console.log("\n");

const email = "  sudarshanshelke25@gmail.com      ";
const password = "    englnlvn jnlfnlsnD jnwfljn  ";

const trimEmail = email.trim();
const trimPassword = password.trim();

const firstEmail = email.trimStart();
const lastEmail = email.trimEnd();

console.log("normal :", email, "trim :", trimEmail , " length : ", trimEmail.length);
console.log("normal :", email, "trim :", firstEmail, " length : ", firstEmail.length);
console.log("normal :", email, "trim :", lastEmail, " length : ", lastEmail.length);
console.log("normal :", password, "trim :", trimPassword, " length : ", trimPassword.length);
console.log("\n");

const url = "https://sudarshanshelke.com/sudarshan%20shelke";

const replaceUrl = url.replace('%20','-');

console.log("URL :", url, "length :", url.length);
console.log("Replace URL :", replaceUrl, "length :", replaceUrl.length);
console.log("\n");

console.log("URL Include :", url.includes('sudarshan'));
// console.log(url[0]="H");
console.log("URL :", url, "length :", url.length);

const concatUrl = url.concat(replaceUrl);
console.log("Concat URL :", concatUrl, "length :", concatUrl.length);

// Note :

// All string methods return a new value.
// They do not change the original string.

