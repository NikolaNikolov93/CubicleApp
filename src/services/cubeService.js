const uniqid = require("uniqid");
const cubes = [
  {
    id: "bluigq4lmzxh1m5",
    name: "Basic Cube",
    description: "dasdas",
    imageUrl:
      "https://classteaching.files.wordpress.com/2019/09/rubiks-cube.jpg?w=640",
    difficultyLevel: 5,
  },
  {
    id: "bluigq4lmzxktwb",
    name: "Cool Cube",
    description: "dddddddddd",
    imageUrl:
      "https://cdnb.artstation.com/p/assets/images/images/046/809/847/large/anonymous-sexy-cube-cropped.jpg?1646056797",
    difficultyLevel: 6,
  },
  {
    id: "bluigq4lmzxkzo9",
    name: "Dark Cube",
    description: "aaaaaaaaa",
    imageUrl:
      "https://target.scene7.com/is/image/Target/GUEST_73622859-7bcf-4da8-b70a-9bafa7d080e2?wid=488&hei=488&fmt=pjpeg",
    difficultyLevel: 6,
  },
];
exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };
  cubes.push(newCube);
  return newCube;
};
exports.getAll = () => {
  return [...cubes];
};
exports.getSingleCube = (id) => {
  return cubes.find((cube) => cube.id === id);
};
