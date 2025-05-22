    // In JavaScript, bind(), call(), and apply() are used to explicitly set the ""this""" value of a function. 
    // They're still used today, especially in more complex or legacy code,
    //  though newer patterns (like arrow functions or class fields) have made some use cases less common.

    // BIND() - Does not invoke the function immediately(because it returns a new function).
            // Creates a new function with a fixed this value.
            // Use Cases:
                // Event handlers in class components (like in React).
                // Passing functions as callbacks while preserving this.
                // Partial function application (presetting some arguments).
                const person = { name: "Alice" };
                function greet(greeting) {
                    console.log(`${greeting}, I'm ${this.name}`);
                }

                const greetAlice = greet.bind(person);
                greetAlice("Hello"); // Hello, I'm Alice
    
    // CALL() - Invokes the function immediately.
            // Sets the this value and passes arguments.
            // Use Cases:
                // When you want to borrow methods from other objects.
                // When you need to invoke a function with a specific this context.
                const man = { name: "Alice" };
                function greet(greeting) {
                    console.log(`${greeting}, I'm ${this.name}`);
                }

                greet.call(man, "Hello"); // Hello, I'm Alice

    // APPLY() - Similar to call(), but takes an array of arguments.
