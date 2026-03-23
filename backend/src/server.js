require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

require("./jobs/reminderJob");

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});