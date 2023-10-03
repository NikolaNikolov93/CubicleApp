const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  difficultyLevel: Number,
  description: String,
  accessories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Accessory",
    },
  ],
});
const Cube = mongoose.model("Cube", cubeSchema);
module.exports = Cube;
