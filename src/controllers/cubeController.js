const router = require("express").Router();
const cubeServices = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");

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
  if (!cube) {
    res.redirect("404");
  }
  const hasAccessories =
    cube.accessories === undefined ? false : cube.accessories.length > 0;
  res.render("cube/details", { ...cube, hasAccessories });
});
router.get("/:cubeId/attach-accessory", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeServices.getSingleCube(cubeId).lean();
  const accessoryIds = cube.accessories
    ? cube.accessories.map((a) => a._id)
    : [];
  const accessories = await accessoryService
    .getWithoutOwned(accessoryIds)
    .lean();

  const hasAccessories = accessories.length > 0;
  res.render("accessory/attach", { cube, accessories, hasAccessories });
});
router.post("/:cubeId/attach-accessory", async (req, res) => {
  const { cubeId } = req.params;
  const { accessory: accessoryId } = req.body;
  await cubeServices.attachAccessory(cubeId, accessoryId);
  res.redirect(`/cubes/${cubeId}/details`);
});
module.exports = router;
