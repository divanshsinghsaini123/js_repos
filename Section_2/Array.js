// Example of working with arrays in JavaScript

// Creating an array
const fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Adding elements
fruits.push("Orange"); // Adds to the end
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]

// Removing elements
fruits.pop(); // Removes the last element
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Iterating over an array
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Finding an element
const index = fruits.indexOf("Banana");
console.log(index); // Output: 1

// Checking if an element exists
const hasApple = fruits.includes("Apple");
console.log(hasApple); // Output: true

// Creating a new array by mapping
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "CHERRY"]

// Filtering an array
const filteredFruits = fruits.filter(fruit => fruit.startsWith("B"));
console.log(filteredFruits); // Output: ["Banana"]

// Reducing an array
const concatenatedFruits = fruits.reduce((acc, fruit) => acc + ", " + fruit);
console.log(concatenatedFruits); // Output: Apple, Banana, Cherry

// Using slice
// slice(start, end) - extracts a section of the array without modifying the original array
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["Banana", "Cherry"]
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Using splice
// splice(start, deleteCount, item1, item2, ...) - modifies the original array
console.log(`original arrry = ${fruits}`); 
const splicedFruits = fruits.splice(1, 1, "Mango", "Pineapple");
console.log(splicedFruits); // Output: ["Banana"] (removed element)
console.log(fruits); // Output: ["Apple", "Mango", "Pineapple", "Cherry"]



//in short shallow and deep copy ,
// Shallow copy


console.log("Shallow copy example:");
const shallowCopy = fruits.slice();
console.log(shallowCopy); // Output: ["Apple", "Banana", "Cherry"]

// Modifying the shallow copy does not affect the original array
shallowCopy[0] = "Mango";
console.log(shallowCopy); // Output: ["Mango", "Banana", "Cherry"]
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
 
// Deep copy (for nested arrays)
const nestedArray = [["Apple", "Banana"], ["Cherry", "Orange"]];
const deepCopy = JSON.parse(JSON.stringify(nestedArray));

// Modifying the deep copy does not affect the original nested array
deepCopy[0][0] = "Mango";
console.log(deepCopy); // Output: [["Mango", "Banana"], ["Cherry", "Orange"]]
console.log(nestedArray); // Output: [["Apple", "Banana"], ["Cherry", "Orange"]]