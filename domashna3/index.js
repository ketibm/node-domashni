const fs = require("fs");
const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/home") {
//     if (req.method === "POST") {
//       console.log("POST");
//     }
//     if (req.method === "GET") {
//       console.log("GET");
//     }
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome home Vangel!");
//   } else if (req.url === "/contact") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome home Keti!");
//   } else if (req.url === "/content") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome students!");
//   } else {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello Vangel");
//   }
// });
// server.listen(8080);

//  //////
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/home":
      if (req.url === "POST") {
        console.log("POST");
      }
      if (req.url === "GET") {
        console.log("GET");
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome home Vangel!");
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome home Keti!");
      break;
    case "/content":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome students!");
      break;
    default:
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello Vangel");
  }
});
server.listen(8080);
