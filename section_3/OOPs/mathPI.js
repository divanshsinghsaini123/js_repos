const temp = Object.getOwnPropertyDescriptor(Math , 'PI') ;
console.log(temp);

Object.defineProperties(Math , {   //you can control the properties of the object
    PI : {
        value : 4.14,
        writable : true,
        enumerable : false,
        configurable : false
    }
})
console.log(Math.PI); // 3.141592653589793