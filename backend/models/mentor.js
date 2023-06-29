const mongoose = require("mongoose")

// user Schema 
const mentorSchema = mongoose.Schema({
    name:{
        type : String,
        trim: true,
        required: true
    },
    about:{
        type : String,
        trim: true,
        required: true
    },
    gender:{
        type : String,
        trim: true,
        required: true
    },
    avatar:{
        type : Object,
        url: String,
        public_id : String
    },
    
}, {timestamps : true});

mentorSchema.index({name: 'text'})


const Mentor =new mongoose.model("Mentor",mentorSchema);
module.exports = Mentor