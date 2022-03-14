// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

'use strict';

const result = document.querySelector('.js_result');
const myday = document.querySelector ('.js_myday');

let today = new Date();
let day = today.getDate();
let daylist = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = hour >= 12 ? ' PM ' : ' AM ';
hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === 'PM') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = 'Noon';
  } else {
    hour = 12;
    prepand = 'PM';
  }
}

if (hour === 0 && prepand === 'AM') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = 'Midnight';
  } else {
    hour = 12;
    prepand = 'AM';
  }
}

let resultmyday = daylist[day] + '.'
myday.innerHTML = myday.innerHTML + resultmyday;


let myresult= hour + prepand + ' : ' + minute + ' : ' + second;
result.innerHTML= result.innerHTML + myresult;


console.log('Today is: ' + daylist[day] + '.');
console.log(
  'Current time: ' + hour + prepand + ' : ' + minute + ' : ' + second
);
