const express = require('express');
const { createTicket, bulkCreateTickets, gteSingleTicket, getAllTickets } = require('../controller/tickets');
const { validateTickets, validate } = require('../middleware/validator');
const router = express.Router()

router.post(
    '/create',
    validateTickets,
    validate,
    createTicket
)

router.post(
    '/createbulk',
    bulkCreateTickets
)

router.get(
    '/gteSingleticket',
    gteSingleTicket
)

router.get(
    '/getalltickets',
    getAllTickets
)



module.exports = router