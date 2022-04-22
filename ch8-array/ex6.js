let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(stringsArray) {
  let lengthArray = stringsArray.map(string => string.length); 
  let newOddArray = lengthArray.filter((num) => num % 2 === 1); 
  return newOddArray; 
}

console.log(oddLengths(arr)); // => [1, 5, 3]