const router = require("express").Router();
const cubeServices = require("../services/cubeService");

router.get("/create", (req, res) => {
  res.render("create");
});
router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await cubeServices.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  res.redirect("/");
});
router.get("/:cubeId/details", (req, res) => {
  const { cubeId } = req.params;
  const cube = cubeServices.getSingleCube(cubeId);
  if (!cube) {
    res.redirect("404");
  }
  res.render("details", { ...cube });
});
module.exports = router;
