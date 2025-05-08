// JavaScript Data Types: Primitive vs Non-Primitive

// 1. Primitive Data Types
// These are immutable and stored by value.

// a) Number
let age = 25; // Example of a number
let pi = 3.14; // Example of a floating-point number

// b) String
let name = "John Doe"; // Example of a string

// c) Boolean
let isStudent = true; // Example of a boolean

// d) Undefined
let uninitialized; // Variable declared but not assigned a value
console.log(uninitialized); // Output: undefined

// e) Null
let emptyValue = null; // Represents an intentional absence of value

// f) Symbol (ES6+)
let uniqueId = Symbol("id"); // Unique and immutable value

// g) BigInt (ES11+)
let largeNumber = 1234567890123456789012345678901234567890n; // For very large integers
console.log(typeof largeNumber); // Output: bigint
// 2. Non-Primitive Data Types
// These are mutable and stored by reference.

// a) Object
let person = {
    name: "Alice",
    age: 30,
    isEmployed: true,
}; // Example of an object

// b) Array
let fruits = ["apple", "banana", "cherry"]; // Example of an array

// c) Function
function greet() {
    console.log("Hello, World!");
} // you can store a function in a variable
let greetFunction = function() {
    console.log("Hello from a function expression!");
}; // Example of a function expression

// d) Date
let currentDate = new Date(); // Example of a date object

// e) Map (ES6+)
let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2"); // Example of a Map

// f) Set (ES6+)
let set = new Set();
set.add(1);
set.add(2);
set.add(3); // Example of a Set

// Summary:
// Primitive: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Non-Primitive: Object, Array, Function, Date, Map, Set