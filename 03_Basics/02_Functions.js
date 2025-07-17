// Function 

// Rest Oprator to calculate multiple numbers
function calculateCartPrice1(...num1) { 
    return num1;
}

console.log(calculateCartPrice1(200, 400, 500, 600, 700));

function calculateCartPrice2(val1, val2, ...num1) { 
    return val1 + val2 + num1;
}

console.log(calculateCartPrice2(200, 400, 500, 600, 700));

const user = {
    name: "Sudarshan",
    price: 199,
};

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and Price is ${anyObject.price}`)
};

console.log("Handle Object :")
handleObject(user);
handleObject({
    name: "Monika",
    price: 299,
});

const myArray = [200, 400, 600, 300, 100, 800];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log("Handle Array :")
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 900, 500, 100]));

