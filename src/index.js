const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const dbConnect = require("./config/dbConfig");
const constants = require("./constants");
const routes = require("./router");
dbConnect()
  .then(() => console.log(`Successfuly connected to the DB`))
  .catch((err) => console.log(`Error while connectiong in DB: ${err}`));

const app = express();

expressConfig(app);
handlebarsConfig(app);
app.use(routes);
// app.use()
app.listen(constants.PORT, () =>
  console.log(`Server is running on port: ${constants.PORT}...`)
);
