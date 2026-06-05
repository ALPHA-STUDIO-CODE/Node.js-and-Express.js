import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080; // Use the PORT from environment variables or default to 8080

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Alpha Studio Code</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/alpha", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/alpha", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/alpha", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
