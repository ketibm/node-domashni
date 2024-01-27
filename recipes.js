const { read, write } = require("./read-write");

const getRecipes = async (req, res) => {
  const recipes = await read("data.json");
  res.status(200).send(recipes);
};

const addRecipes = async (req, res) => {
  const recipes = await read("data.json");
  recipes.push(req.body);
  await write("data.json", recipes);
  res.status(201).send("Recipe added successfully");
};

const editRecipes = async (req, res) => {
  let recipes = await read("data.json");
  recipes = recipes.map((recipe, index) => {
    if (index === req.body.index) {
      return {
        ...recipe,
        ...req.body,
      };
    }
    return recipe;
  });
  await write("data.json", recipes);
  res.status(200).send("Recipe edited successfully");
};

const deleteRecipes = async (req, res) => {
  let recipes = await read("data.json");
  recipes = recipes.filter((recipe, index) => index !== req.body.index);
  await write("data.json", recipes);
  res.status(200).send("Recipe deleted successfully");
};

module.exports = {
  getRecipes,
  addRecipes,
  editRecipes,
  deleteRecipes,
};
