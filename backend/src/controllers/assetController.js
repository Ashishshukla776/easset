const assetService = require("../services/assetService");

exports.createAsset = async (req, res) => {
    console.log("BODY:", req.body);
    console.log("USER:", req.user);

    try {
        const asset = await assetService.createAsset({
            ...req.body,
            userId: req.user.id
        });

        res.json(asset);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

exports.getAssets = async (req, res) => {
    const assets = await assetService.getAssets(req.user.id);
    res.json(assets);
};