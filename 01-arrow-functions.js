// Three ways of generating the same output
function square(num) {
    return num * num;
}
// const variables are recommended for expressive functions 
const square = (num) => {
    return num * num;
}

// Whenever you have a single parameter you can simplify even more
// Not needing to specify code block{}, return nor parameters()
const square = num => num * num;

