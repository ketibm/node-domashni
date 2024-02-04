const fs = require("fs");

const read = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return reject(err);
      data = JSON.parse(data);
      return resolve(data);
    });
  });
};

const write = async (fileName, data) => {
  data = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

const addRecipe = async (data) => {
  let file = await read("recepti.json");

  file.push(data);
  await write("recepti.json", file);
};

const removeRecipe = async (index) => {
  let file = await read("recepti.json");
  console.log("index type", typeof index);
  file = file.filter((recept, i) => Number(index) !== i);
  console.log("index", index);
  await write("recepti.json", file);
};

const listRecipes = async () => {
  return await read("recepti.json");
};
module.exports = {
  read,
  write,
  addRecipe,
  removeRecipe,
  listRecipes,
};
