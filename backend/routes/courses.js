const express = require('express');
const { isAdmin, isAuth } = require('../middleware/auth');
const {  uploadCourse, createCourse } = require('../controller/course');
const { uploadVideo, uploadImage } = require('../middleware/multer');
const { parseData } = require('../middleware/helper');
const router = express.Router()

router.post(
    '/upload-course',
    isAuth,
    isAdmin,
    uploadVideo.single('video'),
    uploadCourse
)

router.post(
    '/create',
    isAuth,
    isAdmin,
    parseData,
    uploadImage.single('poster'),
    createCourse
)

module.exports = router