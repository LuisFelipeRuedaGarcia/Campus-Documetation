// math object
number=12.5
//Static properties

//Ratio of a circle's circumference to its diameter
console.log(Math.PI)

//Methods
//To fixed formats a number using fixed-point notation.
let numberFixed = 12.12345
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
console.log(financial(numberFixed))
console.log()
//Max Returns the largest of zero or more numbers.
console.log(Math.max(number,3))
//Min Returns the smallest of zero or more numbers.
console.log(Math.min(number,3))
//Pow Returns base x to the exponent power y.
console.log(Math.pow(number,2))
//Random Returns a pseudo-random number between 0 and 1
console.log(Math.random())
//Sqrt Returns the positive square root of number
console.log(Math.sqrt(number))

console.log(Math.floor(Math.random() * 10))
//Round methods
//Ceil Returns the smallest integer greater than or equal to number
console.log(Math.ceil(number))
//Floor Returns the largest integer less than or equal to number
console.log(Math.floor(number))
//Round Returns the value of the number 'number' rounded to the nearest integer.
console.log(Math.round(number))
//Trunc Returns the integer portion of 'number', removing any fractional digits.
console.log(Math.trunc(number))