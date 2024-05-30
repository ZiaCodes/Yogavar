const express = require('express');
const { createVendorDetails,removeVendorDetails, getallvendorDetails, sendReminderToVendor } = require('../controller/vendor');
const { vendorValidator, validate } = require('../middleware/validator');
const router = express.Router()

router.post(
    '/create',
    vendorValidator,
    validate,
    createVendorDetails
)

router.post(
    '/remove',
    removeVendorDetails
)

router.get(
    '/vendorDetails',
    getallvendorDetails
)

router.post(
    '/send-reminder',
    sendReminderToVendor
)

module.exports = router