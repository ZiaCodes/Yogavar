const mongoose = require("mongoose")

// user Schema 
const newsLetterSchema = mongoose.Schema({
    email:{
        type : String,
        trim: true,
        required: true
    },
    isSubscribed:{
        type : Boolean,
        required: true,
        default: true
    },
    
}, {timestamps : true});


const NewsLetter =new mongoose.model("NewsLetter",newsLetterSchema);
module.exports = NewsLetter