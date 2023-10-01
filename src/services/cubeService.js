const uniqid = require("uniqid");
const cubes = [];
exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };
  cubes.push(newCube);
  return newCube;
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
