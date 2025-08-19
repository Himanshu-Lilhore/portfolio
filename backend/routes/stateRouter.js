const express = require("express");
const router = express.Router();
const { addView, getViews } = require("../controllers/stateController");

router.post("/views", addView);
router.get("/get-views", getViews);

module.exports = router;
