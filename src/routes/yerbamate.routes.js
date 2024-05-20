const express = require("express");
const { getAllYerbamate } = require("../controllers/yerbamate.controller");

const router = express.Router();

router.get("/yerbamate", getAllYerbamate);

module.exports = router;
