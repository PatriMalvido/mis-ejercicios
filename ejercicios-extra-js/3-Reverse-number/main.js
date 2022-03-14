// Write a JavaScript function that reverse a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223
'use strict';

function reverse_a_number(n){
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));


//split: divide una cadena en una lista ordenada de subcadenas, las pone en un array y lo devuelve.
// reverse: le da la vuelta a un array (el primero pasa a ser el ultimo)
// join: crea y devuelve una nueva cadena concantenando todos los elementos de un array