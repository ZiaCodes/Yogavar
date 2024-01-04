const ticketSchema = require("../models/tickets")
const {sendError} = require('../utils/helper');


exports.createTicket = async(req,res) =>{
    const {
        ticketNo, 
        reportedOn, 
        age, 
        ageSlab, 
        status, 
        ticketType, 
        affectedUser, 
        ticketDetails, 
        ticketSummary, 
        workNotes,
        commentsWorkNotes,
        baseLocation,
        locationCode,
        team,
        myStatus,
        myRemarks,
    } = req.body;

    const isTicketExist = await ticketSchema.findOne({ ticketNo });

    if(isTicketExist ) 
        return sendError(res, "Ticket already exist");
    

    const newTicket = ticketSchema({
        ticketNo, 
        reportedOn, 
        age, 
        ageSlab, 
        status, 
        ticketType, 
        affectedUser, 
        ticketDetails, 
        ticketSummary, 
        workNotes,
        commentsWorkNotes,
        baseLocation,
        locationCode,
        team,
        myStatus,
        myRemarks
    });

    await newTicket.save();


    res.status(201).json({newTicket});
}


exports.bulkCreateTickets = async(req,res) =>{
    let rowsDate = req.body;

    const newTicket = await ticketSchema.insertMany(rowsDate);

    res.status(201).json(`Total rows inserted: ${newTicket.length}.`);
}




// pending
exports.gteSingleTicket = async(req,res) =>{
    const {ticketNo} = req.body;

    let isTicketExist = await ticketSchema.findOne({ticketNo});

    if(!isTicketExist)
        return sendError(res, 'Ticket does not exist in the database');

    const ticketDetails = await ticketSchema.findById(isTicketExist._id);
    res.json({ticketDetails});

}


// pending
exports.getAllTickets = async(req,res) =>{
    let result = await ticketSchema.find();

    res.json({result})
}


