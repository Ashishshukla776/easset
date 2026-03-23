const cron = require("node-cron");
const notificationService = require("../services/notificationService");

cron.schedule("0 9 * * *", () => {
    notificationService.checkDueNotifications();
});