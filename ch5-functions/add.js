function add(a, b) {
  return a + b; 
}

function subtract(a, b) {
  return a - b; 
}

let sum = add (22, 99);
let diff = subtract(77, 7); 
console.log(diff);
console.log(sum);

function times(c, d) {
  return c * d; 
}

console.log(times(add(2, 1), subtract(9, 7)));