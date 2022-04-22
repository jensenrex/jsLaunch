let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkThree(numbers) {
  numbers.forEach(element => {
    console.log(element === 3); 
  });
}

// checkThree(numbers1);
// checkThree(numbers2);
// checkThree(numbers3);

console.log(numbers1.includes(3)); 