// Example to demonstrate the Call Stack in JavaScript

function firstFunction() {
    console.log("Entering firstFunction");
    secondFunction();
    console.log("Exiting firstFunction");
}

function secondFunction() {
    console.log("Entering secondFunction");
    thirdFunction();
    console.log("Exiting secondFunction");
}

function thirdFunction() {
    console.log("Entering thirdFunction");
    // Simulate some work
    console.log("Exiting thirdFunction");
}

// Start the call stack
console.log("Starting Call Stack Example");
firstFunction();
console.log("Ending Call Stack Example");


// falsy values in JavaScript
console.log("Demonstrating Falsy Values in JavaScript");

const falsyValues = [false, 0, "", null, undefined, NaN];

falsyValues.forEach(value => {
    console.log(`Value: ${value}, Is Falsy: ${!value}`);
});



//truthy values in JavaScript
console.log("Demonstrating Truthy Values in JavaScript");

const truthyValues = [ true, 1 , "non-empty string" , " " , "false" , [] , {} , function(){} ];

truthyValues.forEach(value => {
    console.log(`Value: ${value}, Is Truthy: ${!!value}`);
});


// Nullish coalescing operator - ( type safty null and undefined)
console.log("Demonstrating Nullish Coalescing Operator");

const value1 = null;
const value2 = undefined;
const value3 = 0;
const value4 = "Hello";

console.log(value1 ?? "Default Value"); // Output: "Default Value"
console.log(value2 ?? "Default Value"); // Output: "Default Value"
console.log(value3 ?? "Default Value"); // Output: 0
console.log(value4 ?? "Default Value"); // Output: "Hello"


// Demonstrating Ternary Operator
console.log("Demonstrating Ternary Operator");

const age = 20;
const canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(`Age: ${age}, Can Vote: ${canVote}`);

const number = -5;
const numberType = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(`Number: ${number}, Type: ${numberType}`);