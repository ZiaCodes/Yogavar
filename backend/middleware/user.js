const { isValidObjectId } = require("mongoose")
const PasswordResetToekn = require("../models/passwordResetToken")
const { sendError } = require("../utils/helper")

exports.isValidPasswordResetToken = async(req, res,next) =>{
    const {userId, token}=req.body

    if(!token.trim() || !isValidObjectId(userId))
        return  sendError(res, "Invalid Request!")
    const resetToken = await PasswordResetToekn.findOne({owner: userId})
    if(!resetToken) 
        return sendError(res, "Unauthorized access, invalid request..")

    const matched = await resetToken.compareToken(token)
    if(!matched)
        return sendError(res, "Unauthorized access, invalid request !")
    
    req.resetToken = resetToken;
    next();
}