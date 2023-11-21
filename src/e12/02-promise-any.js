//Now you can use Promise.any() to receive several promises, but act (.then) upon the first succesfully resolved one.
const promise1 = new Promise((resolve, reject) => reject("reject")); 
const promise2 = new Promise((resolve, reject) => resolve("resolve")); 
const promise3 = new Promise((resolve, reject) => resolve("resolve2")); 


Promise.any([promise1, promise2, promise3]) 
    .then(response => console.log(response));
    // in this case the output comes from the promise2 -> 'resolve'.