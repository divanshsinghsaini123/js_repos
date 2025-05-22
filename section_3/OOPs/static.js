class MyClass {
    static staticMethod() {
        return 'Hello from static method!';
    }
}

console.log(MyClass.staticMethod()); // Output: Hello from static method!

//you can not use this method with the object of the class , 
//this is only binded to the class itself 