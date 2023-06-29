const User = require("../models/user");
const { sendError } = require("../utils/helper");
const jwt = require('jsonwebtoken');

exports.isAuth = async(req,res, next)=>{
    const token = req.headers?.authorization;

    if(!token) return sendError(res, "Invalid token!")
    const jwtToken = token.split("Bearer ")[1];
    if(!jwtToken) sendError(res, 'Invalid token')
    const decode = jwt.verify(jwtToken, process.env.JWT_SECRET_TOKEN);
    const {userId} = decode;

    const user = await User.findById(userId);
    if(!user) return sendError(res, "Invalid token , no user found!",404);

    req.user = user;
    next();
}

exports.isAdmin = (req, res, next) =>{
    const { user } = req;

    if(user.role !== "admin") 
        return sendError(res, "Unauthorized access!");

    next();
}