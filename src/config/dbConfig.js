const mongoose = require("mongoose");
const constants = require("../constants");

async function dbConnect() {
  await mongoose.connect(constants.URL);
}

module.exports = dbConnect;
