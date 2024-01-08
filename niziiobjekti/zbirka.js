// Prva zadaca
const array = [1, 2, 3, 4, 5];
const reverseArrayA = array.toReversed();
console.log(reverseArrayA);
// ES6
const reverseArray = [...array].reverse();

console.log(reverseArray);
console.log(array);
//ES5
// const reversedArray = array.slice().reverse();
// console.log(reversedArray);
function reversedArray(array) {
  return array.slice().reverse();
}
console.log(reversedArray(array));

// Vtora zadaca
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

function countProperties(car) {
  return Object.keys(car).length;
}
console.log(countProperties(car));

// Treta zadaca

let keys = ["name", "age", "gender"];
let values = ["Alice", 25, "female"];
function mergeArraysIntoObject(keys, values) {
  let newObject = keys.map((key, index) => [key, values[index]]);
  return Object.fromEntries(newObject);
}
console.log(mergeArraysIntoObject(keys, values));

// Cetvrta zadaca
let words = ["apple", "orange", "banana", "kiwi", "strawberry"];
function filterByValueLength(words, length) {
  let filteredArray = words.filter((word) => word.length === length);
  return filteredArray;
}

console.log(filterByValueLength(words, 6));

// Petta zadaca
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
function updateObjectProperty() {
  person.age = 35;
  return person;
}
console.log(updateObjectProperty());
