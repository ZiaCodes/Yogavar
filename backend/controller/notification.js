const { generateMailTransporter } = require("../utils/email");
const { sendEmailNotificationSheetUpdate } = require("../utils/emailTemplate");

exports.notificationEmailOnUpdateSheet = async (req,res) =>{
    const {email} = req.body



    var transport = generateMailTransporter();

      transport.sendMail({
        from: "imtsl.communication@gmail.com",
        to: email,
        subject:"Test Mail",
        html: sendEmailNotificationSheetUpdate(),
      });

      res.status(201).json({
        user: {
          email: email,
        }
      });

}
