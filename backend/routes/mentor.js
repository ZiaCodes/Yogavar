const express = require('express');
const { createMentor, updateMentor, removeMentor, searchMentor, getLatestMentors, getSingleMentor } = require('../controller/mentor');
const { uploadImage } = require('../middleware/multer');
const { mentorInfoValidator, validate } = require('../middleware/validator');
const { isAuth, isAdmin } = require('../middleware/auth');
const router = express.Router()

router.post(
    '/create',
    isAuth,
    isAdmin,
    uploadImage.single('avatar'),
    mentorInfoValidator,
    validate,
    createMentor
);

router.post(
    '/update/:mentorId',
    isAuth,
    isAdmin,
    uploadImage.single('avatar'),
    mentorInfoValidator,
    validate,
    updateMentor
);

router.delete(
    '/:mentorId',
    isAuth,
    isAdmin,
    removeMentor
);

router.get(
    '/search',
    isAuth,
    isAdmin,
    searchMentor
);

router.get(
    '/latest-uploads',
    isAuth,
    isAdmin,
    getLatestMentors
);

router.get(
    '/single/:id', 
    getSingleMentor
);

module.exports = router