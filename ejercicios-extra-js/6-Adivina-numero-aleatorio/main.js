// Escriba un programa de JavaScript en el que el programa toma un número entero aleatorio entre 1 y 10, el usuario se le pide que introduzca un número adivinado. Si la entrada del usuario coincide con el número adivinado, el programa mostrará un mensaje "Buen trabajo", de lo contrario mostrará un mensaje "No coincide".
'use strict';

const buttonReset =document.querySelector('.js-button');
const numberUser =document.querySelector('.js-input');
const textElement =document.querySelector('.js-textelement');


const randomNumber = Math.ceil(Math.random()*10);
console.log(randomNumber);

function handleClickReset(){
   location.reload();

}

function handlePressKey(event){
const number = event.currentTarget.value;
console.log(number);

if (number == randomNumber){
    textElement.innerHTML= 'Matched'
}else{
    textElement.innerHTML= 'Not matched, the number was ' + randomNumber;
}

}

buttonReset.addEventListener('click',handleClickReset);
numberUser.addEventListener('keyup',handlePressKey);

