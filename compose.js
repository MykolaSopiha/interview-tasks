const f1 = (x) => x + 1;
const f2 = (x) => x + 2;
const f3 = (x) => x + 3;
const f4 = (x) => x + 4;

/**
 * Implement compose() function that make function composition:
 * fn = compose(f1, f2, f3, f4)
 * fn(val) === f4(f3(f2(f1(val))))
 */

const compose // = ...your code here...

const f = compose(f1, f2, f3, f4);

console.log(f(3) === 13); // Explenation: ((((3 + 1) + 2) + 3) + 4) = 13

/**
 * Answer:
 */
// const compose = (firstFn, ...lastFns) => (...params) => {
//   return lastFns.reduce((acc, func) => func(acc), firstFn(...params));
// };