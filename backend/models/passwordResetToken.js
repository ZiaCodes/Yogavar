const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const passwordResetTokenSchema = mongoose.Schema({
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
        expires: 36000,
        default: Date.now()
    }
});

//hashing email token/OTP
passwordResetTokenSchema.pre('save', async function(next){
    if(this.isModified("token")){
        this.token = await bcrypt.hash(this.token, 10)
    }

    next();
});

passwordResetTokenSchema.methods.compareToken = async function(token) {
   const result = await bcrypt.compare(token , this.token);
   return result;
}

const PasswordResetToekn =new mongoose.model("PasswordResetToekn",passwordResetTokenSchema);

module.exports = PasswordResetToekn;