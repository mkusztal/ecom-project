const {
  addUserToDatabase,
  findUserInDatabase,
} = require("../models/users.model");
const { uuidv7 } = require("uuidv7");
const os = require("os");
const validator = require("express-validator");
const jwtwebtoken = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "../../.env" });

const userRegistration = async (req, res) => {
  const { email, password } = req.body;

  // generate id
  const id = uuidv7().slice(0, 32); // id = 33 is max :D

  // get all data about client and send a file to the folder!
  console.log("Host name: ", os.hostname());
  console.log("Type: ", os.type());
  console.log("Platform: ", os.platform());
  console.log("Machine architecture: ", os.arch());
  console.log("Uptime: ", os.uptime());
  console.log("LoadAvg: ", os.loadavg());
  console.log("Release: ", os.release());
  console.log("Network Interfaces: ", os.networkInterfaces());

  try {
    const addUser = await addUserToDatabase(id, email, password);

    res.status(200).json(addUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!validator.check(email).isEmail()) {
      res.status(409).json({ message: "isEmail check failed" });
    }

    if (!validator.check(password).isLength({ min: 5 })) {
      res.status(409).json({ message: "Password is too short" });
    }

    const loggedUser = await findUserInDatabase(email, password);

    req.session.email = loggedUser.email;

    // generate JWT
    const token = jwtwebtoken.sign(
      {
        id: loggedUser.id,
        email: loggedUser.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" },
    );

    console.log("Logged in!");
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const userLogout = async (req, res) => {
  try {
    req.session.destroy();
    res.json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { userRegistration, userLogin, userLogout };
