let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 42]; 
let newArray = numbers.filter(element => element > 8); 
console.log(newArray); 
console.log(numbers); 
console.log(typeof numbers);
console.log(Array.isArray(newArray));