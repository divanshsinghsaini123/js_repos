// Example of high-order array loops
const fruits = ['apple', 'banana', 'cherry'];

// Using for...in (iterates over the index)
console.log('Using for...in:');
for (let index in fruits) {
    console.log(`Index: ${index}, Value: ${fruits[index]}`);
}

// Using for...of (iterates over the values)
console.log('\nUsing for...of:');
for (let fruit of fruits) {
    console.log(`Value: ${fruit}`);
}

// Using forEach (higher-order function)
console.log('\nUsing forEach:');
fruits.forEach((fruit, index) => {
    console.log(`Index: ${index}, Value: ${fruit}`);
});




// Using Map (data structure) - key are unique and insertion order is maintained 
console.log('\nUsing Map:');
const fruitMap = new Map([
    [1, 'apple'],
    [2, 'banana'],
    [3, 'cherry']
]);

fruitMap.set(4, 'date'); 
// Iterating over Map entries
fruitMap.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});

for(const [key, value] of fruitMap.entries()) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// Using filter (creates a new array with elements that pass the test)
console.log('\nUsing filter:');
const filteredFruits = fruits.filter(fruit => fruit.startsWith('b'));
console.log(filteredFruits); // ['banana']

// Using map (creates a new array with the results of applying a function)
console.log('\nUsing map:');
const uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits); // ['APPLE', 'BANANA', 'CHERRY']

// Using reduce (reduces the array to a single value)
console.log('\nUsing reduce:');
const concatenatedFruits = fruits.reduce((accumulator, fruit) => `${accumulator}, ${fruit}`);
console.log(concatenatedFruits); // 'apple, banana, cherry'