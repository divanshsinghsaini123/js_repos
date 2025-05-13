//singleton objects 
const singletonobje = new Object(); // Creating a singleton object using the Object constructor
singletonobje.name = "Alice";   // Adding properties to the singleton object
singletonobje.age = 25;         // Adding properties to the singleton object        
singletonobje.greet = function () { // Adding a method to the singleton object
    console.log(`Hello, my name is ${this.name}`); // Using 'this' to refer to the object itself    
}

//non singleton objects
// Object literal syntax
const obj1 = {
    name: "Alice",
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};

// ------------- singleton object has only one instance, while non-singleton object can have multiple instances
// ------------- singleton object is created using the Object constructor, while non-singleton object is created using object literal syntax
//singleton objects are mainly used for resources that are expensive to create or manage, such as database connections or configuration settings.
//non-singleton objects are used for creating multiple instances of an object with similar properties and methods.

// Creating an object
const person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};

// Accessing properties
console.log(person.name); // "John"
console.log(person["age"]); // 30

// Modifying properties
person.age = 31;
person["name"] = "Jane";
console.log(person); // { name: 'Jane', age: 31, greet: [Function: greet] }

// Adding new properties
person.gender = "male";
console.log(person.gender); // "male"

// Deleting properties
delete person.gender;
console.log(person.gender); // undefined

// Using Symbol as a key
const symKey = Symbol("uniqueKey");
person[symKey] = "Symbol Value";
console.log(person[symKey]); // "Symbol Value"

// Object.freeze() - Prevents modification of the object
Object.freeze(person);
person.age = 40; // This will not change the age
console.log(person.age); // 31

// Object.seal() - Allows modification of existing properties but prevents adding/removing properties
const sealedObject = { a: 1 };
Object.seal(sealedObject);
sealedObject.a = 2; // Allowed
sealedObject.b = 3; // Not allowed
console.log(sealedObject); // { a: 2 }

// Object.keys() - Returns an array of keys
console.log(Object.keys(person)); // ['name', 'age', 'greet']

// Object.values() - Returns an array of values
console.log(Object.values(person)); // ['Jane', 31, [Function: greet]]

// Object.entries() - Returns an array of key-value pairs
console.log(Object.entries(person)); // [['name', 'Jane'], ['age', 31], ['greet', [Function: greet]]]

// Object.assign() - Copies properties from one object to another
const target = {};
Object.assign(target, person);
console.log(target); // { name: 'Jane', age: 31, greet: [Function: greet] }

// Object.hasOwn() - Checks if a property exists directly on the object
console.log(Object.hasOwn(person, "name")); // true

// Object.getOwnPropertyDescriptors() - Returns all property descriptors
console.log(Object.getOwnPropertyDescriptors(person));

// Using a method
person.greet(); // "Hello, my name is Jane"





//different object methods in js 
// Merging two objects using Object.assign()
const objA = { a: 1, b: 2 };
const objB = { b: 3, c: 4 };
const mergedObj = Object.assign({}, objA, objB);
console.log(mergedObj); // { a: 1, b: 3, c: 4 }

// Merging two objects using the spread operator
const mergedObj2 = { ...objA, ...objB };
console.log(mergedObj2); // { a: 1, b: 3, c: 4 }

// Object.create() - Creates a new object with the specified prototype
const proto = { greet: function () { console.log("Hello!"); } };
const objC = Object.create(proto);
objC.greet(); // "Hello!"

// Object.defineProperty() - Adds a property with a descriptor
const objD = {};
Object.defineProperty(objD, "name", {
    value: "John",
    writable: false,
    enumerable: true,
    configurable: false,
});
console.log(objD.name); // "John"
objD.name = "Jane"; // This will not change the name
console.log(objD.name); // "John"

// Object.defineProperties() - Adds multiple properties with descriptors
const objE = {};
Object.defineProperties(objE, {
    prop1: { value: 10, writable: true },
    prop2: { value: 20, writable: false },
});
console.log(objE.prop1, objE.prop2); // 10 20


// Object.setPrototypeOf() - Sets the prototype of an object
const newProto = { sayHi: function () { console.log("Hi!"); } };
Object.setPrototypeOf(objC, newProto);
objC.sayHi(); // "Hi!"

// Object.is() - Compares two values for strict equality
console.log(Object.is(25, 25)); // true
console.log(Object.is(NaN, NaN)); // true

// Object.isExtensible() - Checks if an object is extensible
console.log(Object.isExtensible(objD)); // true

// Object.preventExtensions() - Prevents adding new properties to an object
Object.preventExtensions(objD);
console.log(Object.isExtensible(objD)); // false

// Object.isSealed() - Checks if an object is sealed
console.log(Object.isSealed(sealedObject)); // true

// Object.isFrozen() - Checks if an object is frozen
console.log(Object.isFrozen(person)); // true



// Array of objects example
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
];

// Accessing objects in the array
console.log(users[0].name); // "Alice"

// Iterating over the array of objects
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// Adding a new object to the array
users.push({ id: 4, name: "Diana", age: 28 });
console.log(users);

// Finding an object in the array
const user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: "Bob", age: 30 }

// Filtering objects in the array
const adults = users.filter(user => user.age >= 30);
console.log(adults); // [{ id: 2, name: "Bob", age: 30 }, { id: 3, name: "Charlie", age: 35 }]

// Updating an object in the array
const index = users.findIndex(user => user.id === 3);
if (index !== -1) {
    users[index].age = 36;
}
console.log(users);

// Removing an object from the array
const removedUser = users.splice(index, 1);
console.log(removedUser); // [{ id: 3, name: "Charlie", age: 36 }]
console.log(users);


