const express = require('express');
const { notificationEmailOnUpdateSheet } = require('../controller/notification');
const router = express.Router();

router.post(
    '/send-notification-email',
    notificationEmailOnUpdateSheet
)

module.exports = router