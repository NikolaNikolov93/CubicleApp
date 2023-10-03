const router = require("express").Router();
const cubeServices = require("../services/cubeService");

router.get("/create", (req, res) => {
  res.render("cube/create");
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
router.get("/:cubeId/details", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeServices.getSingleCube(cubeId).lean();
  console.log(cube);
  if (!cube) {
    res.redirect("404");
  }
  res.render("cube/details", { ...cube });
});
router.get("/:cubeId/attach-accessory", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeServices.getSingleCube(cubeId).lean();
  res.render("accessory/attach", { cube });
});
module.exports = router;
