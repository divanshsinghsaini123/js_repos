// Example: Handling events in JavaScript

// Select a button element
const button = document.getElementById('myButton');

// Add a click event listener
button.addEventListener('click', function() {
    alert('Button was clicked!');
});

// You can also use other events, like mouseover, keydown, etc.
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'lightblue';
});

button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '';
});


// Example: Using setInterval, setTimeout, clearTimeout, and clearInterval

// Set a timeout to show an alert after 2 seconds
const timeoutId = setTimeout(() => {
    alert('This alert appears after 2 seconds!');
}, 2000);

// Set an interval to change button text every second
let count = 0;
const intervalId = setInterval(() => {
    count++;
    button.textContent = `Clicked ${count} times`;
    if (count >= 5) {
        clearInterval(intervalId); // Stop after 5 updates
        button.textContent = 'myButton';
    }
}, 1000);

// Optional: Clear the timeout if the button is clicked before 2 seconds
button.addEventListener('click', function() {
    clearTimeout(timeoutId);
});