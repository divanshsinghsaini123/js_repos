//create a array of colors 
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const container = document.querySelector('.container');
colors.forEach(color => {
    //create a div element
    const colorDiv = document.createElement('div');
    //add class to the div
    colorDiv.classList.add('btn');
    colorDiv.id = color;
    //set the background color of the div
    colorDiv.style.backgroundColor = color;
    //append the div to the container
    container.appendChild(colorDiv);
}
);

//adding on click event to these divs 
const btns = document.querySelectorAll('.btn');
btns.forEach(bbb =>{
    bbb.addEventListener('click' , (e) =>{
        //get the id of the div
        // const color = e.target.style.backgroundColor;
        const color = e.target.id;
        //set the background color of the body
        document.body.style.backgroundColor = color;
    })
})
