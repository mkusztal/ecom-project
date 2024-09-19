const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const crypto = require("crypto");
// const https = require("https");
// const fs = require("fs");
const yerbamate = require("./routes/product.routes");
const registration = require("./routes/users.routes");
const email = require("./routes/email.routes");
const { errorHandler, notFoundHandler } = require("./utils/errorHandlers");
dotenv.config({ path: "./.env" });
const app = express();
const port = process.env.PORT;

const generateCSRFTToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

// middlewares
app.use(
  cors({
    credentials: true,
    origin: "https://ecom-project-mk-8e79c4754866.herokuapp.com/",
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/build/index.html")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(helmet());
app.use(
  session({
    secret: process.env.ES_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }, // Set secure: true if using HTTPS
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
app.use("/api", email);

// error handler
app.use(errorHandler);
app.use(notFoundHandler);

// jsonwebtoken

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// const options = {
//   key: fs.readFileSync(path.join(`./config/cert`, "sslkey.pem")),
//   cert: fs.readFileSync(path.join(`./config/cert`, "sslcert.pem")),
//   passphrase: process.env.PASS_PHRASE,
// };

// https.createServer(options, app);

const server = app.listen(port || 8000, () => {
  console.log(`Server is running on port 8000...`);
});

module.exports = server;

/**
 * @param {} asdsda sdsad
 */
