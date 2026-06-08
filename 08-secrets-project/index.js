import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();
const PORT = process.env.PORT || 8080; // Use the PORT from environment variables or default to 8080
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  const { password } = req.body;
  if (password == process.env.SECRET_PASSWORD) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.send(
      "<p>Sorry, that's not the correct password. <a href='/'>Try again!</a></p>",
    );
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
