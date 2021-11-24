//exercise 4 of functions chapter- my solution: 
// function multiply () {
//   let readlineSync = require('readline-sync');
//   let num1 = readlineSync.questionInt('Enter the first number: '); 
//   let num2 = readlineSync.questionInt('Enter the second number: '); 
//   console.log(`Those 2 numbers multiplied equals ${num1 * num2}!`)
//   return num1 * num2; 
// }

// multiply(); 

// textbook's solution: 
function multiply (left, right) {
  return left * right;
}

function getNumber (prompt) {
  let readlineSync = require('readline-sync'); 
  return parseFloat(readlineSync.question(prompt)); 
}

let left = getNumber ('Enter the first number: ');
let right = getNumber ('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`)
