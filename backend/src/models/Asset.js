const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    assetName: String,
    category: String,
    purchaseDate: Date,
    assetValue: Number,
    warrantyExpiryDate: Date,
    reminderDate: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Asset", assetSchema);