const User = require('../models/user');
const jwt = require('jsonwebtoken');
const EmailVerificationToken = require('../models/emailVerificationToken');
const passwordResetToken = require('../models/passwordResetToken');
const { isValidObjectId } = require('mongoose');
const { generateOTP, generateMailTransporter } = require('../utils/email');
const { sendError, generateRandomByte } = require('../utils/helper');


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
        html:`
        <body 
          style="background-color: #f1f1f1;
          font-family: 'Courier New', Courier, monospace;
          text-align: center;"
          >
        <div>
            <div>
                <img 
                style="width: 400px;
                height: auto;
                border-radius: 5px;"
                src="https://cdn.pixabay.com/photo/2020/08/22/12/36/yoga-5508336__340.png" 
                alt="poster">
            </div>

        </div>
        <div>
            <h1 style="font-size: 1.5rem;
                text-transform: uppercase;">
                One Time Password(OTP)
            </h1>
            <p 
            style="font-size: 0.8rem;"
            >Use it for Email verification only.</p>
        </div>

        <div 
            style="text-align: center;
            padding: 1px;
            font-size: 2rem;
            border-radius: 0.5rem;
            font-weight: bolder;"
        >
            <h1 
            style="width: 100%;
            margin: 0;">
                ${OTP}
            </h1>
        </div>

        <div class="attention">
            <p>Ps: Valid only for 1 hour.</p>
            <br>
            <p style="color:rgba(0, 0, 0, 0.46)">Thank you</p>
            <p style="color:rgba(0, 0, 0, 0.46)">Team Yogavar</p>
            <br> <br>
        </div>

    </body>
        `,
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
    html:`


    <body 
    style="background-color: #f1f1f1;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;"
    >
        <div>
            <div>
                <img 
                style="width: 400px;
                height: auto;
                border-radius: 5px;"
                src="https://cdn.pixabay.com/photo/2020/08/22/12/36/yoga-5508336__340.png" 
                alt="poster">
            </div>

        </div>
        <div>
            <h1 style="font-size: 1.5rem;
                text-transform: uppercase;">
                WELCOME TO YOGAVAR
            </h1>
            <p 
            style="font-size: 0.8rem;"
            >A journey to your ultimate health transformation .
            </p>
        </div>
        <br>
        <div>
            <p>
               <a style="text-decoration: none;
               background-color: crimson;
               padding: 10px;
               color: #fff;
               border-radius: 3px;
               " href="http://yogavar.vercel.app/">
                Explore Now
                </a>
            </p>
            <br>
            <p style="color:rgba(0, 0, 0, 0.46)">Thank you</p>
            <p style="color:rgba(0, 0, 0, 0.46)">Team Yogavar</p>
        </div>

        <br> <br>

</body>


    `,
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
           html:`
      <body 
          style="background-color: #f1f1f1;
          font-family: 'Courier New', Courier, monospace;
          text-align: center;"
          >
        <div>
            <div>
                <img 
                style="width: 400px;
                height: auto;
                border-radius: 5px;"
                src="https://cdn.pixabay.com/photo/2020/08/22/12/36/yoga-5508336__340.png" 
                alt="poster">
            </div>

        </div>
        <div>
            <h1 style="font-size: 1.5rem;
                text-transform: uppercase;">
                One Time Password(OTP)
            </h1>
            <p 
            style="font-size: 0.8rem;"
            >Use it for Email verification only.</p>
        </div>

        <div 
            style="text-align: center;
            padding: 1px;
            font-size: 2rem;
            border-radius: 0.5rem;
            font-weight: bolder;"
        >
            <h1 
            style="width: 100%;
            margin: 0;">
                ${OTP}
            </h1>
        </div>

        <div class="attention">
            <p>Ps: Valid only for 1 hour.</p>
            <br>
            <p style="color:rgba(0, 0, 0, 0.46)">Thank you</p>
            <p style="color:rgba(0, 0, 0, 0.46)">Team Yogavar</p>
        </div>

    </body>


           `,
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
    html:`
    <body 
    style="background-color: #f1f1f1;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;"
    >
        <div>
            <div>
                <img 
                style="width: 400px;
                height: auto;
                border-radius: 5px;"
                src="https://cdn.pixabay.com/photo/2020/08/22/12/36/yoga-5508336__340.png" 
                alt="poster">
            </div>

        </div>
        <div>
            <h1 style="font-size: 1.5rem;
                text-transform: uppercase;">
                Reset Your Password
            </h1>
            <p 
            style="font-size: 0.8rem;"
            >If the below link does not work , please copy the below link to reset your password .
            </p>
        </div>
        <br>
        <div>
            <p>
               <a style="text-decoration: none;
               background-color: crimson;
               padding: 10px;
               color: #fff;
               border-radius: 3px;
               " href=${resetPasswordUrl}>
                Reset Password
                </a>
            </p>
            <br>
            <p> ${resetPasswordUrl} </p>
            <br>
            <p>Ps: Valid only for 1 hour.</p>
            <p style="color:rgba(0, 0, 0, 0.46)">Thank you</p>
            <p style="color:rgba(0, 0, 0, 0.46)">Team Yogavar</p>
        </div>

        <br> <br>

</body>
    `,
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
    html:`


    <body 
    style="background-color: #f1f1f1;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;"
    >
        <div>
            <div>
                <img 
                style="width: 400px;
                height: auto;
                border-radius: 5px;"
                src="https://cdn.pixabay.com/photo/2020/08/22/12/36/yoga-5508336__340.png" 
                alt="poster">
            </div>

        </div>
        <div>
            <h1 style="font-size: 1.5rem;
                text-transform: uppercase;">
                password has been changed Successfully
            </h1>
            <p 
            style="font-size: 0.8rem;"
            >Now you can login with your new password .
            </p>
        </div>
        <br>
        <div>
            <p>
               <a style="text-decoration: none;
               background-color: crimson;
               padding: 10px;
               color: #fff;
               border-radius: 3px;
               " href="https://yogavar.vercel.app/auth/signin">
                Login Now
                </a>
            </p>
            <br>
            <br>
            <p style="color:rgba(0, 0, 0, 0.46)">Thank you</p>
            <p style="color:rgba(0, 0, 0, 0.46)">Team Yogavar</p>
        </div>

        <br> <br>

</body>
    

    `,
  });

  res.json({message: " Reset password is successfully."})
}

exports.signIn = async(req, res) =>{
  const {email, password} = req.body
  const user = await User.findOne({email})
  if(!user) return sendError(res, "Email and password mismatch");

  const matched = await user.comparePassword(password)
  if(!matched) return sendError(res, "Email and password mismatch");

  const {_id, name, isVerified} = user
  const jwtToken = jwt.sign({userId: _id}, process.env.JWT_SECRET_TOKEN,{expiresIn:'7d'})

  res.json({user: {id: _id, name, email, jwtToken, isVerified}})
}