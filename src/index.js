const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const constants = require("./constants");

const app = express();

expressConfig(app);
handlebarsConfig(app);

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(constants.PORT, () =>
  console.log(`Server is running on port: ${constants.PORT}...`)
);
