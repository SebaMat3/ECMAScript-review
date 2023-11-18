// String paddings are used to add custom paddings to a string, 
const string = 'Hello';

// Either at the start of the string-> .padStart(n° of total characters ,'custom string padding')
console.log(string.padStart(11,'-'));
    // ------Hello

//  Or at the end of it -> .padEnd(same logic but filling the string at the end).
console.log(string.padEnd(15,'lo'));
    // Hellolololololo
