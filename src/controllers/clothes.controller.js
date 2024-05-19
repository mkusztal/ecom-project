const { findAllClothes } = require("../models/clothes.models");

const getAllClothes = async (req, res) => {
  try {
    const clothes = await findAllClothes();
    res.status(200).json(clothes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getAllClothes };
