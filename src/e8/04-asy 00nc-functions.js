// Promise
const asyncFn = () => {
    return new Promise((resolve, reject)=>{
        //Shorter way to write a ternary If:
       (true)
    ? setTimeout(() => resolve ('Async!'), 2000)
    : reject(new Error('Error'));
    })
}

// Function that calls the promise and prints message
const anotherFn = async () => {
    const something = await asyncFn();
    console.log(something);
    console.log("Hello");
}

console.log("Before...");
anotherFn();
console.log("After.");

/* Output
    Before...
    After.
    Async!
    Hello 
*/