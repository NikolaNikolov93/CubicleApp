const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const constants = require("./constants");
const routes = require("./router");

const app = express();

expressConfig(app);
handlebarsConfig(app);
app.use(routes);
// app.use()
app.listen(constants.PORT, () =>
  console.log(`Server is running on port: ${constants.PORT}...`)
);
