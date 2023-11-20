// Optional Chaining
const jsUpdates = {
    e9 : {
        first : 'regular expressions syntax support.',
        second : '...spread operator to desctructure objects.',
        third : ' .finally action added on promises.',
        forth : 'async & await support over iterable objects.'
    },
    e10 : {
        first : '.flat() & .flatMap() methods for broader arrays manipulation.',
        second : '.trimStart() & .trimEnd() to clean blank spaces on strings.',
        third : ' try-catch expression to program actions upon errors.',
        forth : '.fromEntries() to revert Object entries "".'
    }

}

/* Sometimes you're looking to access an object, or object property, which has been removed 
 or that is simply not available at the moment of the request.
    To avoid the program from CRASHING you can use optional chaining, 
foreseeing the missing possibility: simply adding '?' at the end of the pointed object name
 */

console.log(jsUpdates.e9?.first);//regular expressions syntax support.
console.log(jsUpdates.e10?.second);//.trimStart() & .trimEnd() to clean blank spaces on strings.
console.log(jsUpdates.e11?.first);//undefined (instead of crashing error).