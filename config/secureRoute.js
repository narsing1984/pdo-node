const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("./constants");

module.exports = function checkToken(req, res, next) {
  var token = req.token;
  if (token) {
    jwt.verify(token, SECRET_KEY, (err, decode) => {
      if (err) {
        res.json({ status: 500, message: "INVALID TOKEN", error: err.message });
      } else {
        return;
      }
    });
  } else {
    res.json({
      status: 500,
      message: "NO TOKEN PROVIDE",
      error: "token must be provide in header for endpoint access"
    });
  }
};
