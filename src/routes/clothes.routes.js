const express = require("express");
const { getAllClothes } = require("../controllers/clothes.controller");

const router = express.Router();

router.get("/clothes", getAllClothes);

module.exports = router;
