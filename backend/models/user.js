const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


// user Schema 
const userSchema = mongoose.Schema({
    name:{
        type : String,
        trim: true,
        required: true
    },
    avatar:{
        type : Object,
        url: String,
        public_id : String
    },
    phoneNumber:{
        type : String,
        trim: true,
    },
    email:{
        type : String,
        trim: true,
        unique: true,
        required: true
    },
    gender:{
        type : String,
        trim: true,
    },
    age:{
        type : String,
        trim: true,
    },
    company:{
        type : String,
        trim: true,
    },
    password:{
        type : String,
        required: true
    },
    isVerified:{
        type : Boolean,
        required: true,
        default: false
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ['admin', 'user']
    }
})

// hashing password if modified
userSchema.pre('save',async function(next) {
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password, 10);
    }

    next();
})

userSchema.methods.comparePassword = async function(password) {
    const result = await bcrypt.compare(password , this.password);
    return result;
 }

const User =new mongoose.model("User",userSchema);
module.exports = User