const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    author: {
        type: String,
        ref: "User",
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const channelSchema = new mongoose.Schema({
    messages: [
        messageSchema
    ],
    channel_name: {
        type: String,
        required: true,
    },
    server: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Server",
        required: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Channel", channelSchema);