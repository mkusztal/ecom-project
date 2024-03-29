const findAllClothes = require("../models/clothes.model");

const getAllClothes = async (req, res) => {
  try {
    const clothes = await findAllClothes();
    res.status(200).json({ clothes });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
module.exports = { getAllClothes };
