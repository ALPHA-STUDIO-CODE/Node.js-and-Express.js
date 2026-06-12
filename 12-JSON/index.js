import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true }));

let recipes = [];
try {
  const raw = fs.readFileSync(path.join(process.cwd(), "recipe.json"), "utf8");
  recipes = JSON.parse(raw);
} catch (err) {
  console.error("Unable to load recipe.json:", err);
}

app.get("/", (req, res) => {
  res.render("index", { recipe: null });
});

app.post("/recipe", (req, res) => {
  const choice = (req.body && req.body.choice) || "";
  let recipe = null;
  if (choice === "chicken") recipe = recipes[0] || null;
  else if (choice === "beef") recipe = recipes[1] || null;
  else if (choice === "fish") recipe = recipes[2] || null;

  res.render("index", { recipe });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
