const express = require("express");
const app = express();
const { getAnaliza, postAnaliza } = require("./handlers/analiza");
app.use(express.urlencoded({ extended: true }));
app.get("/analiza", getAnaliza);
app.post("/analiza", postAnaliza);
app.listen(3000, () => console.log("Server listening at port 3000"));
