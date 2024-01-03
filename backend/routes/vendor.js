const express = require('express');
const { createVendorDetails } = require('../controller/vendor');
const { vendorValidator, validate } = require('../middleware/validator');
const router = express.Router()

router.post(
    '/create',
    vendorValidator,
    validate,
    createVendorDetails
)

module.exports = router