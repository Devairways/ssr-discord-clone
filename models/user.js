const   mongoose  = require("mongoose");
const   validator = require("validator");

const serverListSchema = new mongoose.Schema({
    server_name: {
        type: String,
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Server",
    },
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true,
        validate: {
            validator: value=>validator.isEmail(value),
            message: "Not a valid Email",
        },
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    servers: [
        serverListSchema
    ],
    profile_picture: {
        type: String,
        default: "/assets/home_icoon.svg",
    },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    created_at: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        default: "user",
    },
    online: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("User", userSchema);