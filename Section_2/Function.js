// Example of a simple function in JavaScript
function greet(name) {
    return `Hello, ${name}!`;
}

// Example usage
console.log(greet("Alice")); // Output: Hello, Alice!
// Using the rest operator to handle multiple arguments
function greetMultiple(...names) {
    return names.map(name => `Hello, ${name}!`);
}

// Example usage
console.log(greetMultiple("Alice", "Bob", "Charlie")); 
// Output: [ 'Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!' ]

// Using the spread operator to pass an array as arguments
const nameArray = ["David", "Eve", "Frank"];
console.log(greetMultiple(...nameArray)); 
// Output: [ 'Hello, David!', 'Hello, Eve!', 'Hello, Frank!' ]