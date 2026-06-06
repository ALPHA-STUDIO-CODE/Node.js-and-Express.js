import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();
const PORT = process.env.PORT || 8080; // Use the PORT from environment variables or default to 8080
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

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
