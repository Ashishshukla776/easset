const assetService = require("../services/assetService");

exports.createAsset = async (req, res) => {
    const asset = await assetService.createAsset({
        ...req.body,
        userId: req.user.id
    });

    res.json(asset);
};

exports.getAssets = async (req, res) => {
    const assets = await assetService.getAssets(req.user.id);
    res.json(assets);
};