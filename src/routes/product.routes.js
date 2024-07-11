const express = require("express");
const {
  getAllYerbamate,
  postProduct,
  getProductByID,
} = require("../controllers/product.controller");
const imageUpload = require("../middleware/imageUpload");

const router = express.Router();

router.get("/yerbamate", getAllYerbamate);
router.get("/yerbamate/:id", getProductByID);
router.post("/post_product", imageUpload, postProduct);

module.exports = router;
