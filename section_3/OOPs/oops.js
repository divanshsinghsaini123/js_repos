// Constructor function (like a class)
function Animal(name) {
    this.name = name;
}
// Adding method to prototype
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

const animal = new Animal('Generic Animal'); //aapko new key word use karna padega , agr apne baad me kutch inject kiya h( like function ) 
// instanceof operator
console.log(dog instanceof Dog);     // true
console.log(dog instanceof Animal);  // true
console.log(animal instanceof Dog);  // false

// Inheritance using __proto__
const bird = {
    name: 'Tweety',
    speak: function() {
        console.log(`${this.name} chirps.`);
    }
};

// Set up inheritance so bird inherits from Animal
const parrot = {
    name: 'Polly' ,
    __proto__: bird, // Set prototype to bird
};
parrot.__proto__ = bird.prototype; // Set prototype to bird ( you can also set like this ) 

parrot.speak(); // Polly makes a sound.


//super in js - super is used to call the constructor of the parent class or to call the method of the parent class
class Dog extends Animal {
    constructor(name) {
        super(name); // Calls the parent constructor
    }
    speak() {  
        super.speak(); // Calls the parent method
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Buddy');
dog.speak(); // Buddy makes a sound. Buddy barks.








