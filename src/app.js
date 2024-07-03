const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const crypto = require("crypto");
// const jwt = require("jsonwebtoken");
const yerbamate = require("./routes/yerbamate.routes");
const registration = require("./routes/users.routes");
const { errorHandler, notFoundHandler } = require("./utils/errorHandlers");
dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT;

const generateCSRFTToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

// middlewares
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.dirname("/client/build")));
app.use(helmet());
app.use(
  session({
    secret: process.env.ES_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set secure: true if using HTTPS
  }),
);
app.use((req, res, next) => {
  if (!req.session.csrfToken) {
    req.session.csrfToken = generateCSRFTToken();
  }
  next();
});

// routes
app.use("/api", yerbamate);
app.use("/api", registration);

// error handler
app.use(errorHandler);
app.use(notFoundHandler);

// jsonwebtoken

app.get("*", (req, res) => {
  res.sendFile(path.join(path.dirname + "/client/build/index.html"));
});

const server = app.listen(port || 8000, () => {
  console.log(`Server is running on port 8000...`);
});

module.exports = server;

/**
 * @param {} asdsda sdsad
 */
