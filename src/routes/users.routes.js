const express = require("express");
const {
  userRegistration,
  userLogin,
  userLogout,
} = require("../controllers/users.controller");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/registration", userRegistration);
router.post("/login", userLogin);
router.delete("/logout", authMiddleware, userLogout);

module.exports = router;
