const { check, validationResult } = require('express-validator');

exports.userVaidator = [
    check('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Name can not be empty"),

    check('email')
        .normalizeEmail()
        .isEmail()
        .withMessage("Invalid Emial!"),

    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Password can not be empty")
        .isLength({min: 8, max: 20})
        .withMessage("Password must be 8 to 20 character long")
];

exports.validatePassword = [
    check('newPassword')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Password can not be empty")
        .isLength({min: 8, max: 20})
        .withMessage("Password must be 8 to 20 character long")
]

exports.signInValidator = [
    check('email')
        .normalizeEmail()
        .isEmail()
        .withMessage("Invalid Emial!"),

    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Password can not be empty")
]

exports.validate = (req, res, next) => {
    const error = validationResult(req).array();

    if(error.length){
        return res.json({error: error[0].msg})
    }

    next();

}