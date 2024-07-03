const authMiddleware = (req, res, next) => {
  if (req.session && req.session.csrfToken) {
    next();
  } else {
    res.status(401).json({ mssage: "You are not authorized" });
  }
};

module.exports = { authMiddleware };
