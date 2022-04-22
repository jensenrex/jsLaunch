let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newerArray = [];
for (let i = 0; i < myArray.length; i += 1) { 
  // let value = myArray[i]; 
  if (myArray[i] % 2 == 0) {
    newerArray.push('even'); 
  } else {
    newerArray.push('odd'); 
  }
}

console.log(newerArray); 

