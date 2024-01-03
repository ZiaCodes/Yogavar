const mongoose = require("mongoose")

// vendor Schema 
const vendorSchema = mongoose.Schema({
    name:{
        type : String,
        trim: true,
        required: true
    },
    vendorName:{
        type : String,
        trim: true,
        required: true
    },
    location:{
        type : String,
        trim: true,
        required: true
    },
    contact:{
        type : String,
        trim: true,
        required: true
    },
    email:{
        type : String,
        trim: true,
        required: true
    },
    
}, {timestamps : true});

vendorSchema.index({name: 'text'})


const Vendor =new mongoose.model("Vendor",vendorSchema);
module.exports = Vendor