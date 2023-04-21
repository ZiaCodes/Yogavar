const nodemailer = require('nodemailer');

exports.generateOTP = (Otp_length = 6) =>{
    let OTP = "";
    for( let i=1; i <= Otp_length; i++){
        const randomValue = Math.round(Math.random() * 9);
        OTP += randomValue;
    }
    return OTP;
}

exports.generateMailTransporter = () =>
    nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.NODE_MAILER_USERNAME,
          pass: process.env.NODE_MAILER_USERPASSWORD
        }
      });

