const WelcomeSubEmailTemplate = () => {
    return `<body 
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
           href="https://yogavar.vercel.app/">
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
    <a style="color:"#fff" href="https://yogavar.vercel.app/newsLetter/unsubscribe">Unscribe </a>
    </p>

</body>`;

};

const generateNewOTPTemplate = (OTP) =>{
    return `<body 
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

    </body>`;
};

const verifyEmailTemplate = () =>{
    return `<body 
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

</body>`;
};


const resetPasswordEmailTemplate = (resetPasswordUrl) =>{
    return `<body 
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

</body>`
}

const resetPassSuccessfulEmailTemplate = () =>{
    return `<body 
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
               "href="https://yogavar.vercel.app/auth/signin">
                Login Now
                </a>
            </p>
            <br>
            <br>
            <p style="color:rgba(0, 0, 0, 0.46)">Thank you</p>
            <p style="color:rgba(0, 0, 0, 0.46)">Team Yogavar</p>
        </div>

        <br> <br>

</body>`
}

const uniVersalTemplate = (downlaodLink) =>{
    return `<body 
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
                YOUR PERSONAL DATA
            </h1>
            <p 
            style="font-size: 0.8rem;"
            >We have generated your all personal data that has been stored on our server.
            </p>
        </div>
        <br>
        <div>
            <p>
               <a style="text-decoration: none;
               background-color: crimson;
               padding: 10px;
               color: #fff;
               border-radius: 3px;"
               href=${downlaodLink}>
                Download Now
                </a>
            </p>
            <br>
            <p style="color:rgba(0, 0, 0, 0.46)">Thank you</p>
            <p style="color:rgba(0, 0, 0, 0.46)">Team Yogavar</p>
        </div>

        <br> <br>

</body>`;
}

module.exports = {
    WelcomeSubEmailTemplate, 
    generateNewOTPTemplate, 
    verifyEmailTemplate,
    resetPasswordEmailTemplate,
    resetPassSuccessfulEmailTemplate,
    uniVersalTemplate
}