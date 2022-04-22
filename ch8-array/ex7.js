function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, element) => {
    return accumulator + (element * element); 
  }, 0)
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83