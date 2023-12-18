const {
  convertMilesToKm,
  convertCelsiusToFahrenheit,
  convertPoundsToKilogram,
  convertFeetToMeters,
} = require("./conversion");
// const value = require("./conversion")
// value.convertMilesToKm()

const {
  taskOne,
  taskTwo,
  taskThree,
  taskFour,
  taskFive,
} = require("./students");
//
console.log(convertMilesToKm(4) + " km");
console.log(convertCelsiusToFahrenheit(3) + " F");
console.log(convertPoundsToKilogram(2) + " kg");
console.log(convertFeetToMeters(4) + " m");
//
const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

console.log(taskOne(studenti));
console.log(taskTwo(studenti));
console.log(taskThree(studenti));
console.log(taskFour(studenti));
console.log(taskFive(studenti));
