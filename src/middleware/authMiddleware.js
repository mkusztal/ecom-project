const authMiddleware = (req, res, next) => {
  if (req.session.email) {
    req.user = {
      email: req.session.email,
    };

    next();
  } else {
    res.status(401).json({ mssage: "You are not authorized" });
  }
};

module.exports = { authMiddleware };
