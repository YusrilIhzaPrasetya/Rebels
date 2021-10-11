const user = require("../models").user;
const jwt = require("jsonwebtoken");

const authentication = async (req,res,next) => {
    const {token} = req.headers;
    if (!token) {
        next({code: 400, message: "access token required"});
    }

const jwtPayload = jwt.verify(token, process.env.SECRET_KEY_JWT);

const dataUser = await User.findByPk(jwtPayload.id);
if (!dataUser) {
  next({ code: 401, message: "invalid access token!" });
}
req.currentUser = dataUser;
next();
};

module.exports = authentication;