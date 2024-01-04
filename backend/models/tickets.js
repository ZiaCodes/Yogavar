const mongoose = require("mongoose")

// vendor Schema 
const ticketSchema = mongoose.Schema({
    ticketNo:{
        type : String,
        trim: true,
        required: true,
        unique: true
    },
    reportedOn:{
        type : String,
        trim: true,
        required: true
    },
    age:{
        type : String,
        trim: true,
        required: true
    },
    ageSlab:{
        type : String,
        trim: true,
    },
    status:{
        type : String,
        trim: true,
    },
    ticketType:{
        type : String,
        trim: true,
    },
    affectedUser:{
        type : String,
        trim: true,
    },
    ticketDetails:{
        type : String,
        trim: true,
    },
    ticketSummary:{
        type : String,
        trim: true, 
    },
    workNotes:{
        type : String,
        trim: true, 
    },
    commentsWorkNotes:{
        type : String,
        trim: true, 
    },
    baseLocation:{
        type : String,
        trim: true,
            },
    locationCode:{
        type : String,
        trim: true,    
    },
    team:{
        type : String,
        trim: true,
        required: true
    },
    myStatus:{
        type : String,
        trim: true,
    },
    myRemarks:{
        type : String,
        trim: true,
    },
    
}, {timestamps : true});

ticketSchema.index({name: 'text'})


const Ticket =new mongoose.model("Ticket",ticketSchema);
module.exports = Ticket