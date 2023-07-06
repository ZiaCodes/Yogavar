const express = require('express');
const { isAdmin, isAuth } = require('../middleware/auth');
const { uploadCourses } = require('../controller/courses');
const router = express.Router()

router.post(
    '/upload',
    isAuth,
    isAdmin,
    uploadCourses
)

module.exports = router