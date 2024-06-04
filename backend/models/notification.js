const mongoose = require("mongoose")

// vendor Schema 
const notificationSchema = mongoose.Schema({
    date:{
        type : String,
        required: true
    },
    time:{
        type : String,
        required: true
    },
    dashBoardSheet:{
        type : Object,
        url: {type: String,required: true},
        public_id : {type: String,required: true},
        required: true,
    }
    
}, {timestamps : true});


const Notification =new mongoose.model("Notification",notificationSchema);
module.exports = Notification