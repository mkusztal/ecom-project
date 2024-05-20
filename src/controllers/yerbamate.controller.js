const { findAllYerbamate } = require("../models/yerbamate.models");

const getAllYerbamate = async (req, res) => {
  try {
    const yerbamate = await findAllYerbamate();
    res.status(200).json(yerbamate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getAllYerbamate };
