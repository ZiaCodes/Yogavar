const NewsLetter = require("../models/newsLetter");
const { generateMailTransporter } = require("../utils/email");
const { WelcomeSubEmailTemplate } = require("../utils/emailTemplate");
const { sendError } = require("../utils/helper");

exports.createEmailNewsLetter = async(req, res) =>{
    const {email} = req.body;

    const oldSubscriber =await NewsLetter.findOne({ email });
    if(oldSubscriber) 
        return sendError(res, "This email is already subscribed!");
    

    const newSubscriber = NewsLetter({email});
    await newSubscriber.save();


    var transport = generateMailTransporter();

    transport.sendMail({
        from: "verification@yogavar.com",
        to: newSubscriber.email,
        subject: "Welcome to Yogavaar NewsLetter",
        html:WelcomeSubEmailTemplate(),
    });


    res.status(201).json({ subscribedEmail: email});
}


exports.unSubscribeNewsLetter = async(req,res) =>{
    const {email} = req.body;

    const subscriber = await NewsLetter.findOne({email});

    console.log(subscriber);
    
    if(!subscriber)
        return sendError(res,"Email is not in the subscription list!");
    
    await NewsLetter.findByIdAndDelete(subscriber?._id);

    // subscriber.isSubscribed = false;

    res.json({message : "You have unsubscribed Successfully!"});
}

exports.muteNewsLetter = async(req,res) =>{
    console.log("muted newsLetter Email Notification")
}