const notificationRepo = require("../repositories/notificationRepository");
const Asset = require("../models/Asset");

exports.checkDueNotifications = async () => {
    const today = new Date();

    const assets = await Asset.find({
        reminderDate: { $lte: today }
    });

    for (let asset of assets) {
        await notificationRepo.create({
            userId: asset.userId,
            assetId: asset._id,
            message: `Reminder for ${asset.assetName}`,
            reminderDate: asset.reminderDate
        });
    }
};