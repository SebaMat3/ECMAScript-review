//TrimStart-trimEnd: cut string blank spaces

const hello = "       Hello World!   ";
console.log(hello.trimStart());
//Hello World!       (space)
console.log(hello.trimEnd());
//(space)       Hello World!