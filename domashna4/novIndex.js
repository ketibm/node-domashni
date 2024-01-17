const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/semos") {
    fs.readFile("domashna.txt", "utf-8", (err, data) => {
      if (err) {
        res.end("Error reading the file");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      }
    });
  } else if (req.method === "POST" && req.url === "/semos") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      fs.appendFile("domashna.txt", body + "\n", "utf-8", (err) => {
        if (err) {
          res.end("Error writing the file");
        } else {
          console.log("Data appended to the file:", body);
        }

        try {
          const parsedData = JSON.parse(body);
          console.log("Parsed data:", parsedData);
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(JSON.stringify({ result: parsedData }));
        } catch (err) {
          res.end("Error writing the file");
        }
      });
    });
  } else {
    res.end("Not Found");
  }
});

server.listen(8080);
