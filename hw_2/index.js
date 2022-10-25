"use strict"

//tack_1

let x = 1;
let y = 2;

let res1 = x.toString() + y.toString();
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = "true" + y;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = "x" - "y";
console.log(res4); // NaN
console.log(typeof res4); // "number"

//tack_2

const number = prompt("Введiть число: "); 
const result = (number % 2 == 0) ? "парне" : "не парне"; 
console.log(result);
console.log(number % 7 === 0 ? "кратне" : "не кратне");

//tack_3

let emptyArray = [];
emptyArray[0] = 33;
emptyArray[1] = "Aleks Yatsko";
emptyArray[2] = true;
emptyArray[3] = null;
alert(emptyArray.length);
emptyArray[4] = prompt('Введiть будь що:');
alert(emptyArray[4]);
emptyArray.shift();
alert(emptyArray);

//task4
let town = ["Rome", "Lviv", "Warsaw"]; 
town = town.join("*");
console.log(town);

//tack_5

let isAdult = prompt("Cкiльки вам повних рокiв?");
console.log ( isAdult );
console.log(isAdult >=18 ? "Ви досягли повнолітнього віку!" : "Ви ще надто молоді!");

//tack_6

let firstTriangSide = prompt("Enter the length of the first side of triangle");
let secondTriangleSide = prompt("Enter the length of the second side of triangle");
let thirdTriangleSide = prompt("Enter the length of the third side of triangle");

let a = Number(firstTriangSide);
let b = Number(secondTriangleSide);
let c = Number(thirdTriangleSide);
let triangleSquare;
if (a, b, c > 0 && isNaN) {
let p = (a + b + c) / 2;
console.log(`half perimeter triangle: ${p}`);
triangleSquare = (Math.sqrt(p * (p - a) * (p - b) * (p - c))); //
console.log(`square a triangle : ${triangleSquare.toFixed(3)}`);
} else {
alert("Incorrect data. Enter the value again")
}
let rightTriangle;
if (a, b < c || a, c < b || b, c < a
    && a ** 2 === b ** 2 + c ** 2 || b ** 2 === a ** 2 + c ** 2 || c ** 2 === b ** 2 + a ** 2
    && triangleSquare !== isNaN) {
    console.log("right triangle")
} else if (a, b, c === 0, null, undefined, NaN) {
    console.log("not a right triangle");
} else {console.log("not a right triangle");
} 

//tack_7

let date = new Date();
let timePeriod = (date.getHours());

if(timePeriod === 23 && timePeriod <5) {
    alert('Доброї ночі');
} else if (timePeriod >= 5 && timePeriod < 11) {
    alert('Доброго ранку');
} else if (timePeriod >= 11 && timePeriod < 17) {
    alert('Доброго дня');
} else if (timePeriod >= 17 && timePeriod < 23) {
    alert('Доброго вечора');
}

switch (timePeriod) {
    case 23:
    case 0:        
    case 1:
    case 2:
    case 3:
    case 4:
        alert('Доброї ночі');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        alert('Доброго ранку');
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        alert('Доброго дня');
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        alert('Доброго вечора');
        break;
}