/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
function keysInObject(obj) {
  // Your code here
  let keysArray = [];

  for (let key in obj) {
    keysArray.push(key);
  }
  return keysArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
