import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 8080;
const API_URL = process.env.API_URL;

const Username = process.env.USER;
const Password = process.env.PASSWORD;
const APIKey = process.env.API_KEY;
const BearerToken = process.env.BEARER_TOKEN;

const config = {
  headers: { Authorization: `Bearer ${BearerToken}` },
};

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}random`);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from the API.");
  }
});

// To use this API, you need to create an account first with the API provider
// and get your credentials. Then, you can use the following endpoints to access
// the API with different authentication methods.
// Read the API documentation for more details on how to use these endpoints and the required parameters.
// https://secrets-api.appbrewery.com/

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}all?page=1`, {
      auth: {
        username: Username,
        password: Password,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}filter?score=5`, {
      params: { apiKey: APIKey },
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}secrets/10`, config);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
