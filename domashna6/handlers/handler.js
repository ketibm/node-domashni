function welcome(req, res) {
  res.end("Welcome to our page");
}

function test(req, res) {
  res.end("Welcome to our test page");
}

function handleUser(req, res, email) {
  const emailPattern = /^[a-zA-Z\d_.-]+\@[a-z]+\.[a-z]{3}/;
  if (emailPattern.test(email)) {
    res.end(`Welcome user with email ${email}`);
  } else {
    res.end("Invalid email format");
  }
}

function handleNotFound(req, res) {
  res.status("404 Not Found");
}

module.exports = { welcome, test, handleUser, handleNotFound };
