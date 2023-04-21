<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="#">
    <img src="https://miro.medium.com/max/440/1*J3G3akaMpUOLegw0p0qthA.png" alt="Logo" width="250px">
  </a>
  </p>

  <p align="center">
    Rest Apis for <b>Sign-In , Sign-Up</b>, <b>OTP</b> ,<b> Email verification </b>,<b> Forget  password </b> and more ..
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="#">Report Bug</a>
    ·
    <a href="#">Request Feature</a>
  </p>


<!-- ABOUT THE PROJECT -->
## About The Project

Here's why you should use this template to minimize your time.
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a template from scratch
* You should element DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. 
So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. 


### Built With

* [Nodejs]() - javaScript runtime enviroment
* [ExpressJs]() - minimalist web framework for Node.js
* [bcrypt]() - for hashing password and tokens
* [dotenv]() - for hiding sensetive keys and tokens
* [express-async-errors]() - for handling async's exceptions error without using try______and catch mathod. 
* [express-validator]() - for catching errors in terminals
* [jsonwebtoken]() - for session and validation while accesing private routes into the application
* [mongoose]() - MongoDb instances , it makes easy to work with MongoDB data base.
* [morgan]() - HTTP request logger middleware for node.js
* [nodemailer]() - for sending emails and Otp to users.

### Tools You can use to test the Rest Apis
 *[POTMAN]()
 
 ### Different Routes you can use 
 
 * [api/user/create]() - for Creating a new user
 * [api/user/signIn]() - for login into the application
 * [api/user/verify-email]() - for verifying the email address using an uique OTP
 * [api/user/resend-email-verificationToken]() - for resending OTP ( restricted for an hour)
 * [api/user//forget-password]() - If you forget your password
 * [api/user/verify-pass-reset-token]() -verify if the reset password token is valid or not
 * [api/user/reset-password]() - for changing password of the user



<!-- GETTING STARTED -->
## Getting Started

Just Fork the repository and make a clone, in your local machine so that you can run it locally and thats it, you are done.




## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.








