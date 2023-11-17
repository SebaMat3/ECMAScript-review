
const anotherFunction = () =>{
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve ('Hey!!');
        } else {
            reject (':(');
        }
    })
}

anotherFunction()
    .then(response => console.log(resolve))
    .catch(err => console.log(err));


//The restaurant order analogy: 
//Imagine this function simulates ordering food (making an API call)
function orderFood() {
    // Creating a promise
    const foodPromise = new Promise((resolve, reject) => {
      // Simulating the time it takes to prepare the dish (API call)
      setTimeout(() => {
        const isDishReady = true; // Change to false to simulate an issue
  
        if (isDishReady) {
          // If the dish is ready, fulfill the promise
          resolve("Delicious Dish is Ready!");
        } else {
          // If there's an issue, reject the promise
          reject("Sorry, we couldn't prepare the dish.");
        }
      }, 2000); // Simulating a 2-second delay
    });
  
    // Returning the promise
    return foodPromise;
  }
  
  // Now, let's order food and handle the promise
  orderFood()
    .then((message) => {
      // If the promise is fulfilled
      console.log(message);
    })
    .catch((errorMessage) => {
      // If the promise is rejected
      console.error(errorMessage);
    });
  