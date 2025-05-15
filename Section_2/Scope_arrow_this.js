//Global and Local Scope in Javascipt
// Global variable
let globalVar = "I am a global variable";

function localScopeExample() {
    // Local variable
    let localVar = "I am a local variable";
    console.log(localVar); // Accessible here
    console.log(globalVar); // Accessible here
}

localScopeExample();

console.log(globalVar); // Accessible here
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined


//Arrow Functions and the 'this' Keyword
const arrowFunctionExample = () => {
    console.log("Arrow function 'this':", this);
};

function regularFunctionExample() {
    console.log("Regular function 'this':", this);
}

const obj = {
    methodWithArrow: arrowFunctionExample,
    methodWithRegular: regularFunctionExample,
};

arrowFunctionExample(); // 'this' refers to the global object (or undefined in strict mode)
regularFunctionExample(); // 'this' refers to the global object (or undefined in strict mode)

obj.methodWithArrow(); // 'this' still refers to the global object (or undefined in strict mode)
obj.methodWithRegular(); // 'this' refers to the obj


// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("This is an IIFE example");
    let iifeVar = "I am inside an IIFE";
    console.log(iifeVar);
})();

// console.log(iifeVar); // Uncaught ReferenceError: iifeVar is not defined