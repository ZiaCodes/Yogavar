const { check, validationResult } = require('express-validator');
const genres = require('../utils/genres');

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


exports.mentorInfoValidator = [
    check('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Mentor name is missing"),
    
    check('about')
        .trim()
        .not()
        .isEmpty()
        .withMessage("About is a required field"),
    
    check('gender')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Gender is a required field"),
]


exports.validateCourse = [

    check('title')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Title is missing!"),

    check('storyLine')
        .trim()
        .not()
        .isEmpty()
        .withMessage("StoryLine is Missing!"),

    check('releaseDate')
        .isDate()
        .withMessage("releaseDate is Missing!"),

    check('language')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Language is Missing!"),

    check('status')
        .isIn(['public', 'private'])
        .withMessage('Course status must be in either Public or Private'),
    
    check('type')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Course type is Missing!"),

    check('genres')
        .isArray()
        .withMessage("Genres must be an array of string!")
        .custom((value)=>{
            for(let g of value){
                if(!genres.includes(g)) 
                    throw Error("Invalid Genres!")
            }
            return true;
        }),

    check('tags')
        .isArray({min: 1})
        .withMessage("tags must be an array of string")
        .custom((tags) =>{
            for(let tag of tags){
                if(typeof tag !== 'string') 
                    throw Error("Tags must be an array of string")
            }
            return true;
        }),

    check('cast')
        .isArray()
        .withMessage("cast must be an array of string!")
        .custom((cast)=>{
            for(let c of cast){
                if(!isValidObjectId(c.actor)) 
                    throw Error("Invalid cast id inside Cast Id!")
                
                if(!c.roleAs?.trim()) 
                    throw Error("Role As is missing inside cast!")

                if(typeof c.leadActor !== Boolean) 
                    throw Error("only Boolean values are accepted in Lead Actor!")
            }
            return true;
        }),

    check('trailer')
        .isObject()
        .withMessage("trailer must be an object with url and public_id!")
        .custom(({url, public_id})=>{
            try {
                const result = new URL(url);
                if(!result.protocol.includes('http'))
                    throw Error("Trailer url is invalid!");

                const arr = url.split('/')
                const publicId = arr[arr.length-1].split('.')[0];
                if(public_id !== publicId)
                    throw Error("Trailer Public_id is invalid!")

            } catch (error) {
                throw Error("Trailer url is invalid!");
            }
            return true;
        }),

    check('poster')
        .custom((_,{req})=>{
            if(!req.file)
                throw Error("Poster file is missing!");
            return true;
        })

]


exports.newsLetterValidator = [
    check('email')
        .normalizeEmail()
        .isEmail()
        .withMessage("Invalid Emial!"),
]


exports.vendorValidator = [
    check('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Name can not be empty"),

    check('vendorName')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Vendor Name can not be empty"),
    
    check('location')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Location can not be empty"),
    
    check('contact')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Contact number can not be empty'),

    check('email')
        .normalizeEmail()
        .isEmail()
        .withMessage("Invalid Emial!")
]


exports.validateTickets = [

    check('ticketNo')
        .trim()
        .isNumeric()
        .withMessage('Invalid ticket number')
        .not()
        .isEmpty()
        .withMessage('Ticket number is missing'),

    check('age')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Age is missing.'),

    check('team')
        .trim()
        .not()
        .isEmpty()
        .withMessage('team is missing.'),
    
    // reportedOn
    // ageSlab,
    // status,
    // ticketType,
    // affectedUser,
    // ticketDetails,
    // ticketSummary,
    // workNotes,
    // commentsWorkNotes,
    // baseLocation,
    // locationCode,
    // myStatus,
    // myRemarks
]


exports.validate = (req, res, next) => {
    const error = validationResult(req).array();

    if(error.length){
        return res.json({error: error[0].msg})
    }

    next();

}