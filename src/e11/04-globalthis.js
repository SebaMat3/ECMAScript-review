// Run on browser & see
console.log(window)
console.log(globalThis)

// On browser
window === globalThis // true

// On Node.js
global === globalThis // true