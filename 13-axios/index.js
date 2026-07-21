import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { getRandomActivity, filterActivity } from "./src/boredApi.js";
import { renderSuccess, renderError } from "./src/renderHelper.js";
import logger from "./src/logger.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const result = await getRandomActivity();
    logger.info(result);
    renderSuccess(res, "index.ejs", result);
  } catch (error) {
    logger.error("Failed to make request:", error.message);
    renderError(res, "index.ejs", error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    logger.info(req.body);
    const { type, participants } = req.body;
    const results = await filterActivity(type, participants);
    logger.info(results);

    const pick =
      Array.isArray(results) && results.length
        ? results[Math.floor(Math.random() * results.length)]
        : null;

    if (!pick) {
      renderError(res, "index.ejs", "No activities that match your criteria.");
      return;
    }

    renderSuccess(res, "index.ejs", pick);
  } catch (error) {
    logger.error("Failed to make request:", error.message);
    renderError(res, "index.ejs", "No activities that match your criteria.");
  }
});

app.listen(port, () => {
  logger.info(`Server running on port: ${port}`);
});
