const NewsLetter = require("../models/newsLetter");
const { generateMailTransporter } = require("../utils/email");
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
        subject: "You are Subscribed to Weekly Yogavaar NewsLetter",
        html:`
        <p> You have been subscribed successfully </p>
        `,
    });


    res.status(201).json({ subscribedEmail: email});
}


exports.unSubscribeNewsLetter = async(req,res) =>{
    const {email} = req.body;

    const subscriber = await NewsLetter.findOne({email});
    
    if(!subscriber)
    sendError(res,"Email is not in the subscription list!")

    if(!subscriber.isSubscribed)
        sendError(res,"This email is already unsubscribed");
    
    // subscriber.isSubscribed = false;
    await NewsLetter.findByIdAndDelete(subscriber._id);

    res.json({subscriber});
}

exports.muteNewsLetter = async(req,res) =>{
    console.log("muted newsLetter Email Notification")
}