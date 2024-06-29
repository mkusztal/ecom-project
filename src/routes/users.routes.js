const express = require("express");
const {
  userRegistration,
  userLogin,
} = require("../controllers/users.controller");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/registration", userRegistration);
router.post("/login", userLogin);

module.exports = router;
