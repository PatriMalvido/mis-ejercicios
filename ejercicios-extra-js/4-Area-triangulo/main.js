// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

'use strict';

const sideA = 5;
const sideB = 6;
const sideC = 7;

const perimeter = (sideA + sideB + sideC)/2;

const area= Math.sqrt(perimeter*((perimeter-sideA)*(perimeter-sideB)*(perimeter-sideC)));

console.log(area);