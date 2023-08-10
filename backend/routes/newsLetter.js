const express = require('express');
const { createEmailNewsLetter, unSubscribeNewsLetter } = require('../controller/newsLetter');
const { newsLetterValidator, validate } = require('../middleware/validator');
const router = express.Router()

router.post(
    '/create',
    newsLetterValidator,
    validate,
    createEmailNewsLetter
)


router.post(
    '/unsubscribe',
    newsLetterValidator,
    validate,
    unSubscribeNewsLetter
)

module.exports = router