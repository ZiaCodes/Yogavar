const User = require("../models/user");
const { generateMailTransporter } = require("../utils/email");
const { uniVersalTemplate } = require("../utils/emailTemplate");
const { generateUserPersonalData } = require("../utils/generateUserData");
const { sendError } = require("../utils/helper");

exports.permanantDeleteAccount = async(req, res) =>{
  const {userId} = req.body;  
    if(!userId) 
      return sendError(res, 'userId is missing!')

    const userToBeDelete = await User.findById(userId);

    console.log(userToBeDelete)
  
    if(!userToBeDelete) 
      return sendError(res, "user not found!")
  
    await User.findByIdAndDelete(userToBeDelete._id);
    res.status(200).json({message: "Your Account has been deleted successfully."});
  
  }

exports.generatePersonalData = async(req,res) =>{
    const {userId} = req.body;

    let userDeltails = {}
    const existingUser = await User.findById(userId);

    if(!existingUser)
        return sendError(res, "No such user exist in database!");


    userDeltails ={
        name : existingUser.name,
        contact: existingUser.phoneNumber,
        email : existingUser.email,
        age : existingUser.age,
        compnay : existingUser.company,
        Verification : existingUser.isVerified,
        userRole : existingUser.role
    }

    generateUserPersonalData(userDeltails,userId);

    //Send to email
  var transport = generateMailTransporter();
   
  transport.sendMail({
    from: "security@yogavar.com",
    to: userDeltails.email,
    subject:"Download Your Personal Data",
    html: uniVersalTemplate("https://yogavar.vercel.app/"),
  });
    
    res.json({message: "Your personal Data has been generated Successfully!"});



}