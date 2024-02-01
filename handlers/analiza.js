const fs = require("fs");

const getAnaliza = async (req, res) => {
  try {
    let output = await parseTemplate("analyse_form");

    res.status(200).send(output);
  } catch (err) {
    res.status(500).send("Invalid server error!");
  }
};

const postAnaliza = async (req, res) => {
  const { textarea } = req.body;
  const totalCharacters = textarea.length;
  const sentences = textarea.split(/[.!?]/).length - 1;
  const words = textarea.match(/\b\w+\b/g) || [];
  const totalWords = words.length;
  const wordsLessThanFive = words.filter((word) => word.length < 5).length;
  const wordsMoreThanFive = words.filter((word) => word.length > 5).length;
  const wordsEqualToFive = words.filter((word) => word.length === 5).length;
  const wordsStartWithVowels = words.filter((word) =>
    /^[aeiouAEIOU]/.test(word)
  ).length;

  try {
    let output = await parseTemplate("analyse", {
      characters: totalCharacters,
      lessThanFive: wordsLessThanFive,
      moreThanFive: wordsMoreThanFive,
      equalToFive: wordsEqualToFive,
      sentences: sentences,
      words: totalWords,
      vowels: wordsStartWithVowels,
    });
    res.status(200).send(output);
  } catch (err) {
    res.status(500).send("Invalid server error!");
  }
};

const parseTemplate = async (template, data = null) => {
  console.log(template, data);
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        if (err) {
          return reject(err);
        }
        if (data) {
          for (d in data) {
            content = content.replace(`{{${d}}}`, data[d]);
          }
        }
        return resolve(content);
      }
    );
  });
};
module.exports = {
  getAnaliza,
  postAnaliza,
};
