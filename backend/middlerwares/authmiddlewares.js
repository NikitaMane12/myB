const jwt = require("jsonwebtoken");
const { genrateResponse } = require("../utils/response");
exports.authenticates = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json(genrateResponse("No token provided"));
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json(genrateResponse("failed authenticate"));
    req.userId = decoded.indexOf;
    next();
  });
};

exports.authorize = (roles = []) => {
  return (req, res, next) => {
    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json(genrateResponse("Forbidden"));
    }
    next();
  };
};
