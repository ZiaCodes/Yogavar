const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const emailVerificationTokenSchema = mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    token:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        expires: 3600,
        default: Date.now()
    }
});

//hashing token/OTP
emailVerificationTokenSchema.pre('save', async function(next){
    if(this.isModified("token")){
        this.token = await bcrypt.hash(this.token, 10)
    }

    next();
});

emailVerificationTokenSchema.methods.compareToken = async function(token) {
   const result = await bcrypt.compare(token , this.token);
   return result;
}

const EmailVerificationToken =new mongoose.model("EmialVerificationToken",emailVerificationTokenSchema);

module.exports = EmailVerificationToken;