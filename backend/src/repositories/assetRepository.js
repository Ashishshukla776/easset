const Asset = require("../models/Asset");

exports.create = (data) => Asset.create(data);

exports.findByUser = (userId) =>
    Asset.find({ userId });

exports.update = (id, data) =>
    Asset.findByIdAndUpdate(id, data, { new: true });

exports.delete = (id) =>
    Asset.findByIdAndDelete(id);