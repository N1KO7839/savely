import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    verified:{
        type: Boolean,
        default: false
    },
    loggedIn:{
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)  