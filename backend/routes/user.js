const express = require('express');
const { create, verifyEmail, reSendEmailVerificationToekn, forgetPassword, sendResetPasswordTokenStatus, resetPassword, signIn, createUserByAdmin, getAllUserRegisted } = require('../controller/user');
const { isValidPasswordResetToken } = require('../middleware/user');
const { userVaidator, validate, validatePassword, signInValidator } = require('../middleware/validator');
const { isAuth } = require('../middleware/auth');

const router = express.Router()

router.post('/create',userVaidator, validate ,create);
router.post('/createUserByAdmin',userVaidator, validate,createUserByAdmin);
router.post('/sign-in',signInValidator,validate,signIn);

router.post('/verify-email',verifyEmail);
router.post('/resend-email-verification-token',reSendEmailVerificationToekn);
router.post('/forget-password',forgetPassword);
router.post('/verify-pass-reset-token',isValidPasswordResetToken, sendResetPasswordTokenStatus);
router.post('/reset-password',validatePassword,validate,isValidPasswordResetToken, resetPassword);
router.get('/get-all-user',getAllUserRegisted)

router.get('/is-auth',isAuth,(req,res)=>{

    const {user} = req;

    res.json({
        user: {
            id: user._id,
            name:user.name,
            email:user.email,
            isVerified: user.isVerified
        }})
});

module.exports = router