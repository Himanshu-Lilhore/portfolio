const express = require('express');
const router = express.Router();
const {addView} = require('../controllers/stateController')

router.post('/views', addView)

module.exports = router; 