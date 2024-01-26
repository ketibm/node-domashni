const http = require("http");
const url = require("url");
const {
  welcome,
  test,
  handleUser,
  handleNotFound,
} = require("./handlers/handler");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === "/welcome") {
    welcome(req, res);
  } else if (parsedUrl.pathname === "/test") {
    test(req, res);
  } else if (parsedUrl.pathname === "/user") {
    handleUser(req, res, parsedUrl.query.email);
  } else {
    handleNotFound(req, res);
  }
});
const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on port : ${port}`);
});
