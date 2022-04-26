let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arrKeys = Object.keys(obj); 
let upperKeys = arrKeys.map((item)=> item.toUpperCase()); 

console.log(upperKeys); 
console.log(arrKeys); 
console.log(obj); 
