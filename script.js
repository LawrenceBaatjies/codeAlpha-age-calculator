// get input fields and result elements
const dayInput = document.querySelector('.get-info .day input');
const monthInput = document.querySelector('.get-info .month input');
const yearInput = document.querySelector('.get-info .year input');
const yearResult = document.querySelector('.result h3:nth-of-type(1) span');
const monthResult = document.querySelector('.result h3:nth-of-type(2) span');
const dayResult = document.querySelector('.result h3:nth-of-type(3) span');



// add event listener to the calculate button
let calcButton = document.querySelector('.middle-line .calc');
calcButton.addEventListener('click', (event) => {
  event.preventDefault();                 // prevent the default behavior of the button
  calculateAge();
});

// add event listener to the input fields
dayInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {             // check if the "Enter" key is pressed
    event.preventDefault();              // prevent the default behavior of the input field
    calculateAge();
  }
});

monthInput.addEventListener('keyup', (event) =>{
  if (event.keyCode === 13) {               // check if the "Enter" key is pressed
    event.preventDefault();                // prevent the default behavior of the input field
    calculateAge();
  }
});

yearInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {            // check if the "Enter" key is pressed
    event.preventDefault();               // prevent the default behavior of the input field
    calculateAge();
  }
});

// function to calculate age
const calculateAge = () => {
  // validate input fields
  let day = parseInt(dayInput.value);
  let month = parseInt(monthInput.value) - 1; // subtract 1 from month
  let year = parseInt(yearInput.value);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert('Please enter a valid date in the format DD/MM/YYYY.');
    return;
  }

  // validate day and month
  let maxDays = new Date(year, month + 1, 0).getDate();
  if (day < 1 || day > maxDays) {
    alert('Please enter a valid day.');
    return;
  }
  if (month < 0 || month > 11) {
    alert('Please enter a valid month.');
    return;
  }

  // validate year
  let currentYear = new Date().getFullYear();
  if (year < 1900 || year > currentYear) {
    alert('Please enter a valid year between 1900 and ' + currentYear + '.');
    return;
  }

  // calculate age
  let today = new Date();
  let birthDate = new Date(year, month, day);
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // handle negative age
  if (ageMonths < 0 || (ageMonths == 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }
  if (ageDays < 0) {
    let lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    ageDays += lastMonth.getDate();
    ageMonths--;
  }

  // update result elements
  yearResult.textContent = ageYears;
  monthResult.textContent = ageMonths;
  dayResult.textContent = ageDays;

  
};


// CalculateStarSign 
const calculateStarSign = () => {
  const birthDate = new Date(document.getElementById('birthdate').value);
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();

  let starSign = '';

      if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        starSign = 'Aries';
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        starSign = 'Taurus';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        starSign = 'Gemini';
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        starSign = 'Cancer';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        starSign = 'Leo';
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        starSign = 'Virgo';
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        starSign = 'Libra';
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        starSign = 'Scorpio';
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        starSign = 'Sagittarius';
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        starSign = 'Capricorn';
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        starSign = 'Aquarius';
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        starSign = 'Pisces';
    }

  document.getElementById('result').innerText = `Your star sign is: ${starSign}`;

  
}

 


