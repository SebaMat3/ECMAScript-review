// var variables can be reassigned.
var lastName = 'Foster';
lastName = 'Greenfield';
console.log(lastName);

//let variables too.
let fruit = 'Orange';
fruit = 'Papaya';
console.log(fruit);

//const variables cannot.
const ANIMAL = 'Dog';
ANIMAL = 'Cat';
console.log(ANIMAL)

//lets create a const variable containing a function (Arrow function)
const fruits = () => {
    if (true){
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Banana';  // block scope
        const fruit3 = 'Strawberry'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();