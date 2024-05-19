const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
// const jwt = require("jsonwebtoken");
const clothes = require("./routes/clothes.routes");
const { errorHandler, notFoundHandler } = require("./utils/errorHandlers");
dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT;

// middlewares
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.dirname("/client/build")));
app.use(helmet());

// routes
app.use("/api", clothes);

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
