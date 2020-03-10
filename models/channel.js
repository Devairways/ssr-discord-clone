const mongoose = require("mongoose");
const Message = require('./messages');

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
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
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Channel", channelSchema);