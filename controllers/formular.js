const recepti = require("../models/recepti");
const getForm = (req, res) => {
  res.render("formular");
  //   formular.ejs
};

const postForm = async (req, res) => {
  //posle klik na kopceto Isprati ke dojde vo ovaa funkcija
  const { recipe, ingredients, preparation, calories } = req.body;

  // Parse ingredients from the string to an object
  const parsedIngredients = ingredients.split(",").reduce((obj, ingredient) => {
    const [key, value] = ingredient.split(":").map((item) => item.trim());
    obj[key] = value;
    return obj;
  }, {});

  let data = {
    recipe,
    ingredients: parsedIngredients,
    preparation,
    calories,
  };
  console.log("Data to be added:", data);
  await recepti.addRecipe(data);

  res.redirect("./recepti");
};

const getRecipes = async (req, res) => {
  let data = await recepti.listRecipes();
  console.log("Data from recepti.list():", data);
  res.render("recepti", { data });
  //   recepti.ejs
};

const deleteRecipes = async (req, res) => {
  await recepti.removeRecipe(req.query.index);
  res.redirect("./recepti");
};
module.exports = {
  getForm,
  postForm,
  getRecipes,
  deleteRecipes,
};
