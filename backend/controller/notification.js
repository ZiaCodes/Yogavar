const { generateMailTransporter } = require("../utils/email");
const { sendEmailNotificationSheetUpdate } = require("../utils/emailTemplate");

exports.notificationEmailOnUpdateSheet = async (req,res) =>{
    const {date,time,dashBoardSheet} = req.body



    var transport = generateMailTransporter();

      transport.sendMail({
        from: "imtsl.communication@gmail.com",
        to: email,
        subject:"Update: Dashboard Sheet has been updated!",
        html: sendEmailNotificationSheetUpdate(),
      });

      res.status(201).json({
        user: {
          email: email,
        }
      });

}
