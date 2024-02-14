const User = require('../models/user');
const jwt = require('jsonwebtoken');
const EmailVerificationToken = require('../models/emailVerificationToken');
const passwordResetToken = require('../models/passwordResetToken');
const { isValidObjectId } = require('mongoose');
const { generateOTP, generateMailTransporter } = require('../utils/email');
const { sendError, generateRandomByte } = require('../utils/helper');
const {  verifyEmailTemplate, generateNewOTPTemplate, resetPasswordEmailTemplate, resetPassSuccessfulEmailTemplate } = require('../utils/emailTemplate');


//create a new user (Method)
exports.create = async (req,res) => {
    const{name, email,phoneNumber,gender,age,company, password} = req.body;

    // checking if same email exist or not
    const oldUser =await User.findOne({ email });
    if(oldUser) 
        return sendError(res, "This email is already in use");

    // creating new User
    const newUser = new User({name, email, phoneNumber, gender, age, company, password});
    await newUser.save();


    // generating 6 digit OTP
    let OTP = generateOTP();

    // Storing OTP in db
    const newEmailVerificationToken = new EmailVerificationToken({owner: newUser._id, token:OTP});
    await newEmailVerificationToken.save();


    //Send to user OTP
    var transport = generateMailTransporter();

      transport.sendMail({
        from: "yogavaar@gmail.com",
        to: newUser.email,
        subject:"Email Verification",
        html: generateNewOTPTemplate(OTP),
      });

      res.status(201).json({
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          
        }
      });
};


exports.verifyEmail = async (req,res) =>{
  const {userId, OTP} = req.body

  if( !isValidObjectId(userId) )
    return sendError(res,"Invalid userId!");

  const user = await User.findById(userId)

  if(!user)
    return sendError(res, "userId not found!",404);


  if(user.isVerified)
    return res.json({message:"user is already verified!"});

  const token = await EmailVerificationToken.findOne({owner: userId});

  if(!token) 
    return sendError(res, "Token not found");

  const isMatched = await token.compareToken(OTP)

  if(!isMatched) 
    return sendError(res,"Please submit a valid OTP!");

  user.isVerified = true;
  await user.save()

  await EmailVerificationToken.findByIdAndDelete(token._id);

  //Send to user OTP
  var transport = generateMailTransporter();

  transport.sendMail({
    from: "verification@yogavar.com",
    to: user.email,
    subject: "Welcome to Yogavar",
    html: verifyEmailTemplate(),
  });

  const jwtToken = jwt.sign({userId: user._id},process.env.JWT_SECRET_TOKEN,{expiresIn:'7d'})

  res.json({
    user:{id: user._id, name: user.name, email: user.email,
    token: jwtToken},
    message: " Your Email is verified!",
    isVerified: user.isVerified
  })
}



exports.reSendEmailVerificationToekn = async (req, res) =>{
  const {userId} = req.body

  const user = await User.findById(userId)
  if(!user) 
    return sendError(res, "userId not found!", 404);

  if(user.isVerified) 
    return res.json({message:"user is already verified!"});

  const alreadyHasToken = await EmailVerificationToken.findOne({owner: userId});

  if(alreadyHasToken)
    return res.json({message:"Only after an hour, You can request another OTP!"});

       // generating 6 digit OTP
       let OTP = generateOTP();
   
       // Storing OTP in db
       const newEmailVerificationToken = new EmailVerificationToken({owner: user._id, token:OTP});
       await newEmailVerificationToken.save();
   
   
       //Send to user OTP
       var transport = generateMailTransporter();
   
         transport.sendMail({
           from: "verification@yogavar.com",
           to: user.email,
           subject:"Email Verification",
           html: generateNewOTPTemplate(OTP),
         });
   
         res.json({message:"New OTP has been sent to your email account."});

}


exports.forgetPassword = async(req,res) => {
  const {email} = req.body;

  if(!email) return sendError(res, 'Email is Missing !')

  const user = await User.findOne({email})
  if(!user) return sendError(res, 'user not found!',404);

  const alreadyHasToken = await passwordResetToken.findOne({owner: user._id})
  if(alreadyHasToken) return sendError(res, "only after an hour you can generate another token!");

  const token = await generateRandomByte();
  const newPasswordResetToken = await passwordResetToken({owner: user._id,token})
  await newPasswordResetToken.save();

  const resetPasswordUrl = `http://yogavar.vercel.app/auth/reset-password?token=${token}&id=${user._id}`;

  //Send to email to user
  var transport = generateMailTransporter();
   
  transport.sendMail({
    from: "security@yogavar.com",
    to: user.email,
    subject:"Reset Password Link",
    html:resetPasswordEmailTemplate(resetPasswordUrl),
  });

  res.json({message: "Passwrd reset Link has been sent to your email account !"});

};


exports.sendResetPasswordTokenStatus = (req,res)=>{
  res.json({valid: true})
}



exports.resetPassword = async(req,res) =>{
  const {newPassword, userId} = req.body 
  const user = await User.findById(userId);
  const matched = await user.comparePassword(newPassword);

  if(matched)
    return sendError(res , "New Password must be different from the old password.");

  user.password = newPassword;
  await user.save();

  await passwordResetToken.findByIdAndDelete(req.resetToken._id);

  //Send to email
  var transport = generateMailTransporter();
   
  transport.sendMail({
    from: "security@yogavar.com",
    to: user.email,
    subject:"Password Reset successfully",
    html:resetPassSuccessfulEmailTemplate(),
  });

  res.json({message: " Reset password is successfully."})
}

exports.signIn = async(req, res) =>{
  const {email, password} = req.body
  const user = await User.findOne({email})
  if(!user) return sendError(res, "Email and password mismatch");

  const matched = await user.comparePassword(password)
  if(!matched) return sendError(res, "Email and password mismatch");

  const {_id, name, phoneNumber ,gender, age, company, role, isVerified} = user
  const jwtToken = jwt.sign({userId: _id}, process.env.JWT_SECRET_TOKEN,{expiresIn:'7d'})

  res.json({user: {id: _id, name, email,phoneNumber, gender, age, company, role, jwtToken, isVerified}})
}