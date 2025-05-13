// Basic Numbers and Math in JavaScript

// Declaring numbers
const num1 = 10;
const num2 = 5;

// Math object for advanced operations ( Math is a liberary in JS)
console.log("Power:", Math.pow(2, 3)); // 8
console.log("Square root:", Math.sqrt(16)); // 4
console.log("Absolute value:", Math.abs(-10)); // 10
console.log("Ceiling:", Math.ceil(4.2)); // 5
console.log("Floor:", Math.floor(4.8)); // 4
console.log("Round:", Math.round(4.5)); // 5
console.log("Random (0 to 1):", Math.random()); // Random number between 0 and 1

console.log("kya ye integer hai?", Number.isInteger(num1)); // true

// Generating a random number between a range
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}
console.log("Random number between 1 and 10:", getRandomInRange(1, 10));

// Trigonometric functions
console.log("Sine of 90 degrees:", Math.sin((90 * Math.PI) / 180)); // 1
console.log("Cosine of 0 degrees:", Math.cos(0)); // 1

// Parsing numbers
console.log("Parse integer:", parseInt("42")); // 42
console.log("Parse float:", parseFloat("3.14")); // 3.14

// Checking if a value is NaN
console.log("Is NaN:", isNaN("hello")); // true

// Infinity and -Infinity
console.log("Positive Infinity:", Infinity);
console.log("Negative Infinity:", -Infinity); 
console.log("Max value : ", Number.MAX_VALUE); // 1.7976931348623157e+308
console.log("Min value : ", Number.MIN_VALUE); // 5e-324
console.log("Max safe integer : ", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("Min safe integer : ", Number.MIN_SAFE_INTEGER); // -9007199254740991

//to fix the precision of floating point numbers
console.log("Precision issue:", 0.1 + 0.2); // 0.30000000000000004
console.log("Fixed precision:", (0.1 + 0.2).toFixed(2)); // 0.30

//precision issue with large numbers    
console.log("Large number precision issue:", 0.1 + 0.2 + 4.3); // 0.6000000000000001
console.log("Fixed precision for large numbers:", (0.1 + 0.211 + 4.3).toPrecision(2)); // 0.60





//-------------------------------------------Date and Time--------------------------------------
// Working with Date and Time in JavaScript

// Current date and time 
const now = new Date();  //a object of date is created
console.log("Current Date and Time:", now);

// Specific date
const specificDate = new Date(2023, 9, 15); //   October is month 9 (0-based index)
console.log("Specific Date:", specificDate);

// Date from string
const dateFromString = new Date("2023-10-15T10:30:00");
console.log("Date from String:", dateFromString);

// Get individual components
console.log("Year:", now.getFullYear());
console.log("Month (0-based):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day of the week:", now.getDay()); // 0 is Sunday
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());

// Set individual components
const modifiedDate = new Date();
modifiedDate.setFullYear(2025);
modifiedDate.setMonth(11); // December
modifiedDate.setDate(25);
console.log("Modified Date:", modifiedDate);

// Timestamp (milliseconds since Jan 1, 1970)
console.log("Timestamp:", now.getTime());

// Comparing dates
const date1 = new Date(2023, 9, 15);
const date2 = new Date(2023, 9, 16);
console.log("Is date1 before date2?", date1 < date2); // true

// Formatting dates
console.log("Locale String:", now.toLocaleString());
console.log("Locale Date String:", now.toLocaleDateString());
console.log("Locale Time String:", now.toLocaleTimeString());

// ISO String
console.log("ISO String:", now.toISOString());

// Adding days to a date
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
console.log("Date after 5 days:", addDays(now, 5));