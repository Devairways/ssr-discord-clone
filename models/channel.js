const mongoose = require("mongoose");
const Message = require('./messages');

const channelSchema = new mongoose.Schema({
    messages: [
        Message
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