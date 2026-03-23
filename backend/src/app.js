const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const assetRoutes = require("./routes/assetRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/assets", assetRoutes);

module.exports = app;