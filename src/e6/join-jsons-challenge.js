// Apply default params + spread operator
function solution(json1 = {
        name: "Mr. Michi",
        food: "Pescado"
    }, json2 = {    
        age: 12,
        color: "Blanco"
    }) {
    let fullJson = {...json1, ...json2}
    console.log(fullJson);
    // return {...json1,...json2};
   }
   
   solution({
    name: "Bigotes",
    food: "Pollito"
})