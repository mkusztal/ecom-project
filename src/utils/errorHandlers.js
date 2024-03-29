const errorHandler = (err, req, res) => {
  res.status(500).json({ message: err });
};

const notFoundHandler = (req, res) => {
  res.status(404).json({ message: "Not found..." });
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
