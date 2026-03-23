const router = require("express").Router();
const controller = require("../controllers/assetController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, controller.createAsset);
router.get("/", auth, controller.getAssets);

module.exports = router;