// The bigInt method, and its abbreviation (n) are used to handle big numbers
// safely crossing the javascript numeric limits 

let productId = 230983472345908235734n;
let anotherProductId = BigInt(23098347234590823573434);

typeof productId; // 'bigint'
typeof anotherProductId // 'bigint'