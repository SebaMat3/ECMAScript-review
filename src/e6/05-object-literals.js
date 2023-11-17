// Enhanced object literals

function newUserTrad (user, age, country) {  
    return {
 //The traditional way to set parameters as object keys         
    user: user, 
    age: age, 
    country: country 
    }
}
function newUserE6 (user, age, country, Uid) {  
    return {
    //There's no need to specify redundantly         
    user, 
    age, 
    country,
    // Unless you want to
    id: Uid
    }
}
console.log(newUserTrad('Blue',18,'Indigo'));
console.log(newUserE6('Mario', 34,'Italia', 5657 ));

