let answer = Math.floor(Math.random() * 100) + 1;
let i = 1;
console.log(answer);
console.log(typeof answer);
// const inputarray = [];
const button = document.querySelector('.btn');
button.addEventListener('click', function(e) {
    e.preventDefault();
    i++;
    const input = document.querySelector('input').value;
    if (input == answer) {
        alert('You guessed the number');
        document.querySelector('h1').innerHTML = 'You guessed the number';
        document.querySelector('h1').style.color = 'green';
        document.querySelector('.arry').innerHTML = "";
        i= 1 ;
        const h3heading = document.querySelector('.attempts');
        h3heading.innerHTML = `You have ${11 - (i % 10)} attempts left`;
        document.querySelector('.Remaining').innerHTML = `You have ${11 - i} attempts left`;
    } else {
        const h3heading = document.querySelector('.attempts');
        h3heading.innerHTML = `You have ${11 - (i % 10)} attempts left`;
        h3heading.style.color = 'red';
        // inputarray.push(input);
        document.querySelector('.arry').innerHTML += `${input} , `;
        document.querySelector('.Remaining').innerHTML = `You have ${11 - i} attempts left`;
        if (i % 10 == 0) {
            alert('You have used all your attempts');
            answer = Math.floor(Math.random() * 100) + 1;
            console.log(answer);
            // inputarray = [];
            document.querySelector('.arry').innerHTML = "";
        }
    }
});