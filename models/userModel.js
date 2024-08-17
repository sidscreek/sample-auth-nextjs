import mongoose from "mongoose";
import { type } from "os";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email address"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: true,
    },

    isVerfied: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,


})


const User = mongoose.models.users || mongoose.model
("users", userSchema);

export default User;

