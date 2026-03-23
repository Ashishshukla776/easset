const User = require("../models/User");

exports.createUser = (data) => User.create(data);

exports.findByEmail = (email) =>
    User.findOne({ email });