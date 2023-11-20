// .matchAll(variable holding regex) used to find match of expression inside an object
const regex = /\b(Apple)+\b/g

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

// Transformation of the iterable return to array.
const array = [...fruit.matchAll(regex)]
console.log(array)
/*
[
  [
    'Apple',
    'Apple',
    index: 0,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
  ],
  [
    'Apple',
    'Apple',
    index: 21,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
  ]
]
*/