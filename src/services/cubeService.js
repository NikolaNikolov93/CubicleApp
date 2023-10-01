const Cube = require("../models/Cube");
const cubes = [];
exports.create = async (cubeData) => {
  const cube = await Cube.create(cubeData);
  return cube;
};
exports.getAll = (search, from, to) => {
  let filteredCubes = [...cubes];

  if (search) {
    filteredCubes = filteredCubes.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    filteredCubes = filteredCubes.filter(
      (cube) => cube.difficultyLevel >= Number(from)
    );
  }
  if (to) {
    filteredCubes = filteredCubes.filter(
      (cube) => cube.difficultyLevel <= Number(to)
    );
  }
  console.log(filteredCubes);
  return filteredCubes;
};
exports.getSingleCube = (id) => {
  return cubes.find((cube) => cube.id === id);
};