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
        subject: "Welcome to Yogavaar NewsLetter",
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
                Yogavaar Newsletter 
            </h1>
            <p 
            style="font-size: 0.8rem;"
            >Where we will sent you weekly Email,
            </p>
            <p 
            style="font-size: 0.8rem;"
            > about our product promotions,
            </p>
            <p> Discount and many more . </p>
        </div>
        <br>
        <div>
            <p>
               <a style="text-decoration: none;
               background-color: crimson;
               padding: 10px;
               color: #fff;
               border-radius: 3px;" 
               href="http://yogavar.vercel.app/">
                Explore Now
                </a>
            </p>
            <br>
            <p style="color:rgba(0, 0, 0, 0.46)">Thank you</p>
            <p style="color:rgba(0, 0, 0, 0.46)">Team Yogavar</p>
        </div>

        <br> <br>
        
        <p 
        style="font-size: 0.4rem;opacity: 0.2;padding:5px"
        > Don't want to receive such Emails?
        <br>
        <a style="color:"#fff" href="#">Unscribe </a>
        </p>

</body>
        `,
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