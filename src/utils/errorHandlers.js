const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
};

const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: "Not Found" });
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
