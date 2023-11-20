// fromEntries

const entries = new Map ([["name", "alexa"], ["age", 24]]); 
console.log(entries); // Map(2) { 'name' => 'alexa', 'age' => 24 }
console.log(Object.fromEntries(entries)); // { name: 'alexa', age: 24 }