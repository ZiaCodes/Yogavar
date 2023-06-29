const express = require('express');
const { createMentor, updateMentor, removeMentor, searchMentor, getLatestMentors, getSingleMentor } = require('../controller/mentor');
const { uploadImage } = require('../middleware/multer');
const { mentorInfoValidator, validate } = require('../middleware/validator');
const router = express.Router()

router.post(
    '/create',
    uploadImage.single('avatar'),
    mentorInfoValidator,
    validate,
    createMentor
);

router.post(
    '/update/:mentorId',
    uploadImage.single('avatar'),
    mentorInfoValidator,
    validate,
    updateMentor
);

router.delete(
    '/:mentorId',
    removeMentor
);

router.get(
    '/search', 
    searchMentor
);

router.get(
    '/latest-uploads', 
    getLatestMentors
);

router.get(
    '/single/:id', 
    getSingleMentor
);

module.exports = router