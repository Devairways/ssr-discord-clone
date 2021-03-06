const mongoose = require("mongoose");

const channelListSchema = new mongoose.Schema({
    channel_name: {
        type: String,
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Channel",
    },
});

const serverSchema = new mongoose.Schema({
    channels: [
        channelListSchema
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
        default: "public\assets\home_icoon.svg",
    },
});

module.exports = mongoose.model("Server", serverSchema);