const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
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