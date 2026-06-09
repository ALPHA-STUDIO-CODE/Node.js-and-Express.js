import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "Weekday";
  let adv = "Keep pushing forward!";

  if (day === 0 || day === 6) {
    type = "Weekend";
    adv = "Enjoy your weekend!";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
