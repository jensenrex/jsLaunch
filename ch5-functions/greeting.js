// let greetingMessage = "Good Morning!";
// console.log(greetingMessage);

// global
let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople();

// local scope 
function greetPeople() {
  let greetingMessage = "g'day"; 
  console.log(greetingMessage); 
}

greetPeople(); 
