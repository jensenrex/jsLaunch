let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj); 

console.log(myObj); 

console.log(myProtoObj); 

// ex 7 below: 
// myObj['qux'] = 3; 
myObj.qux = 3;
console.log(myObj); 
console.log(myObj.bar); 