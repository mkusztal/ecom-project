const {
  findAllYerbamate,
  addProductToDatabase,
  getOneProduct,
} = require("../models/product.models");
const { uuidv7 } = require("uuidv7");

const getAllYerbamate = async (req, res) => {
  try {
    const yerbamate = await findAllYerbamate();
    res.status(200).json(yerbamate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductByID = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await getOneProduct(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postProduct = async (req, res) => {
  const { name, size, price, commission, type } = req.body;
  const image = req.file.buffer;

  const sizeNum = parseFloat(size);
  const priceNum = parseFloat(price);
  const commissionNum = parseFloat(commission);

  const id = uuidv7().slice(0, 32); // id = 33 is max :D

  try {
    const addProduct = await addProductToDatabase(
      id,
      name,
      sizeNum,
      priceNum,
      commissionNum,
      image,
      type,
    );

    res.status(200).json(addProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllYerbamate, postProduct, getProductByID };
