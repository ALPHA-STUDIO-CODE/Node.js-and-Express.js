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

// Custom middleware to log the request method and URL
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const { firstName, lastName, email } = req.body;
  res.send(
    `Received data: First Name - ${firstName}, Last Name - ${lastName}, Email - ${email}`,
  );
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
