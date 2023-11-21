// .replace()is used to find and replace the first ocurrences of a selected string to a text variable.
const mensaje = "JavaScript is wonderful, with JavaScript I can create the future of the web."

console.log(mensaje.replace("JavaScript", "Python"));
// Python is wonderful, with JavaScript I can create the future of the web.

//.replaceAll() is used to find and replace all the ocurrences of a selected string to a text variable.
console.log(mensaje.replaceAll("JavaScript", "Python"));
// Python is wonderful, with Python I can create the future of the web.

// You can search for regular expressions.
console.log(mensaje.replaceAll(/a/g, "*"));
//J*v*Script is wonderful, with J*v*Script I c*n cre*te the future of the web.

//Example
const inputText = "If you're :) and you know it :clap your hands :clap :clap"

const emojiReplace = (text) => {
  let emojized = ""
  emojized = text.replaceAll(':)', '😀')
  emojized = emojized.replaceAll(':clap', '👏🏻')

  return emojized
}

console.log(emojiReplace(inputText))