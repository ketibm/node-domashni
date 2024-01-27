const express = require("express");
const {
  getRecipes,
  addRecipes,
  editRecipes,
  deleteRecipes,
} = require("./recipes");
const app = express();
// middleware - da moze da zememe baranja so telo so json
app.use(express.json());
app.get("/recipes", getRecipes);
app.post("/recipes", addRecipes);
app.put("/recipes", editRecipes);
app.delete("/recipes", deleteRecipes);
app.listen(3000, () => console.log("Server started at port 3000 "));
