import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        trim: true,
        min: 5,
        max: 20,
    },
    lastname: {
        type: String,
        require: true,
        trim: true,
        min: 5,
        max: 20,
    },
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
        unique: true,
    },
}, {timestamps: true})

const user = mongoose.model("user", userScheme)
export default user;