const score = 100;

const balance = new Number(10000.4569);

console.log("score :", score, typeof score, score.length);
console.log("balance :", balance, typeof balance, balance.length);

const string = balance.toString();

console.log("string Number :", string, typeof string, string.length);

const fixed = balance.toFixed(2);

console.log("fixed Number :", fixed, typeof fixed, fixed.length);

const other = 124.5785970870;

const precision = other.toPrecision(5);
const fixed2 = other.toFixed(5);

console.log("precision Number :", precision, typeof precision, precision.length);
console.log("fixed Number :", fixed2, typeof fixed2, fixed2.length);
console.log("\n");

const hundreds = 10000.00012;

const local = hundreds.toLocaleString();
const localIn = hundreds.toLocaleString('en-IN');
const float = parseFloat(hundreds);
const int = parseInt(hundreds);

console.log("Local Number :", local, typeof local, local.length);
console.log("Local IN Number :", localIn, typeof localIn, localIn.length);
console.log("Float Number :", float, typeof float, float.length);
console.log("Int Number :", int, typeof int , int.length);
console.log("\n");

const max = Number.MAX_VALUE;
const min = Number.MIN_VALUE;
const nan = Number.NaN;
const negInfinity = Number.NEGATIVE_INFINITY;
const posInfinity = Number.POSITIVE_INFINITY;
const epsilon = Number.EPSILON;


console.log("Max Number :" , max, typeof max, max.length);
console.log("Min Number :" , min, typeof min, min.length);
console.log("NaN Number :" , nan, typeof nan, nan.length);
console.log("negInfinity :" , negInfinity, typeof negInfinity, negInfinity.length);
console.log("posInfinity :" , posInfinity, typeof posInfinity, posInfinity.length);
console.log("epsilon Number :" , epsilon, typeof epsilon, epsilon.length);
console.log("\n");

const finite = Number.isFinite(hundreds);
const integer = Number.isInteger(hundreds);
const isnan = Number.isNaN(hundreds);
const safe = Number.isSafeInteger(hundreds);

console.log("Is finite :" , hundreds,  finite, typeof finite, finite.length);
console.log("Is integer :" , hundreds, integer, typeof integer, integer.length);
console.log("Is NaN :" , hundreds, isnan, typeof isnan, isnan.length);
console.log("Is SafeInteger :" , hundreds, safe, typeof safe, safe.length);
console.log("\n");

const expo = hundreds.toExponential(2);
const valueof = hundreds.valueOf();

console.log("Exponential :" , hundreds, expo, typeof expo, expo.length);
console.log("value of :" , hundreds, valueof, typeof valueof, valueof.length);

// Note :

// All Number methods return new value.
// They Do not changes the orignal number