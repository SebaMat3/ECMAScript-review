// .flat(n°ofDepthLevel)
const array = [1,1,2,3,4, [1,3,5,6, [1,2,4]]];
console.log(array.flat(3));
/* Output
[
  1, 1, 2, 3, 4,
  1, 3, 5, 6, 1,
  2, 4
]
 */

// .flatMap()
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));
/* Output
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
 */
