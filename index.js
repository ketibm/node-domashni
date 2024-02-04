const express = require("express");
const app = express();
const {
  getForm,
  postForm,
  getRecipes,
  deleteRecipes,
} = require("./controllers/formular");
// setiraj view engine
// da napravime middleware
// da setirame staticni fajlovi
// da povikuvame HTTP metodi
app.set("view engine", "ejs");
// specificirame deka req.body ke ocekuvame da bide json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ni gi zema fajlovite od staticniot folder
app.use(express.static("public"));
// Controllers/handlers
// vnesi nov student so ime prezime i prosek
app.get("/form", getForm);
// post na taa forma
app.post("/form", postForm);
// da gi zememe site studenti
app.get("/recepti", getRecipes);
// da izbriseme student so get baranje bidejki preku link se pristapuva linkot istiot mora da koristi GET baranje
app.get("/brishi", deleteRecipes);
app.listen(8000, () => console.log("Server started at port 8000!"));
