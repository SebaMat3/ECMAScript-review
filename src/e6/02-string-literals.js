// "Normal" way to concatenate strings
let hello = 'Hello,';
let world = 'world!';
let wakingUpMessage = hello + ' ' + world;
console.log(wakingUpMessage);

// 'Template literals' saves us spacing specification
let epicUpMessage = `${hello} ${world}`;
console.log(epicUpMessage);

// Previous way to work with multi-line templates. => adding \n + 'string'
let message = "Line 1, \n" + "line 2 \n" + "line 3."
console.log(message)

// Multi-line strings => simplifying syntax. Just by writing inside `` and jumping line as intended.
let cleanMessage = `Line 1,
line 2,
line 3.`
console.log(cleanMessage);

