// Arrays destructuring
let fruits = ["Apple","Banana"];
let [a,b] = fruits;

console.log(a,fruits[1]);

// Objects destructuring
const game = {
    title : 'Dwarf Fortress',
    genre : 'Roguelike, Construction & Management Simulation',
    year : '2006',
    developers : 'Tarn Adams & Zach Adams'
}
const {title , genre, year, developers} = game;

console.log(`${title} is a ${genre} game, created by ${developers} and published in ${year}`)

// Spread operators
let person = { name: 'Sebastian', age: '28'};
let country = 'AR';

let data = {...person, country};
console.log(data);

function sum (num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum (1,1,2,3);