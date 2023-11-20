const user = { username: "SebaMat3", age: 27, coutry: "ARG" }; 

//Destructuring object, spreading ...rest to a given variable
const { username, ...values } = user; 
console.log(username); // SebaMat3
console.log(values); // { age: 27, coutry: 'ARG' }