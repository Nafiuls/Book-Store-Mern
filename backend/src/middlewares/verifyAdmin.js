const jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET;

const verifyAdmin = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .send({ message: "Access denied. No token provided." });
  }
  jwt.verify(token, jwt_secret, (error, user) => {
    if (error) {
      return res.status(403).send({ message: "Access denied. Invalid token." });
    }
    req.user = user;
    next();
  });
};

module.exports = verifyAdmin;
