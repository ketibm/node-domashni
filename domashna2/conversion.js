// - Креирање на модул за конверзија на вредности од еден во друг систем
// (mi -> km, c -> f, lbs -> kg, ft -> m)

// - conversion.js
// function convertMilesToKm(1) -> 1.6
// function convertCelsuisToFahrenheit(1) -> *1.8 + 32
// function convertPoundsToKilogram(param) -> 0.45
// funtion convertFeetToMetres(param) -> 0.3

function convertMilesToKm(param) {
  return param * 1.6;
}

function convertCelsiusToFahrenheit(param) {
  return param * 1.8 + 32;
}

function convertPoundsToKilogram(param) {
  return param * 0.45;
}

function convertFeetToMeters(param) {
  return param * 0.3;
}

module.exports = {
  convertMilesToKm,
  convertCelsiusToFahrenheit,
  convertPoundsToKilogram,
  convertFeetToMeters,
};
