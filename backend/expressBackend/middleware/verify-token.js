const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log(req.body);
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decodedToken = jwt.verify(token, "thisisthesecretyabbadabbado123");
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};
