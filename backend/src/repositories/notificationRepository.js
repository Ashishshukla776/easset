const Notification = require("../models/Notification");

exports.create = (data) =>
    Notification.create(data);

exports.getUserNotifications = (userId) =>
    Notification.find({ userId });