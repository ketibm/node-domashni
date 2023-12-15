const people = [
  { name: "Ana", sex: "female", age: 28 },
  { name: "Jovan", sex: "male", age: 25 },
  { name: "Jane", sex: "male", age: 22 },
  { name: "Jovana", sex: "female", age: 27 },
  { name: "Eleonora", sex: "female", age: 20 },
];

//  Филтрирање на дадена низа по даден параметар

const filteredPeople = people.filter(
  (person) => person.sex === "female" && person.age >= 25
);
console.log(filteredPeople);

//
function filterByAge(people) {
  return people.age >= 25;
}
const age = people.filter(filterByAge);
console.log(age);

function filterBySex(people) {
  return people.sex === "female";
}
const female = people.filter(filterBySex);
console.log(female);

//  Сортирање на дадена низа по даден параметар

const sortedByAge = people.sort((a, b) => b.age - a.age);
console.log(sortedByAge);

//
function compareByName(people) {
  return people.sort((a, b) => a.name.length - b.name.length);
}

console.log(compareByName(people));
//

const numbers = [33, 14, 25, 28, 42, 57, 9, 2];
//  Сумирање на параметри од дадена низа

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//  Пронаоѓање на член од дадена низа

const oddNumber = numbers.find((number) => number % 2 !== 0 && number > 50);
console.log(oddNumber);

//
function findOddNumber(numbers) {
  const oddNumber = numbers.find((number) => number % 2 !== 0 && number > 50);

  return oddNumber;
}
console.log(findOddNumber(numbers));

//

const oddNumbers = [];
numbers.forEach((number) => {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
});
console.log(oddNumbers);
