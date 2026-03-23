const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    userId: String,
    assetId: String,
    message: String,
    reminderDate: Date,
    status: {
        type: String,
        default: "pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Notification", notificationSchema);