// String concatenation
let greeting = "Hello";
let name = "John";
let message = greeting + ", " + name + "!";
console.log(message); // Output: Hello, John!

// Variable concatenation
let part1 = "This is";
let part2 = "a concatenated";
let part3 = "string.";
let fullMessage = part1 + " " + part2 + " " + part3;
console.log(fullMessage); // Output: This is a concatenated string.

console.log(`${part1} ${part2} ${part3}`); // Output: This is a concatenated string.



//-------------------------------------------METHODS of strings --------------------------------------
// String length
let str = "Hello, World!";
console.log(str.length); // Output: 13

// Accessing characters
console.log(str[0]); // Output: H
console.log(str.charAt(1)); // Output: e
console.log(str.indexOf("W")); // Output: 7 (index of first occurrence of 'W')

// Changing case
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!


// Substring extraction
console.log(str.substring(0, 5)); // Output: Hello
console.log(str.slice(7, 12)); // Output: World

// Checking for substrings
console.log(str.includes("World")); // Output: true
console.log(str.startsWith("Hello")); // Output: true
console.log(str.endsWith("!")); // Output: true

// Splitting strings
let words = str.split(", ");
console.log(words); // Output: [ 'Hello', 'World!' ]

// Replacing substrings
let newStr = str.replace("World", "JavaScript");
console.log(newStr); // Output: Hello, JavaScript!

// Trimming whitespace from both sides 
let paddedStr = "   Hello, World!   ";
console.log(paddedStr.trim()); // Output: Hello, World!

// Repeating strings
console.log("Hi! ".repeat(3)); // Output: Hi! Hi! Hi!