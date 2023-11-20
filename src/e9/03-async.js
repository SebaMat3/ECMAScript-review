//E8 brought us asynchronism to JS -> Now we can apply it to iterable objects.

// Inside a generator
async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
// Instanciating the generator function
const other = anotherGenerator();
other.next().then(response => console.log(response.value)); //1
other.next().then(response => console.log(response.value)); //2
other.next().then(response => console.log(response.value)); //3

console.log('Hello'); // Hello will be printed before anotherGenerator() returns

//Practicing the same on a for loop
async function arrayOfNames(array){
    for await (value of array) {
        console.log(value);
    }
}
//Instanciating the function
const names = arrayOfNames(['Kevin','Julia','Rose','Ana','Rodrigo']);
console.log('After');