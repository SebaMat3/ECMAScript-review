// Previous way to set default values on function parameters. 
function newUser(name, age, country) {
    name = name || 'Mickey';
    age = age || 22;
    country = country || 'Wonderland';
    console.log(name, age, country)
}
newUser();
newUser('Aladin', 34, 'Persia');


// E6 Simplification for default params => Simply set it on params.
function addUser(name ='Rupert', age = 68, country ='Russia' ){
    console.log(name, age, country)
}
addUser();
addUser('Pepe', 52, 'Argentina');