const express = require("express");
const { sendEmail } = require("../controllers/email.controllers");

const router = express.Router();

router.post("/sendEmail", sendEmail);

module.exports = router;
