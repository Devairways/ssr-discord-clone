const   mongoose  = require("mongoose");
const   validator = require("validator");

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
        {
            type: String,
            ref: "Channel",
        },
    ],
    profile_picture: {
        type: String,
        default: "/img/placeholder.png",
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