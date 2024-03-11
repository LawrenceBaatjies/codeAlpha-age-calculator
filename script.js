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

// add event listener to the input fields Day- Month- Year
dayInput.addEventListener('click', (event) => {
    if(event.keyCode === 13) {  // check if the "Enter" key is pressed
        event.preventDefault();  // prevent the default behavior of the input field
        calculateAge();
    }
})

monthInput.addEventListener('click', (event) => {
    if(event.keyCode === 13) {
        event.preventDefault();
        calculateAge();
    }
})

yearInput.addEventListener('click', (event) => {
    if(event.keyCode === 13) {
        event.preventDefault();
        calculateAge();
    }
})

// function to calculate age

const calculateAge = () => {
    let day = parseInt(dayInput.value);
    let month = parseInt(monthInput.value) -1;   // subtract 1 from month
    let year = parseInt(yearInput.value);

        if(isNaN(day) || isNaN(month) || isNaN(year)) {
            alert('Please enter a valid date in the format of DD/MM/YYYY.');
            return;
        }
}

 // validate day and month

 let maxDays = new Date(year, month =1, 0).getDate();
    if(day < 1 || day > maxDays) {
        alert('Please enter a valid day')
        return;
    }

        if(month < 0 || month > 11) {
            alert('Please enter a valid month');
            return;
        }

        // validate year

        let currentYear = new Date().getFullYear();
            if( year < 1900 || year > currentYear) {
                alert(`Please enter a valid year between 1900 and  ${currentYear} + '.'`);
                return;
            }
            
            // calculate age

    let today = new Date();
    let birthday = new Date(year, month, day);
    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let ageMonth = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // handle negative age
    


