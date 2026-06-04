import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080; // Use the PORT from environment variables or default to 3000

app.get("/", (req, res) => {
  res.send(
    `<h1>Hello World! Alpha Studio Code first server is up and running on port ${PORT}.</h1>`,
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
