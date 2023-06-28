const express = require('express');
const { createMentor } = require('../controller/mentor');
const { uploadImage } = require('../middleware/multer');
const { mentorInfoValidator, validate } = require('../middleware/validator');
const router = express.Router()

router.post('/create',uploadImage.single('avatar'),mentorInfoValidator,validate,createMentor);

module.exports = router