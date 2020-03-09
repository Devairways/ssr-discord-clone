const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema({
    channels: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "channels",
        },
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    server_name: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    server_picture: {
        type: String,
        default: "/img/placeholder.png",
    },
});

module.exports = mongoose.model("Server", serverSchema);