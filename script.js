// get input fields and result elements
const dayInput = document.querySelector('.get-info .day input');
const monthInput = document.querySelector('.get-info .month input');
const yearInput = document.querySelector('.get-info .year input');
const yearResult = document.querySelector('.result h3:nth-of-type(1) span');
const monthResult = document.querySelector('.result h3:nth-of-type(2) span');
const dayResult = document.querySelector('.result h3:nth-of-type(3) span');

// add event listener to the calculate button.

let calcButton = document.querySelector('.middle-line .calc');
calcButton.addEventListener('click', (event) => {
    event.preventDefault();  // prevent the default behavior of the button
    calculateAge();
})

// add event listener to the input fields
dayInput.addEventListener('click', () => {
    if(event.keyCode === 13) {
        
    }
})