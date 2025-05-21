// Two way to handle asynchronous operations in JavaScript are Promises and async/await
// Promises use .then() and .catch() for handling asynchronous results.
// async/await allows writing asynchronous code that looks synchronous, using try/catch for errors.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Change to false to test rejection
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 1000);
    });
}

fetchData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });


    // Using fetch API to get data from a URL
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched post:', data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

        // Using fetch API with async/await
        async function fetchPost() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched post with async/await:', data);
            } catch (error) {
                console.error('Fetch error with async/await:', error);
            }
        }

        fetchPost();

        // Sending headers with fetch request
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your_token_here'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched post with custom headers:', data);
            })
            .catch(error => {
                console.error('Fetch error with headers:', error);
            });


            //fatch is also a promise -- we can use it with async/await and .then() and .catch()
            //their is priority queue for fatch requests in the Event loop 