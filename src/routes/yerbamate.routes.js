const express = require("express");
const {
  getAllYerbamate,
  postProduct,
} = require("../controllers/yerbamate.controller");
const imageUpload = require("../middleware/imageUpload");

const router = express.Router();

router.get("/yerbamate", getAllYerbamate);
router.post("/post_product", imageUpload, postProduct);

module.exports = router;
