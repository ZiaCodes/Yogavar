const express = require('express');
const { permanantDeleteAccount, generatePersonalData } = require('../controller/userAccountSettings');

const router = express.Router();

// these routes are just for testing purpose 
// authorization will be added after UI implementation
router.post('/delete-account',permanantDeleteAccount);
router.get('/request-your-personal-data',generatePersonalData);



module.exports = router;