const http = require("http");

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

const server = http.createServer((req, res) => {
  if (req.url === "/convert") {
    if (req.method === "POST") {
      const data = convertMilesToKm();
      res.end("For 2 miles in km is 3.2 km");
    } else if (req.method === "GET") {
      const data = convertFeetToMeters();
      res.end("For 1 feet in meters is 0.3 m");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end();
    }
  }
});
server.listen(8080);
