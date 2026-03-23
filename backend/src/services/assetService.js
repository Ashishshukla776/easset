const assetRepo = require("../repositories/assetRepository");

exports.createAsset = (data) =>
    assetRepo.create(data);

exports.getAssets = (userId) =>
    assetRepo.findByUser(userId);

exports.updateAsset = (id, data) =>
    assetRepo.update(id, data);

exports.deleteAsset = (id) =>
    assetRepo.delete(id);