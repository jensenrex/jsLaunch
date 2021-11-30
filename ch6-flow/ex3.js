function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('error. pls reenter a whole nubmer'); 
    return
  }
  if (number % 2 === 0) { 
    console.log('even');
  } else {
    console.log('odd');  
  }
} 

