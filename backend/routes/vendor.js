const express = require('express');
const { createVendorDetails,removeVendorDetails } = require('../controller/vendor');
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

module.exports = router