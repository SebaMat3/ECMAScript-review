// Declaring class
class Example {}

// Initializing class instance
//const example = new Example;

// Let's dive deeper on class fundamentals
class User {
    //methods
    greeting(){
        return 'Hi!';
    }
    
};

// Instances & method calling
const sebaMate = new User();
console.log(sebaMate.greeting());
const stevie = new User();
console.log(stevie.greeting());

// Constructor

class User {

    constructor (){
        console.log('New User')
    }
    greeting(){
        return 'Hi!';
    }
}
// Initializing instance using constructor
const david = new User(); // logs 'New User'

// This

class User {
    constructor (name){
        this.name = name;
    }
    //methods
    speak(){
        return 'Hello!';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new User('Ana');
console.log(ana.greeting());


// Setters & Getters
class User {
    //constructor
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    get UAge () {
        return this.age;
    }
    set UAge (n) {
        this.age = n;
    }
}
const bebeloper = new User('Bebe', 33);
console.log(bebeloper.UAge);
console.log(bebeloper.UAge = 23);