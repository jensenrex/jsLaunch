// node solution 
// let readlineSync = require('readline-sync'); 
// let name = readlineSync.question('What is your name? '); 
// let surname = readlineSync.question('What is your family name? ');
// console.log('Hello, ' + name + ' ' + surname + '!'); 

// browser solution 
// let newName = prompt("What is your name homeboy?");
// console.log(`gday ${name}`);

function getName(prompt) {
  let readlineSync = require('readline-sync'); 
  let name = readlineSync.question(prompt); 
  return name; 
}

let name = getName('What\'s your first name?'); 
let surname = getName('What\s your surname?');
console.log(`G\'day, ${name} ${surname}!`); 