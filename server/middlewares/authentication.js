const users = require("../models/user");
const jwt = require("jsonwebtoken");

const authentication = async (req,res,next) => {
    try{
    const {token} = req.headers;
    
    if (!token) {
        next({code: 400, message: "access token required"});
    }

    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(jwtPayload);

    const user = await users.findOne({
        where :{
            _id: jwtPayload.id
        }
    })

    if (!users) {
    next({ code: 401, message: "invalid access token!" });
    }
    req.currentUser = {
        ...user.dataValues, 
        // role :'admin'
    }
    next()
        }catch(error){
            next(error)
        }
}
module.exports = authentication;