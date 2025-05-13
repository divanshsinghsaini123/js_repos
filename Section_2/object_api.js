//object de_structuring and JSON API 
const user = {
    name: "John Doe",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    }
};

// Object destructuring
const { name, age, address: { city, zip } } = user;

console.log(`Name: ${name}, Age: ${age}, City: ${city}, Zip: ${zip}`);

//json is a object in string format ( key and value both are in string format)
// JSON.stringify() - Converts a JavaScript object to a JSON string

//somtimes we get a Array of objects from API,
[
    {},
    {},
]

